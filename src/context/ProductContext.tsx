import React, {
    createContext,
    FC,
    ReactNode,
    useContext,
    useEffect,
    useState
} from "react";
import {ProductTypes} from "../types";
import {getProductData} from "../utils";
import {cartQuantity} from "../utils/cartQuantity.ts";
import {useLocalStorage} from "../hooks/useLocalStorage.ts";

type ProductContextType = {
    product: ProductTypes[];
    addToCart: (productItem: ProductTypes) => void;
    productCart: ProductTypes[];
    removeProduct: (id: number) => void;
    total: number;
    handlerQuantity: number;
}

const ProductContext = createContext({} as ProductContextType);
export const useProduct = () => useContext(ProductContext);
export const ProductProvider: FC<{
    children?: ReactNode | undefined
}> = ({children}) => {
    const [product, setProduct] = useState<ProductTypes[]>([]);
    const [productCart, setProductCart] = useLocalStorage<ProductTypes[]>(
        "productCart",
        []
    );
    const [total, setTotal] = useState<number>(0);

    const addToCart = (productItem: ProductTypes) => {
        const exist = productCart.find((item) => item.id === productItem.id);

        if (exist) {
            const newProduct = productCart.map((item) => item.id === productItem.id ? {
                ...item,
                quantity: item.quantity + 1
            } : item)
            setProductCart(newProduct)
        } else {
            setProductCart([...productCart, {...productItem, quantity: 1}])
        }
    }

    const removeProduct = (id: number) => {
        const exist = productCart.find((item) => item.id === id);

        if (exist?.quantity === 1) {
            setProductCart(productCart.filter((item) => item.id !== id));
        } else {
            const newProduct = productCart.map((item) => item.id === id ? {
                ...item,
                quantity: item.quantity - 1
            } : item)
            setProductCart(newProduct);
        }
    }

    useEffect(() => {
        getProductData().then((data) => setProduct(data))
    }, []);


    useEffect(() => {
        const total = productCart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
        setTotal(total);
    }, [productCart]);

    const handlerQuantity = cartQuantity(productCart);

    const productValues = {
        product,
        addToCart,
        productCart,
        removeProduct,
        total,
        handlerQuantity
    };

    return (
        <ProductContext.Provider value={productValues}>
            {children}
        </ProductContext.Provider>
    );
};
