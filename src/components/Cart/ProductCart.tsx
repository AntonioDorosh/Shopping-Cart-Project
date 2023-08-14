import React from 'react';
import {useProduct} from "../../context/ProductContext.tsx";
import {EmptyCartStyled, TotalPrice} from "./ProductCart.styled.tsx";
import ProductCartItem from "./CartItem/ProductCartItem.tsx";
import {formatCurrency} from "../../utils/formatCurrency.ts";

const ProductCart = () => {
    const {productCart, total} = useProduct();

    const renderCartList = () => {
        if (productCart.length === 0) {
            return (
                <EmptyCartStyled>
                    <h3>Cart is empty</h3>
                    <img src='../../assets/empty-box.jpg' alt="empty-cart"/>
                    <span>Add some shoes to your cart</span>
                </EmptyCartStyled>
            );
        }

        if (total > 0 && productCart.length > 0) {
            return (
                <>
                    {productCart.map((item) => (
                        <ProductCartItem key={item.id} {...item} />
                    ))}
                    <TotalPrice>
                        <span>Total: {formatCurrency(total)}</span>
                    </TotalPrice>
                </>
            );
        }
    };

    return (
        <>{renderCartList()}</>
    );
};

export default ProductCart;
