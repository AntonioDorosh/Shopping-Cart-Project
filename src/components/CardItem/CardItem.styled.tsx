import styled from "styled-components";

export const CardPrice = styled.span`
  display: block;
  margin: 0 auto 0.9rem;
`

export const CardButton = styled.button`
  width: 100%;
  background-color: #000;
  border: none;
  color: #ffffff;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(234, 191, 0);
    transition: background-color 0.3s ease-in-out;
  }
`

export const FavoriteButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: rgb(234, 191, 0);
    transition: color 0.3s ease-in-out;
  }
`
