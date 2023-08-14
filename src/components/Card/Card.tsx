import React from 'react';
import {CardStyled} from "./Card.styled.tsx";
import CardItem from "../CardItem/CardItem.tsx";
import {useProduct} from "../../context/ProductContext.tsx";
import {filteredProducts} from "../../utils/filteredProducts.ts";

type CardPropsType = {
    searchTerm: string
}

const Card = ({searchTerm}: CardPropsType) => {
    const {product} = useProduct();

    const filterProduct = filteredProducts(product, searchTerm);

    return (
        <CardStyled>
            {filterProduct?.map((item) => <CardItem key={item.id} {...item}/>)}
        </CardStyled>
    );
};

export default Card;