import React from 'react';
import {AppStyled} from "../styles/App.styled.tsx";
import {Link} from "react-router-dom";
import {AiOutlineRollback} from "react-icons/ai";
import {BackButtonStyled} from "../styles/Favorite.styled.tsx";
import {useProduct} from "../context/ProductContext.tsx";


const Favorite = () => {

    const { favorite } = useProduct();

    console.log('favorite', favorite)

    return (
        <AppStyled>
            <Link to='/'>
                <BackButtonStyled>
                    <AiOutlineRollback/>
                </BackButtonStyled>
            </Link>
        </AppStyled>
    );
};

export default Favorite;