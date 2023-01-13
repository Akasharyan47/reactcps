import React from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const Practice = () => {
    return (

        <Main>
            <h2>Practice</h2>
            <div className="container-flaid  ">
                <Slide>
                    {images.map((images) => {
                        return (
                            <div className="each-slide-effect  ">
                                <div  style={{ 'backgroundImage': `url(${images})` }}>
                                    <span>Slide 1</span>
                                </div>
                            </div> 
                        );
                    })}; 
                    {/* <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images})` }}>
                  <span>Slide 2</span>
                </div>
              </div>
              <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images})` }}>
                  <span>Slide 3</span>
                </div>
              </div> */}
                </Slide>

            </div>
        </Main>
    )
}
const Main = styled.section`
.each-slide-effect > div {
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  max-width: 100%;
  height: 250px;
}

.each-slide-effect span {
  padding: 20px;
  font-size: 20px;
  background: #efefef;
  text-align: center;
}
 `;
export default Practice;

