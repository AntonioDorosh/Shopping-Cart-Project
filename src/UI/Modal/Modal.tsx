import React from 'react';
import {
    ModalButton,
    ModalHeader,
    ModalStyled,
    ModalWrapper
} from "./Modal.styled.tsx";
import {GrClose} from "react-icons/gr";
import ProductCart from "../../components/Cart/ProductCart.tsx";
import {useModal} from "../../context/ModalContext.tsx";

const Modal = () => {
    const {modal, toggleModal} = useModal();

    if (!modal) {
        return null;
    }

    return (
        <ModalStyled>
            <ModalWrapper>
                <ModalHeader>
                    <h2>Cart</h2>
                    <ModalButton
                        onClick={toggleModal}><GrClose/></ModalButton>
                </ModalHeader>
                <ProductCart/>
            </ModalWrapper>
        </ModalStyled>
    );
};

export default Modal;