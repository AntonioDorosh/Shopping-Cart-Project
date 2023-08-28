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
    addToFavorite: (id: number) => void;
    favorite: ProductTypes[];
    filter: string;
    setFilter: (filter: string) => void;
    selectedByFilter: ProductTypes[];
    deleteFromFavorite: (id: number) => void;
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
    const [favorite, setFavorite] = useLocalStorage<ProductTypes[]>(
        "favorite",
        []
    );
    const [total, setTotal] = useState<number>(0);
    const [filter, setFilter] = useState('');

    const selectedByFilter = product.filter((item) => {
        if (filter === '') {
            return item;
        } else if (filter === 'lowest-price') {
            return product.sort((a, b) => a.price - b.price);
        } else if (filter === 'highest-price') {
            return product.sort((a, b) => b.price - a.price);
        } else if (filter === 'a-z') {
            return product.sort((a, b) => a.title.localeCompare(b.title));
        } else if (filter === 'z-a') {
            return product.sort((a, b) => b.title.localeCompare(a.title));
        } else {
            return item;
        }
    });

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

    const addToFavorite = (id: number) => {
        const exist = favorite.find((item) => item.id === id);

        if (exist) {
            setFavorite(favorite.filter((item) => item.id !== id));
        } else {
            const newProduct = product.filter((item) => item.id === id);
            setFavorite([...favorite, ...newProduct]);
        }
    }

    const deleteFromFavorite = (id: number) => {
        setFavorite(favorite.filter((item) => item.id !== id))
    };

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
        handlerQuantity,
        addToFavorite,
        favorite,
        filter,
        setFilter,
        selectedByFilter,
        deleteFromFavorite
    };

    return (
        <ProductContext.Provider value={productValues}>
            {children}
        </ProductContext.Provider>
    );
};
