import React from 'react';
import {
    InputSearchStyled,
    InputStyled,
    LabelStyled
} from "./InputSearch.styled.tsx";

type InputSearchPropsType = {
    searchTerm: string
    setSearchTerm: (searchTerm: string) => void
}

const InputSearch = ({searchTerm, setSearchTerm}: InputSearchPropsType) => {

    return (
        <InputSearchStyled>
            <LabelStyled>All Shoes</LabelStyled>
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