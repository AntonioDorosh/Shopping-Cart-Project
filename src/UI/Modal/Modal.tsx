import React from 'react';
import {
    ModalButton,
    ModalHeader,
    ModalStyled,
    ModalWrapper
} from "./Modal.styled.tsx";
import {GrClose} from "react-icons/gr";
import ProductCart from "../../components/ProductCart/ProductCart.tsx";

type ModalProps = {
    modal: boolean;
    toggleModal: () => void;
}

const Modal = ({modal, toggleModal}: ModalProps) => {

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