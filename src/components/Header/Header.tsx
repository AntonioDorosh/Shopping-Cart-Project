import React from 'react';
import {HeaderStyled, HeaderWrapper} from "./Header.styled.tsx";
import Navigation from "../Navigation/Navigation.tsx";

const Header = () => {

    return (

        <HeaderStyled>
            <HeaderWrapper>
                <img src="src/assets/logo.svg" alt="logo"/>
                <h2>REACT SHOP</h2>
                <Navigation/>
            </HeaderWrapper>
        </HeaderStyled>
    );
};

export default Header;