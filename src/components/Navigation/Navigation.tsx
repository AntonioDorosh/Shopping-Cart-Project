import React from 'react';
import {
    HeaderButton,
    HeaderList,
    HeaderNav,
    QuantityCounter
} from "../Header/Header.styled.tsx";
import {BiCart, BiUserCircle} from "react-icons/bi";
import {Link} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";
import {useProduct} from "../../context/ProductContext.tsx";
import {useModal} from "../../context/ModalContext.tsx";

const Navigation = () => {
    const { handlerQuantity } = useProduct();
    const { toggleModal } = useModal();

    return (
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
                <p>
                    {handlerQuantity}
                </p>
            </QuantityCounter>
        </HeaderNav>
    );
};

export default Navigation;