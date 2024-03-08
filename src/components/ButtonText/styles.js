import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  background: none;

  > svg {
    color: ${({theme}) => theme.COLORS.CLARO};
  }
`