import React from 'react';
import {AppStyled} from "../styles/App.styled.tsx";
import {Link} from "react-router-dom";
import {AiOutlineRollback} from "react-icons/ai";
import {BackButtonStyled} from "./styles/Favorite.styled.tsx";

const Favorite = () => {

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