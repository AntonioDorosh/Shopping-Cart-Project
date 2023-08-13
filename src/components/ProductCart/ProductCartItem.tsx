import React from 'react';
import {
    ProductButton,
    ProductCartImage,
    ProductWrapper
} from "./ProductCart.styled.tsx";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {ProductTypes} from "../../types";
import {useProduct} from "../../context/ProductContext.tsx";
import {BsTrash} from "react-icons/bs";

const ProductCartItem = (props: ProductTypes) => {
    const {removeProduct} = useProduct();
    const {id, imgSrc, title, price, quantity} = props;

    return (
        <>
            <ProductWrapper key={id}>
                <ProductCartImage src={imgSrc}
                                  alt={title}/>
                <div>
                    <h3>{title}</h3>
                    <span>{formatCurrency(price)}</span>
                </div>
                <span>x{quantity}</span>
                <ProductButton
                    onClick={() => removeProduct(id)}><BsTrash/></ProductButton>
            </ProductWrapper>
        </>
    );
};

export default ProductCartItem;