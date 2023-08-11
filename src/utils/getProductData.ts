import {API_KEY} from "./index.ts";
import {ProductTypes} from "../types";

export const getProductData = async (): Promise<ProductTypes[]> => {
    try {
        const response = await fetch(API_KEY);
        return await response.json();
    } catch (e) {
        console.log(e)
        return [];
    }
}
