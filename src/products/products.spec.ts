import products from "../../data/products";
import ProductHandler from "./products";

const productHandler = new ProductHandler();

describe("Products", () => {
    it("Should return list of products", () => {
        const allProducts = productHandler.findProducts();

        expect(allProducts).toEqual(products);
        expect(allProducts.length).toBe(4);
    });

    it("Should find product by sku", () => {
        const product = productHandler.findProduct("atv");

        expect(product).toEqual({
            sku: "atv",
            name: "Apple TV",
            price: 109.5,
        });
    });

    it("Should throw error if product not found", () => {
        expect(() => productHandler.findProduct("not-found")).toThrow("Product not found");
    });
});
