import styled from "styled-components";

export const HeaderStyled = styled.header`
  margin: 0 0 3.5rem 0;
`

export const HeaderWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > h2 {
    flex: 1 1 auto;
  }

  & > nav {
    font-size: 1.5rem;
  }

  & > nav > ul {
    cursor: pointer;
  }
`

export const HeaderList = styled.ul`
  display: flex;
  gap: 10px;
`

export const HeaderButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  font-size: 1.5rem;

  &:hover {
    color: #0D6EFD;
    transition: color 0.3s ease-in-out;
  }
`

export const HeaderNav = styled.nav`
  position: relative;
`

export const QuantityCounter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #0D6EFD;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
`