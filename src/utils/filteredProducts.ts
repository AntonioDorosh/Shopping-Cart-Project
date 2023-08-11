import {ProductTypes} from "../types";

export const filteredProducts = (product: ProductTypes[], searchTerm: string) => {
    return product.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
}