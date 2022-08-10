# ZellerShop
The checkout system of all new ZellerShop!

## How to run:
1. clone the repository
2. run `yarn`
3. run `yarn start`


## Project Structure
- `./main.ts`: Entry file. 
- `./src/checkout.ts`: Checkout module, which is responsible for hanlding product scan and total amount calculation.
- `./src/products.ts`: Product module, returns list of product and finds products by sku.
- `./src/riles.ts`: Rule module, returns list of rules. 
- `./data`: It contains the list of Products and the Checkout Rules. Rules and Products can be customised on the respective files.
