import React from 'react';
import {useProduct} from "../../context/ProductContext.tsx";


const Select = () => {
    const {filter, setFilter} = useProduct();

    return (
        <select value={filter}
                onChange={(event) => setFilter(event.target.value)}>
            <option value="all">All</option>
            <option value="lowest-price">lowest price</option>
            <option value="highest-price">highest price</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
        </select>
    );
};

export default Select;