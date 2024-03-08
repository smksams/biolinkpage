import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
:root {
  font-size: 62.5%;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  background-attachment: fixed;
  background-size: cover;
  background-image: linear-gradient(#FF9AB1, #000000);
}

body, input, button, textarea {
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.6rem;
  outline: none;
}

a {
  text-decoration: none;
}

button, input, textarea {
border: none;
color: ${({ theme }) => theme.COLORS.CLARO}
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}
`
