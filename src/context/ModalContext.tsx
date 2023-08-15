import React, {createContext, FC, ReactNode, useContext, useState} from "react";

type ModalContextType = {
    toggleModal: () => void;
    modal: boolean;
}

const ModalContext = createContext({} as ModalContextType);
export const useModal = () => useContext(ModalContext);
export const ModalProvider: FC<{
    children?: ReactNode | undefined
}> = ({children}) => {
    const [modal, setModal] = useState<boolean>(false);

    const toggleModal = () => setModal(!modal);

    const modalValues = {
        toggleModal,
        modal
    };

    return (
        <ModalContext.Provider value={modalValues}>
            {children}
        </ModalContext.Provider>
    );
};
