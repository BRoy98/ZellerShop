import Products from "../data/products";
import { Product } from "./checkout";

class ProductHandler {
    findProducts(): Product[] {
        return Products;
    }

    findProduct(sku: string): Product {
        const product = Products.find((product) => product.sku === sku);

        if (!product) {
            throw new Error("Product not found");
        }
        return product;
    }
}

export default ProductHandler;
