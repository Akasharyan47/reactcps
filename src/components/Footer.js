import React from "react";
import styled from "styled-components"; 

export const FooterAbout = () => {
  return (
    <Wrapper>
      <footer>
        <section>
          <div className="footerbox">
            <div className="footerabout"><a className="ab">About</a> </div>
            <div className="footerup">
            <h2>Welcome to Central Public School.We are operating since 2006. We are a Hindi/English medium
                school with having different programs, starting from Nursery. Our mission is to provide a safe,
                disciplined learning environment that empowers all students to develop their full potential.
                We have the best-experienced teachers with having immense
                skills. With our program, the children are exposed to a great amount of learning. The blended
                techniques create a unique educational package where children can grow to their fullest
                potential. We offer attractive environment, practical, stimulating materials that meet the needs
                of each child. The teacher gives guidance and encouragement accordingly.<br /><br />

                I encourage you to explore our website to learn more about all that The Central Public School has
                to offer. I also invite you to visit us in person; please contact our Admission Office to
                know more about the admission process. We hope to see you soon!.</h2>
            </div>
          </div>
        </section>
      </footer>
    </Wrapper>
  );
};

export const FooterContactUs = () => {
  return (
    <Wrapper>
      <div className="footercontact">
        <div className="ftcontact1">
          <h2>Contact Us</h2>
        </div>
        <div className="ftcontact2">
          <div className="ftcontact2a">
            <div className="ftcontact2a1">
              <li className="fa-solid fa-earth-asia" aria-hidden="true"></li>
              <a> CENTRAL PUBLIC SCHOOL,<br /> Ghusia Kalan, Bikramganj, Rohtas,<br /> Bihar, 800212</a>
            </div>
          </div>
          <div className="ftcontact2a">
            <div className="ftcontact2a1 ftcontact2a2 ">
              <li style={{ transform: "rotate(-25deg);" }} className="fa-solid fa-phone-volume"> </li>
              <a>+91 7254973847<br /><br />+91 9783738645</a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export const FooterBottom = () => {
  return (
    <Wrapper>
      <div className="footercontact">
        <div className="ftcontact3" > 
          <a>© Copyright 2021-2022 / Central public school</a>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`

@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:wght@400;500;600;700&display=swap");

  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
html {
  font-size: 62.5%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html {
  font-family: "Work Sans", sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

/* footer========================== */

.footerbox {
  display:block;
  position: relative;
  background-color: #F2F2F2;
}

.footerabout {
  ${'' /* margin-top: 30px; */}
  display: block;
  width: 100%; 
  padding-top:10px; 
}
.footerabout a {
  letter-spacing: 1px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.backgroundBlue};
  align-items: center;
  justify-content: center;
  text-align: center;
  display: inline-flex;
  font-weight: bold;
  font-size:${({ theme }) => theme.fontSize.headerfontSizeH};
  font-family: "Segoe UI", "Open Sans", "Helvetica Neue", sans-serif;
} 
.footerup {
  width: 100%;
  height: auto;
  overflow: hidden;
  text-align: center;  
}
.footerup h2 {
  font-weight: 400;
  margin-top: 20px;
  margin-left: 7%;
  margin-right: 7%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: inherit;
  line-height: 20px;
  font-size:${({ theme }) => theme.fontSize.headerfontSizeM};
  align-items: center;
  color:${({ theme }) => theme.colors.headerTextColor}; 
  margin-bottom: 50px;
  letter-spacing: 0.1rem;
  text-align: justify;
}
 
/* footer  contact ============= */

.footercontact {
  margin-top:10px;
  font-family: "Rubik", sans-serif;
  width: 100%;
  overflow: hidden;  
}
.footercontact .ftcontact1 {
  justify-content: center;
  position: relative;
  display: flex;
} 
.footercontact .ftcontact1 h2 {
  color: ${({ theme }) => theme.colors.backgroundBlue};
  letter-spacing: 1px;
  font-size:${({ theme }) => theme.fontSize.headerfontSizeM};
  border-top: 3px solid #FFC000;
  border-bottom: 3px solid #FFC000;
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
}
.footercontact.ftcontact2 {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: block;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch; 
} 
.ftcontact2 .ftcontact2a {
  margin: 2px;
  width: 49%;
  height: auto;
  display:inline-block;
  overflow: hidden; 
}
.ftcontact2a1{
  position: relative;
 display: flex;
  margin: 2px;
  width:fit-content;
  height:fit-content;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;  
}
.ftcontact2a2{
  float: right;
}
.ftcontact2 .ftcontact2a1  li { 
  font-size: 30px;
  color:${({ theme }) => theme.colors.backgroundBlue};
}

.ftcontact2 .ftcontact2a1 a {
  font-family: "Segoe UI", "Open Sans", "Helvetica Neue", sans-serif;
  color: ${({ theme }) => theme.colors.headerTextColorblack};
  margin: 30px; 
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size:${({ theme }) => theme.fontSize.headerfontSizeL};
} 
.footercontact .ftcontact3 {
  position:fixed; 
  display: inline-block;
  width: 100%; 
  bottom:0;
  background-color:${({ theme }) => theme.colors.backgroundYellow};
}

.ftcontact3 a {
  color: rgb(243, 243, 243);
  padding:10px; 
  font-size:${({ theme }) => theme.fontSize.headerfontSizeM};
  display: flex;  
  justify-content: center; 
}

/*   mobile  responsive  */
@media screen and (max-width: 700px) { 
  .ftcontact2 .ftcontact2a {
    width: 100%;
    float: left; 
    display: flex;
  } 
} 
`;
export default { FooterAbout, FooterContactUs, FooterBottom };
