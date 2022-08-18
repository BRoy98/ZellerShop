import CheckoutHandler from "./checkout";
import ProductHandler from "../products/products";
import rules from "../../data/rules";

const productHandler = new ProductHandler();

const macbook = productHandler.findProduct("mbp");
const appletv = productHandler.findProduct("atv");
const ipad = productHandler.findProduct("ipd");
const vga = productHandler.findProduct("vga");

describe("Checkout", () => {
    it("Should scan products and calculate total price", () => {
        const checkout = new CheckoutHandler(rules);

        checkout.scan(macbook);
        checkout.scan(appletv);
        checkout.scan(ipad);
        checkout.scan(vga);
        expect(checkout.total()).toBe(2089.48);
    });

    it("Should calculate price with rules applied", () => {
        const checkout = new CheckoutHandler(rules);

        checkout.scan(appletv);
        checkout.scan(ipad);
        checkout.scan(ipad);
        checkout.scan(appletv);
        checkout.scan(ipad);
        checkout.scan(ipad);
        checkout.scan(ipad);

        expect(checkout.total()).toBe(2718.95);
    });
});
