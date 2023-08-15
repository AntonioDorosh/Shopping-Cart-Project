import React from 'react';
import {ProductTypes} from "../../types";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {CardImage, CardTitle} from "../Card/Card.styled.tsx";
import {CardButton, CardPrice, FavoriteButton} from "./CardItem.styled.tsx";
import {useProduct} from "../../context/ProductContext.tsx";
import {AiOutlineHeart} from "react-icons/ai";

const CardItem: React.FC<ProductTypes> = (props) => {
    const {id, price, title, imgSrc} = props;
    const {addToCart, addToFavorite} = useProduct();

    return (
        <article style={{position: 'relative'}} key={id}>
            <CardImage src={imgSrc} alt={title}/>
            <CardTitle>{title}</CardTitle>
            <CardPrice>Price: {formatCurrency(price)}</CardPrice>
            <CardButton onClick={() => addToCart({...props})}>+ Add To
                Cart</CardButton>
            <FavoriteButton onClick={() => addToFavorite(id)}><AiOutlineHeart/></FavoriteButton>
        </article>
    );
};

export default CardItem;