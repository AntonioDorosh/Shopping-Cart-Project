import React from 'react';
import {AppStyled} from "../styles/App.styled.tsx";
import {Link} from "react-router-dom";
import {AiOutlineRollback} from "react-icons/ai";
import {BackButtonStyled} from "../styles/Favorite.styled.tsx";
import {useProduct} from "../context/ProductContext.tsx";
import {formatCurrency} from "../utils/formatCurrency.ts";
import {CardImage, CardTitle, GridCard} from "../components/Card/GridCard.tsx";
import {
    CardButton,
    CardPrice
} from "../components/CardItem/CardItem.styled.tsx";

const Favorite = () => {

    const {favorite, deleteFromFavorite} = useProduct();

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
                    <GridCard>
                        {favorite.map(({imgSrc, title, price, id}) => (
                            <div>
                                <CardImage src={imgSrc} alt={title}/>
                                <CardTitle>{title}</CardTitle>
                                <div>
                                    <CardPrice>Price: {formatCurrency(price)}</CardPrice>
                                    <CardButton
                                        onClick={() => deleteFromFavorite(id)}>Remove</CardButton>
                                </div>
                            </div>
                        ))}
                    </GridCard>
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