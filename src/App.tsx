import React from 'react';
import './App.css';
import {AppStyled} from "./styles/App.styled.tsx";
import Header from "./components/Header/Header.tsx";
import InputSearch from "./UI/Input/InputSearch.tsx";
import Card from "./components/Card/Card.tsx";
import {ProductProvider} from "./context/ProductContext.tsx";
import {ModalProvider} from "./context/ModalContext.tsx";
import Modal from "./UI/Modal/Modal.tsx";
import {SearchProvider} from "./context/SearchProducts.tsx";


const App = () => {

    return (
        <ProductProvider>
            <ModalProvider>
                <AppStyled>
                    <Header/>
                    <SearchProvider>
                        <InputSearch/>
                        <Card/>
                    </SearchProvider>
                </AppStyled>
                <Modal/>
            </ModalProvider>
        </ProductProvider>
    );
};

export default App;