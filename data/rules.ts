import { RuleTypes } from "../src/rules/rules";

export default [
    {
        id: 1,
        type: "ONE_LESS_PRICE" as RuleTypes,
        min_qty: 3,
        product_sku: "atv",
    },
    {
        id: 2,
        type: "EACH_LESS_PRICE" as RuleTypes,
        min_qty: 4,
        each_price: 499.99,
        product_sku: "ipd",
    },
];
