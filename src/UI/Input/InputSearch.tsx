import React from 'react';
import {
    InputSearchStyled,
    InputStyled,
    LabelStyled
} from "./InputSearch.styled.tsx";
import {useSearch} from "../../context/SearchProducts.tsx";


const InputSearch = () => {
    const { searchProduct, onChangeHandler } = useSearch();

    return (
        <InputSearchStyled>
            <LabelStyled>All Shoes</LabelStyled>
            <InputStyled type="text" placeholder="Search..." value={searchProduct} onChange={onChangeHandler}/>
        </InputSearchStyled>
    );
};

export default InputSearch;