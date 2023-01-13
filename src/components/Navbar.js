import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg"; 
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const Nav = styled.nav`
        .navbar-list {
           display: flex;
            gap: 4.8rem; 
            margin-top:5px;
            li {
              list-style: none;

              .navbar-link {
                &:link,
                &:visited { 
                  letter-spacing: 2px; 
                   color: #262626d0; 
                  font-weight: 600;
                  display: inline-block;
                  text-decoration: none;
                  font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
                  text-transform: uppercase;
                  color: ${({ theme }) => theme.colors.headerTextColor};
                  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                  transition: color 0.3s linear;
                } 
                 &:after{
                 content:'';
                  width:0%;
                 
                  height:2px;
                 background:#FFC000;
                 display: block;
                 margin: auto;
                 transition: 0.2s;

                  }
                &:hover::after{
                    width: 100%;

                 } 
              }
            }
          }

          .mobile-navbar-btn {
            display: none;

            .close-outline {
              display: none;
            }
          }

          .mobile-navbar-btn[name="close-outline"] {
            display: none;
          }

          @media (max-width: ${({ theme }) => theme.media.mobile}) {
            .mobile-navbar-btn {
              display: inline-block;
              z-index: 999;
              border: ${({ theme }) => theme.colors.headerTextColor};

              .mobile-nav-icon {
                font-size: 3rem;
                color: ${({ theme }) => theme.colors.headerTextColor};
              }
            }

            /* hide the original nav menu  */
            .navbar-list {
              width: 100vw;
              height: 100vh;
              position: absolute;
              top: 0;
              left: 0;
              background-color: #fff; 
              display: flex;
              justify-content: center;
              align-content: center;
              flex-direction: column;
              text-align: center; 
              transform: translateX(100%); 
              visibility: hidden;
              opacity: 0; 

              li {
                .navbar-link {
                    &:after{
                 content:'';
                  width:0%;
                  height:2px;
                 background:#FFC000;
                 display: block;
                 margin: auto;
                 transition: 0.1s;

                  }
                &:hover::after{
                    width: 100%;

                 } 
                 &:link,
                 &:visited { 
                  font-size: ${({ theme }) => theme.fontSize.headerfontSizeH};
                } 
                }
              }
            }

            .active .mobile-nav-icon {
              display: none;
              font-size: 3rem;
              position: absolute;
              top: 3%;
              right: 10%;
              color: ${({ theme }) => theme.colors.black};
              z-index: 9999;
            }

            .active .close-outline {
              display: inline-block;
            }

            .active .navbar-list {
              visibility: visible;
              opacity: 1;
              transform: translateX(0);
              z-index: 999;
            }
        }
       `;

    return (
        <Nav>
            <div className={openMenu ? "menuIcon active" : "menuIcon"}>
                <ul className="navbar-list">
                    <li>
                        <NavLink
                            className="navbar-link"
                            onClick={() => setOpenMenu(false)}
                            to="/">
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navbar-link"
                            onClick={() => setOpenMenu(false)}
                            to="/About">
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navbar-link"
                            onClick={() => setOpenMenu(false)}
                            to="/Admission">
                            ADMISSION
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className="navbar-link"
                            onClick={() => setOpenMenu(false)}
                            to="/Academics">
                            
                            ACADEMICS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="navbar-link"
                            onClick={() => setOpenMenu(false)}
                            to="/Teacher"> 
                            TEACHER
                        </NavLink>
                    </li>
 
                </ul>
                {/* //nav icon */}
                <div className="mobile-navbar-btn">
                    <CgMenu
                        name="menu-outline"
                        className="mobile-nav-icon"
                        onClick={() => setOpenMenu(true)}
                    />
                    <CgCloseR
                        name="close-outline"
                        className="close-outline mobile-nav-icon"
                        onClick={() => setOpenMenu(false)}
                    />
                </div>
            </div>
        </Nav>
    );
};

export default Navbar;
