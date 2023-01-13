import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
 }
html {
  font-size: 62.5%;
  scroll-behavior: smooth; 
  font-family: "Work Sans", sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  overflow-x: hidden;
  text-decoration: none;
}

body {
  overflow-x: hidden;
   
    scrollbar-width: thin;
}
html::-webkit-scrollbar {
    width: 16px;
    height: 16px;
}
html::-webkit-scrollbar-thumb {
    background: #434343;
    border-radius: 16px;
    box-shadow: inset 2px 2px 2px hsl(0deg 0% 100% / 25%), inset -2px -2px 2px rgb(0 0 0 / 25%);
}
html::-webkit-scrollbar-track {
    background: linear-gradient(90deg,#434343,#434343 1px,#111 0,#111);
}

 
a {
  text-decoration: none;
};
@media (max-width:${({theme}) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }

        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}

@media (max-width:${({ theme }) => theme.media.mobile}) {

      html{
        font-size: 60%;
      }
      .grid{
        gap: 3.2rem;
      } 
      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
};
`;

  


