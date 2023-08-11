import React from 'react';
import {
    HeaderButton,
    HeaderList, HeaderNav,
    HeaderStyled,
    HeaderWrapper, QuantityCounter
} from "./Header.styled.tsx";
import {BiCart, BiUserCircle} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useModal} from "../../context/ModalContext.tsx";
import {useProduct} from "../../context/ProductContext.tsx";

const Header = () => {
    const {toggleModal} = useModal();
    const {handlerQuantity} = useProduct();

    return (
        <HeaderStyled>
            <HeaderWrapper>
                <img src="src/assets/logo.svg" alt="logo"/>
                <h2>REACT SHOP</h2>
                <HeaderNav>
                    <HeaderList>
                        <li>
                            <HeaderButton onClick={toggleModal}>
                                <BiCart/>
                            </HeaderButton>
                        </li>
                        <li>
                            <Link to='/favorites'>
                                <HeaderButton>
                                    <AiOutlineHeart/>
                                </HeaderButton>
                            </Link>
                        </li>
                        <li>
                            <Link to='/validation'>
                                <HeaderButton>
                                    <BiUserCircle/>
                                </HeaderButton>
                            </Link>
                        </li>
                    </HeaderList>
                    <QuantityCounter>
                        <p>{handlerQuantity}</p>
                    </QuantityCounter>
                </HeaderNav>
            </HeaderWrapper>
        </HeaderStyled>
    );
};

export default Header;