import React from 'react';
import {ProductTypes} from "../../types";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {CardImage, CardTitle} from "../Card/Card.styled.tsx";
import {CardButton, CardPrice} from "./CardItem.styled.tsx";
import {useProduct} from "../../context/ProductContext.tsx";

const CardItem: React.FC<ProductTypes> = (props) => {
    const {id, price, title, imgSrc} = props;
    const {addToCart, addToFavorite} = useProduct();

    return (
        <article key={id}>
            <CardImage src={imgSrc} alt={title}/>
            <CardTitle>{title}</CardTitle>
            <CardPrice>Price: {formatCurrency(price)}</CardPrice>
            <CardButton onClick={() => addToCart({...props})}>+ Add To
                Cart</CardButton>
            <CardButton onClick={() => addToFavorite(id)}>+ Add To
                Favorite</CardButton>
        </article>
    );
};

export default CardItem;