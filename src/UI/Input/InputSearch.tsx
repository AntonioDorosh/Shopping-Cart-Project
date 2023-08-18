import React from 'react';
import {InputSearchStyled, InputStyled} from "./InputSearch.styled.tsx";
import Select from "../Select/Select.tsx";

type InputSearchPropsType = {
    searchTerm: string
    setSearchTerm: (searchTerm: string) => void
}

const InputSearch = ({searchTerm, setSearchTerm}: InputSearchPropsType) => {
    
    return (
        <InputSearchStyled>
            <Select/>
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