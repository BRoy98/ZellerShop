import { Product } from "../products/products";
import RuleHandler, { Rule, RuleTypes } from "../rules/rules";

class Checkout {
    products: Product[] = [];
    ruleHandler: RuleHandler;

    constructor(public readonly rules: Rule[]) {
        this.ruleHandler = new RuleHandler();
    }

    scan(product: Product) {
        this.products.push(product);
    }

    total() {
        const productMap: any = {};

        // save all item count and price in a map
        this.products.forEach((product) => {
            const itemData = productMap[product.sku];

            if (!itemData) {
                productMap[product.sku] = {
                    ...product,
                    count: 1,
                };
            } else {
                itemData.count++;
            }
        });

        // calculate total price
        return Object.keys(productMap).reduce((total, sku) => {
            const itemData = productMap[sku];
            const rule = this.rules.find((rule) => rule.product_sku === sku);

            if (!rule) {
                return total + itemData.price * itemData.count;
            }
            return total + this.ruleHandler.calculatePrice(rule, itemData, itemData.count);
        }, 0);
    }
}

export default Checkout;
