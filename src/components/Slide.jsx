import React from "react";
import './Slide.css'
import Sl from '../image-react/02 1.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Slick from '../image-react/1 otziv.png'
import Good from '../image-react/slide-18.jpg'
import Polo from '../image-react/polozhitelnie-otzivi-o-kompaniyax-y6prv8rl.jpg'

const Slide = () => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    
    return (
        <div className="Slide">
            <img src={Sl} alt="Фото" id='had'></img>
                <div className='Slider'>
                    <Slider {...settings}>
        <div>
          <img src={Slick} alt="Slide 1" id='num1' />
        </div>
        <div>
          <img src={Good} alt="Slide 2" id='num1' />
        </div>
        <div>
          <img src={Polo} alt="Slide 3" id='num1' />
        </div>
      </Slider>
                </div>
        </div>
    )
}

export default Slide;