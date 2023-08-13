import styled from 'styled-components';

export const ValidationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
`

export const ValidationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;
`

export const ValidationForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ValidationInput = styled.input<{ borderColor?: string }>`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 10px;
  border-radius: 5px;
  outline: none;
  border: 1px solid ${({borderColor}) => borderColor ? borderColor : '#ccc'};
`

export const ValidationButton = styled.button`
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background-color: #1a73e8;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0d47a1;
  }
`

export const HomeButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(25%, 25%);
  background-color: transparent;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #1a73e8;
    transition: color 0.3s ease-in-out;
  }
`

export const ShowPassButton = styled.button`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #1a73e8;
  }
`



