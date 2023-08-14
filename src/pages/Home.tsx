import React, {useState} from 'react';
import {AppStyled} from "../styles/App.styled.tsx";
import Header from "../components/Header/Header.tsx";
import InputSearch from "../UI/Input/InputSearch.tsx";
import Card from "../components/Card/Card.tsx";
import Modal from "../UI/Modal/Modal.tsx";
import {ModalProvider} from "../context/ModalContext.tsx";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    return (
        <AppStyled>
            <ModalProvider>
                <Header/>
                <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Card searchTerm={searchTerm}/>
                <Modal/>
            </ModalProvider>
        </AppStyled>
    );
};
export default Home;