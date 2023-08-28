import React from 'react';
import {GridCard} from "./GridCard.tsx";
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
        <GridCard>
            {filterProduct?.map((item) => <CardItem key={item.id} {...item}/>)}
        </GridCard>
    );
};

export default Card;