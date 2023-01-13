import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <div className="HeaderLogo">
        <img src="./images/logo.jpg" alt="logo" className="logo" />
        <div className="grid-two-coloumn logo-Name pt-2 ">
          <div className="section-Logo-Name1 text-decoration-none">
            <a class="lgnme">CENTRAL PUBLIC SCHOOL </a>
          </div>
          <div className="section-Logo-Name2">
            <a style={{ fontWeight: "400", letterSpacing: "2px", color: "#7F7F7F", fontStyle: "italic", fontSize: " ${({ theme }) => theme.fontSize.headerfontSizeH}" }}> (Ghusia Kalan) </a>
          </div>
        </div>
      </div>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
@import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300); 
  padding: 0 2rem; 
  box-shadow:1px 1px 4px   rgba(0, 0, 0, 0.664); 
  display: flex;
  justify-content: space-between;
  align-items: center; 
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
  .HeaderLogo{    
   overflow: hidden; 
   display: flex;  
   justify-content: space-between;
   align-items: center;
   }  
   .logo {
    width: 80px;
    height: 80px;
  } 
  .lgnme {  
  letter-Spacing:1px;   
  ${'' /* font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};    */}
  color: #595959;  
  font-size:1.6rem;
  font-weight:600;  
  text-decoration:none;
} 
.logo-Name{  
  padding-left:1rem;   
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .logo { 
    width: 60px;
    height: 60px;
  } 
  .lgnme {   
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
  } 
  }
`;
export default Header;
