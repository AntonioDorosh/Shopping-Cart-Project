import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Favorite from "./pages/Favorite.tsx";
import Home from "./pages/Home.tsx";

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path='/favorites' element={<Favorite/>}/>
            </Routes>
        </>
    )
};

export default App;