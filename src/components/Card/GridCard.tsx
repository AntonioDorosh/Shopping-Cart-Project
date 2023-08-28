import styled from "styled-components";

export const GridCard = styled.article`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 30px;
`

export const CardTitle = styled.h3`
  margin: 0 auto 0.9rem;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 16px;
  max-width: 150px;
`

export const CardImage = styled.img`
  display: block;
  margin-inline: auto;
`