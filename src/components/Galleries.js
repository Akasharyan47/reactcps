import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
 
const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];
  
const AcademicCard = () => {

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  return (
    <>
      <Main>
        <div className="Main-GAlleries"> 
          <div id="main-slider-container">
            <MdChevronLeft size={50} className="slider-icon left" onClick={slideLeft} />
            <div id="slider"> 
               { images.map((slide,index) => {
                  return (
                    <div className="slider-card " onClick={() => slide.clickEvent()}>
                      <div className="slider-card-image" style={{'backgroundImage': `url(${images})`, backgroundSize: 'cover' }} > 
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <MdChevronRight size={50} className="slider-icon right" onClick={slideRight} />
          </div>
        </div>
      </Main>
    </>
  )
}
 
const Main = styled.section`
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    .Main-GAlleries{
      width: 100%;  
    justify-content:center;
    align-items:center;
    display:flex; 
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;  
    } 
#main-slider-container{
    width: 94%;  
    justify-content:center;
    align-items:center;
    display:flex; 
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
} 
#slider{
    width: 90%;
    height:auto;   
    white-space: nowrap;
    overflow-x: scroll;
    scrollbar-width: none;
    scroll-behavior: smooth; 
} 
#slider::-webkit-scrollbar{
    display: none;
}

#main-slider-container {
    position: relative;
    display: flex;
    align-items: center;
}  
.slider-card-image{
    width: 100%;
    height:100%; 
    display:flex;
    
    img{
      background-size:cover; 
      width:100%;
      height:100%;
      display:flex;
    }
}

.slider-icon.left, .slider-icon.right { 
    position: absolute; 
    background:none;
    border-radius: 0px;
    opacity: 0.5;   
    cursor: pointer;
    box-shadow:0px   #000;
  -webkit-box-shadow:0px #000;
  -moz-box-shadow:  0px  #000;
}

.slider-icon.left{
    left: 0; 
}

.slider-icon.right{
    right: 0;
}

 .slider-icon.left:hover, .slider-icon.right:hover{
    opacity: 1;
} 

.slider-card{
    width: 240px;
    height: 160px;
    background: white;
    border-radius: 0px;
    border: 1px solid rgb(206, 206, 206)  ;
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
    ${'' /* box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 12%); */}
    cursor: pointer;
} 
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .slider-card{
    width: 150px;
    height: 100px;
  }
} 
 `;
export default AcademicCard;