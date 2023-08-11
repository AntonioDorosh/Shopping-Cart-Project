import React, {createContext, FC, ReactNode, useContext, useState} from "react";

type ModalContextType = {
    modal: boolean;
    toggleModal: () => void;
}

const ModalContext = createContext({} as ModalContextType);
export const useModal = () => useContext(ModalContext);
export const ModalProvider: FC<{
    children?: ReactNode | undefined
}> = ({children}) => {
    const [modal, setModal] = useState<boolean>(false);

    const toggleModal = () => setModal(!modal);

    const modalValue = {
        modal,
        toggleModal,
    };

    return (
        <ModalContext.Provider value={modalValue}>
            {children}
        </ModalContext.Provider>
    );
};
