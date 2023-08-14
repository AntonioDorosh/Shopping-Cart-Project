import React from 'react';
import {
    HeaderStyled,
    HeaderWrapper,
    QuantityCounter
} from "./Header.styled.tsx";
import {useProduct} from "../../context/ProductContext.tsx";
import Navigation from "../Navigation/Navigation.tsx";


const Header = () => {
    const {handlerQuantity} = useProduct();

    return (
        <HeaderStyled>
            <HeaderWrapper>
                <img src="src/assets/logo.svg" alt="logo"/>
                <h2>REACT SHOP</h2>
                <Navigation/>
                <QuantityCounter>
                    <p>
                        {handlerQuantity}
                    </p>
                </QuantityCounter>
            </HeaderWrapper>
        </HeaderStyled>
    );
};

export default Header;