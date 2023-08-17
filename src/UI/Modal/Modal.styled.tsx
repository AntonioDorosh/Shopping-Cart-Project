import styled, {keyframes} from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`

const modalBarAppear = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`

export const ModalWrapper = styled.div`
  background-color: #fff;
  width: min(100% - 40px, 400px);
  height: 100%;
  padding: 30px;
  overflow-y: scroll;
  animation: ${modalBarAppear} 0.3s ease-in-out;
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 2rem 0;
`

export const ModalButton = styled.button`
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`


