import React, {useState} from 'react';
import {InputSearchStyled, InputStyled} from "./InputSearch.styled.tsx";
import Select from "../Select/Select.tsx";
import {useProduct} from "../../context/ProductContext.tsx";

type InputSearchPropsType = {
    searchTerm: string
    setSearchTerm: (searchTerm: string) => void
}

const InputSearch = ({searchTerm, setSearchTerm}: InputSearchPropsType) => {

    const [filter, setFilter] = useState<string>('All');
    const {product} = useProduct();

    const selectByCategories = product.filter((item) => {
        switch (filter) {
            case 'All':
                return item;
            case 'lowest-price':
                return product.sort((a, b) => a.price - b.price);
            case 'highest-price':
                return product.sort((a, b) => b.price - a.price);
        }
    })

    return (
        <InputSearchStyled>
            <Select filter={filter} setFilter={setFilter}/>
            <InputStyled
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
        </InputSearchStyled>
    );
};

export default InputSearch;