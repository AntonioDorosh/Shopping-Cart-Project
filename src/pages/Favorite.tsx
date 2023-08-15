import React from 'react';
import {AppStyled} from "../styles/App.styled.tsx";
import {Link} from "react-router-dom";
import {AiOutlineRollback} from "react-icons/ai";
import {BackButtonStyled} from "../styles/Favorite.styled.tsx";
import {useProduct} from "../context/ProductContext.tsx";
import {formatCurrency} from "../utils/formatCurrency.ts";

const Favorite = () => {

    const {favorite} = useProduct();

    console.log('favorite', favorite)

    return (
        <AppStyled>
            <Link to='/'>
                <BackButtonStyled>
                    <AiOutlineRollback/>
                </BackButtonStyled>
            </Link>
            <h1>Favorite</h1>
            {favorite?.length > 0
                ? (
                    favorite.map(({imgSrc, title, price}) => (
                        <div>
                            <img src={imgSrc} alt={title}/>
                            <div>
                                <h2>{title}</h2>
                                <p>{formatCurrency(price)}</p>
                            </div>
                            <button>delete from favorite</button>
                        </div>
                    ))
                )
                : (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <h2>Favorite is empty</h2>
                        <img src="src/assets/empty-box.jpg" alt=""/>
                    </div>
                )}
        </AppStyled>
    );
};

export default Favorite;