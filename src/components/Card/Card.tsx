import React from 'react';
import {CardStyled} from "./Card.styled.tsx";
import CardItem from "../CardItem/CardItem.tsx";
import {useProduct} from "../../context/ProductContext.tsx";
import {filteredProducts} from "../../utils/filteredProducts.ts";
import {useSearch} from "../../context/SearchProducts.tsx";

const Card = () => {
    const {product} = useProduct();
    const {searchProduct} = useSearch();

    const filterProduct = filteredProducts(product, searchProduct);

    return (
        <CardStyled>
            {filterProduct?.map((item) => <CardItem key={item.id} {...item}/>)}
        </CardStyled>
    );
};

export default Card;