import React, {useState} from 'react';
import {ProductTypes} from "../../types";
import {formatCurrency} from "../../utils/formatCurrency.ts";
import {CardImage, CardTitle} from "../Card/GridCard.tsx";
import {CardButton, CardPrice, FavoriteButton} from "./CardItem.styled.tsx";
import {useProduct} from "../../context/ProductContext.tsx";
import {AiOutlineHeart} from "react-icons/ai";
import {BsFillHeartFill} from "react-icons/bs";

const CardItem: React.FC<ProductTypes> = (props) => {
    const {id, price, title, imgSrc} = props;
    const {addToCart, addToFavorite} = useProduct();
    const [isOnFavorite, setIsOnFavorite] = useState<boolean>(false);

    const toggleFavorite = (id: number) => {
        addToFavorite(id)
        setIsOnFavorite(!isOnFavorite);
    }

    return (
        <article style={{position: 'relative'}} key={id}>
            <CardImage src={imgSrc} alt={title}/>
            <CardTitle>{title}</CardTitle>
            <CardPrice>Price: {formatCurrency(price)}</CardPrice>
            <CardButton onClick={() => addToCart({...props})}>Add To
                Cart</CardButton>
            <FavoriteButton onClick={() => toggleFavorite(id)}>{isOnFavorite ?
                <BsFillHeartFill fill={'yellow'}/> :
                <AiOutlineHeart/>}</FavoriteButton>
        </article>
    );
};

export default CardItem;