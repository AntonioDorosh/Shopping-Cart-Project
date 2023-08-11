import styled from "styled-components";

export const InputSearchStyled = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  margin: 0 0 2rem 0;
`

export const InputStyled = styled.input`
  border: 1px solid #0D6EFD;
  padding: 10px;
  border-radius: 10px;

  &::placeholder {
    font-weight: 700;
  }
`

export const LabelStyled = styled.label`
  font-weight: 700;
  font-size: 1.5rem;
`