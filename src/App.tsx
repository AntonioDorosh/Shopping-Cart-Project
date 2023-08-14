import React from 'react';
import './App.css';
import {ProductProvider} from "./context/ProductContext.tsx";
import {ModalProvider} from "./context/ModalContext.tsx";
import Modal from "./UI/Modal/Modal.tsx";
import {SearchProvider} from "./context/SearchProducts.tsx";
import {Route, Routes} from "react-router-dom";
import Favorite from "./pages/Favorite.tsx";
import Home from "./pages/Home.tsx";

const App = () => {

    return (
        <ProductProvider>
            <ModalProvider>
                <SearchProvider>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                    </Routes>
                </SearchProvider>
                <Modal/>
            </ModalProvider>
            <Routes>
                <Route path='/favorites' element={<Favorite/>}/>
            </Routes>
        </ProductProvider>
    );
};

export default App;