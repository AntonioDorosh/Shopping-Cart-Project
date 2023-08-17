import React from 'react';

type SelectPropsType = {
    filter: string
    setFilter: (filter: string) => void
}

const Select = ({filter, setFilter}: SelectPropsType) => {

    return (
            <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                <option value="all">All</option>
                <option value="price">Price</option>
            </select>
    );
};

export default Select;