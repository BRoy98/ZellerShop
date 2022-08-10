import rules from "../data/rules";

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
}

export default RuleHandler;
