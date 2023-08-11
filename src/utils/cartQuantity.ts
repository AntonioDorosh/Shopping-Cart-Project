import {ProductTypes} from "../types";

export const cartQuantity = (productCart: ProductTypes[]) => productCart.reduce((acc, product) => acc + product.quantity, 0);