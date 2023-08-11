import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 0 0.7rem 0;
`

export const ProductCartImage = styled.img`
  width: 125px;
  height: 75px;
  object-fit: cover;
`

export const ProductButton = styled.button`
  color: #ff0000;
  background-color: transparent;
  border: 1px solid #ff0000;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-radius: 0.25rem;
  font-size: 1.2rem;
    display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ff0000;
    color: #fff;
  }
`

export const TotalQuantity = styled.span`
  display: inline-flex;
  width: 100%;
  justify-content: flex-end;
  font-weight: 700;
`

export const EmptyCartStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TotalPrice = styled.h3 `
    display: inline-flex;
    width: 100%;
    justify-content: flex-end;
`