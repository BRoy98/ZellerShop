import rules from "../../data/rules";
import { Product } from "../products/products";

export enum RuleTypes {
    ONE_LESS_PRICE = "ONE_LESS_PRICE",
    EACH_LESS_PRICE = "EACH_LESS_PRICE",
}

export interface Rule {
    id: number;
    type: RuleTypes;
    min_qty: number;
    each_price?: number;
    product_sku: string;
}

class RuleHandler {
    findRules(): Rule[] {
        return rules;
    }

    calculatePrice(rule: Rule, product: Product, count: number): number {
        if (product.sku !== rule.product_sku) {
            throw new Error("product sku does not match rule product sku");
        }
        switch (rule.type) {
            case RuleTypes.ONE_LESS_PRICE:
                if (count >= rule.min_qty) {
                    return product.price * (count - 1);
                }
                return product.price * count;
            case RuleTypes.EACH_LESS_PRICE:
                if (count >= rule.min_qty) {
                    return rule.each_price! * count;
                }
                return product.price * count;
            default:
                return product.price * count;
        }
    }
}

export default RuleHandler;
