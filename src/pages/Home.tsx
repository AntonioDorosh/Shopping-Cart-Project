import React from 'react';
import {AppStyled} from "../styles/App.styled.tsx";
import Header from "../components/Header/Header.tsx";
import InputSearch from "../UI/Input/InputSearch.tsx";
import Card from "../components/Card/Card.tsx";

const Home = () => {
    return (
        <AppStyled>
            <Header/>
            <InputSearch/>
            <Card/>
        </AppStyled>
    );
};
export default Home;