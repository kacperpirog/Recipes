import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
/* font-family: ; */
overflow-x: hidden;
background: #e0e0e0;
font-family: 'EB Garamond', serif;
}

ul {
    list-style: none;
}

button{
    cursor: pointer;
}

i{
    cursor: pointer;
}
h1{
    font-family: 'EB Garamond', serif;
}
h2{
    font-family: 'EB Garamond', serif;
}
h3{
    font-family: 'EB Garamond', serif;
}
h4{
    font-family: 'EB Garamond', serif;
}
h5{
    font-family: 'EB Garamond', serif;
}
link {
    font-family: 'EB Garamond', serif;
}
p{
    font-family: 'EB Garamond', serif;
}

`;

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default GlobalStyles;
