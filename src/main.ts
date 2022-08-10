import Checkout from "./checkout";
import ProductHandler from "./products";
import RuleHandler from "./rules";

const ruleHandler = new RuleHandler();
const productHandler = new ProductHandler();

const rules = ruleHandler.findRules();

// get products
const macbook = productHandler.findProduct("mbp");
const appletv = productHandler.findProduct("atv");
const ipad = productHandler.findProduct("ipd");
const vga = productHandler.findProduct("vga");

// checkout items
const checkout = new Checkout(rules);

// Case 1 - as per given examle
// checkout.scan(appletv);
// checkout.scan(appletv);
// checkout.scan(appletv);
// checkout.scan(vga);

// Case 2 - as per given examle
checkout.scan(appletv);
checkout.scan(ipad);
checkout.scan(ipad);
checkout.scan(appletv);
checkout.scan(ipad);
checkout.scan(ipad);
checkout.scan(ipad);

const total = checkout.total();
console.log(`Total price: ${total}`);
