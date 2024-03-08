import styled from "styled-components"

export const Container = styled.footer`
  grid-area: footer;
  display: flex;
  color: ${({theme}) => theme.COLORS.CLARO};
  width: 100%;
  height: auto;
  align-items: end;
  justify-content: center;
  font-size: 1rem;
`