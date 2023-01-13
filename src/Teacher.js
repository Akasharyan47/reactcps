import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./context";
import { FooterBottom } from "./components/Footer.js";

const Teacher = (props) => {
  const { teachersDetail, isloading } = useGlobalContext();
    
  return (
    <> 
      <Main>
        <section>
          <div className="teacherdtl">
            <div className="teacherdtl1">
              <a> OUR TEACHERS </a>
              <span className="adma">Let's meet our best teachers.</span>
            </div>
          </div>
        </section>
        <section>
          {(() => {
            if (isloading) {
              return (
                <div class="d-flex justify-content-center">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )
            }
          })()};
        </section> 

        <section>
          <div className="teacherdtl3">
            {teachersDetail.map((teachersDetail) => {
              const { name, imageUrl, subjects } = teachersDetail;
              return (
                <div className="teachercolumn">
                  <div className="teachercolumn1">
                    <div className="a">
                      <p>
                        <img src={imageUrl} alt={name} />
                      </p>
                    </div>

                    <div className="b row">
                      <a>
                        <p>Name:</p>
                        {name}
                      </a>
                      <br />
                      <br />
                      <a>
                        <p>Subject:</p>
                        {subjects}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Main>
      <FooterBottom />
    </>
  );
};

const Main = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:wght@400;500;600;700&display=swap");
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  letter-spacing: 0.6px;

  html {
    font-family: "Work Sans", sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  .teacherdtl {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: inline-flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .teacherdtl .teacherdtl1 {
    display: inline;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-item: center;
    margin-bottom: 50px;
  }
  .teacherdtl1 a:before {
    background-color: ${({ theme }) => theme.colors.backgroundYellow};
    margin-right: 10px;
    display: inline-block;
    content: "";
    border: 3px solid ${({ theme }) => theme.colors.backgroundYellow};
    width: 60px;
    border-radius: 2.5em;
  }
  .teacherdtl1 a:after {
    background-color: ${({ theme }) => theme.colors.backgroundYellow};
    margin-left: 10px;
    display: inline-block;
    content: "";
    border: 3px solid ${({ theme }) => theme.colors.backgroundYellow};
    width: 60px;
    border-radius: 2.5em;
  };

  .teacherdtl .teacherdtl1 a {
    display: block;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.backgroundBlue};
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeH};
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .teacherdtl .teacherdtl1 span {
    padding: 5px 15px 5px 15px;
    border: 1px solid rgb(40, 40, 40);
  }

  .teacherdtl1 .adma {
    color: rgba(41, 41, 41, 0.892);
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
  }
   ${'' /*  */}

  .teacherdtl3 {
    align-items: center;
    overflow: hidden;
    margin-bottom: 30px;
  }
  .teacherdtl3 .teachercolumn {
    overflow: hidden;
    float: left;
    margin-bottom: 10px;
    width: 50%;
    justify-content: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .teacherdtl3 .teachercolumn1 {
    width: 420px;
    height: 110px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin: 15px;
    display: flex;
    border-radius: 2px;
    align-items: center;
    text-align: start;
    margin-right: 7%;
    margin-left: 7%;
    overflow: hidden;
  }
  .row {
    overflow: hidden;
    width: 100%;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

   ${'' /* mobile    */}
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .teacherdtl3 .teachercolumn {
      width: 100%;
    }
  }

  .teacherdtl3 .a {
    width: 130px;
    height: 100px;
    margin: 5px;
    position: relative;
    border-radius: 2px;
    border: 1px solid white;
    overflow: hidden;
  }
  .teacherdtl3 .a img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .teacherdtl3 .b p {
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.backgroundBlue};
    margin-right: 3px;
  }
  .teacherdtl3 .b a {
    display: inline-flex;
    font-size: ${({ theme }) => theme.fontSize.headerfontSizeM};
    color: #3b3b3b;
    text-transform: capitalize;
  }
`;

export default Teacher;
