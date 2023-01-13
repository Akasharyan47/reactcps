import "bootstrap/dist/css/bootstrap.min.css";
import { Main } from "./styles/MainStyle";
import { useGlobalContext } from "./context.js";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterAbout, FooterContactUs, FooterBottom } from "./components/Footer.js";
import { faBasketball, faPersonChalkboard, faSchool, faLightbulb, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
library.add(faBasketball, faPersonChalkboard, faSchool, faLightbulb, faCaretUp, faCaretDown);
 
  
const Home = () => {

  const { notificationDetail, isloading, bannerImages } = useGlobalContext();

  console.log(bannerImages); 
  return (
    <>
      <Main>
        <section>
          <div className=" d-block  border border-3  border-secondary">
            <Slide>
              {bannerImages.map((bannerImages) => {
                return (
                  <div className="each-slide-effect   ">
                    <div className='col-12' style={{ 'backgroundImage': `url(${bannerImages})` }}>
                      
                    </div>
                  </div>
                );
              })};
            </Slide> 
          </div> 
        </section>

        <section>
          <div className="main2">
            <div className="wlcm1">
              <a> Welcome to </a>
            </div>
            <div className="wlcm2">
              <a> CENTRAL PUBLIC SCHOOL </a>
              <p> ( Ghusia kalan )</p>

            </div>
            <div className="wlcm4">
              <a></a>
            </div>
            <div className="wlcm3">
              <a> The purpose of education is to make good human beings with skill and expertise…Enlightened
                human beings can be created by teachers. <span
                  style={{ fontWeight: "400", color: "#005F8E", fontStyle: "italic", fontSize: "12px" }}>
                  ‘ Dr.A.P.J.Abdul Kalam ’</span>
              </a>
            </div>
          </div>
        </section>


        <section>
          <div className="jsx-1636258543 padding60 bg-lightwhite">
            <div className="container-fluid">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="jsx-1636258543 heading">Application Process</h2>
                    <ul className="jsx-1636258543 appstep">

                      <li className="jsx-1636258543">
                        <div className="jsx-1636258543 mainWrapper">
                          <div className="jsx-1636258543 datasection">
                            <div className="jsx-1636258543 centerdata">
                              <FontAwesomeIcon icon="fa-solid fa-school" style={{ fontSize: "4rem", color: "white" }} />
                              <span className="jsx-1636258543">ENROLL</span>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="jsx-1636258543">
                        <div className="jsx-1636258543 mainWrapper" style={{ border: "3px solid #FF9933" }}>
                          <div className="jsx-1636258543 datasection" style={{ backgroundColor: "#FF9933" }}>
                            <div className="jsx-1636258543 centerdata">
                              <FontAwesomeIcon icon="fa-solid fa-person-chalkboard" style={{ fontSize: "4rem", color: "white" }} />
                              <span className="jsx-1636258543">LEARN</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="jsx-1636258543">
                        <div className="jsx-1636258543 mainWrapper">
                          <div className="jsx-1636258543 datasection">
                            <div className="jsx-1636258543 centerdata">
                              <FontAwesomeIcon icon="fa-solid fa-basketball" style={{ fontSize: "4rem", color: "white" }} />
                              <span className="jsx-1636258543">PLAY</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="jsx-1636258543">
                        <div className="jsx-1636258543 mainWrapper" style={{ border: "3px solid #FF9933" }}>
                          <div className="jsx-1636258543 datasection" style={{ backgroundColor: "#FF9933" }}>
                            <div className="jsx-1636258543 centerdata">
                              <FontAwesomeIcon icon="fa-solid fa-lightbulb" style={{ fontSize: "4rem", color: "white" }} />
                              <span className="jsx-1636258543">GROW</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="main3 ">
            <div class="announcements ">
              <div class="announcement11">
                <div class="announcements1" style={{ justifyContent: "left" }}>
                  <h4 class="ansment1">Announcements</h4>
                </div>
                <div class="announcements2 ">
                  <FontAwesomeIcon className='pt-2 pb-0 bg-pink' icon="fa-solid fa-caret-up " style={{ fontSize: "3rem", color: "white" }} />
                  <ul id="announcementlist " className='m-0 '>
                    {notificationDetail.map((cremt) => {
                      const { notification, link } = cremt;
                      return ( 
                          <li> {notification} ,{link}</li> 
                      )
                    })};
                  </ul>
                  <FontAwesomeIcon icon="fa-solid fa-caret-down " style={{ fontSize: "3rem", color: "white" }} />
                </div>
              </div>
            </div>
            {/* <table class="table table-bordered">
              <tbody>
              </tbody>
            </table> */}
          </div>
        </section>

      </Main>
      <FooterAbout />
      <FooterContactUs />
      <FooterBottom />
    </>

  );
};
export default Home;