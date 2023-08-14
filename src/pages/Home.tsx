import React, {useState} from 'react';
import {AppStyled} from "../styles/App.styled.tsx";
import Header from "../components/Header/Header.tsx";
import InputSearch from "../UI/Input/InputSearch.tsx";
import Card from "../components/Card/Card.tsx";
import Modal from "../UI/Modal/Modal.tsx";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);

    const toggleModal = () => setModal(!modal);

    return (
        <AppStyled>
            <Header toggleModal={toggleModal}/>
            <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <Card searchTerm={searchTerm}/>
            <Modal modal={modal} toggleModal={toggleModal}/>
        </AppStyled>
    );
};
export default Home;