import Rulehandler, { RuleTypes } from "./rules";
import rules from "../../data/rules";

const ruleHandler = new Rulehandler();

describe("Rules", () => {
    it("Should return list of rules", () => {
        const allRules = ruleHandler.findRules();

        expect(allRules).toEqual(rules);
        expect(allRules.length).toBe(2);
    });

    it("Should calculate price for ONE_LESS_PRICE rule", () => {
        const rule = {
            id: 1,
            type: RuleTypes.ONE_LESS_PRICE,
            min_qty: 3,
            product_sku: "atv",
        };
        const product = {
            sku: "atv",
            name: "Apple TV",
            price: 109.5,
        };
        const count = 3;

        const price = ruleHandler.calculatePrice(rule, product, count);

        expect(price).toBe(product.price * 2);
    });

    it("Should calculate price for EACH_LESS_PRICE rule", () => {
        const rule = {
            id: 2,
            type: RuleTypes.EACH_LESS_PRICE,
            min_qty: 4,
            each_price: 499.99,
            product_sku: "ipd",
        };

        const product = {
            sku: "ipd",
            name: "Super iPad",
            price: 549.99,
        };
        const count = 4;

        const price = ruleHandler.calculatePrice(rule, product, count);

        expect(price).toBe(rule.each_price * count);
    });

    it("Should throw error if product sku does not match rule product sku", () => {
        const rule = {
            id: 1,
            type: RuleTypes.ONE_LESS_PRICE,
            min_qty: 3,
            product_sku: "atv",
        };
        const product = {
            sku: "ipd",
            name: "Super iPad",
            price: 549.99,
        };
        const count = 3;

        expect(() => ruleHandler.calculatePrice(rule, product, count)).toThrowError(
            "product sku does not match rule product sku"
        );
    });
});
