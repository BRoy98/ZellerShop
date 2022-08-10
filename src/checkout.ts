import { Rule, RuleTypes } from "./rules";

export interface Product {
    sku: string;
    name: string;
    price: number;
}

class Checkout {
    products: Product[] = [];

    constructor(public readonly rules: Rule[]) {}

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
                    price: product.price,
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

            switch (rule.type) {
                case RuleTypes.ONE_LESS_PRICE:
                    if (itemData.count >= rule.min_qty) {
                        return total + itemData.price * (itemData.count - 1);
                    }
                    return total + itemData.price * itemData.count;

                case RuleTypes.EACH_LESS_PRICE:
                    if (itemData.count >= rule.min_qty) {
                        return total + rule.each_price! * itemData.count;
                    }
                    return total + itemData.price * itemData.count;
                default:
                    return total;
            }
        }, 0);
    }
}

export default Checkout;
