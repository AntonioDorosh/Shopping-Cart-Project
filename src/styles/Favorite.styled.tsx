import styled from "styled-components";

export const BackButtonStyled = styled.button `
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  position: relative;
  &:hover {
    color: #1a73e8;
    transition: color 0.3s ease-in-out;
    
    &::after {
      content: "BACK";
      position: absolute;
      top: -5%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 1rem;
    }
  }
`

