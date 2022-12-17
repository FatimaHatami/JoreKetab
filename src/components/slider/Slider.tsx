import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import './Slider.scss';
// slider images 
import Img1 from '../../assets/images/slider/117.jpg';
import Img2 from '../../assets/images/slider/149.jpg';
import Img3 from '../../assets/images/slider/288.jpg';
import Img4 from '../../assets/images/slider/289.jpg';


import Datas from '../../Datas';
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components

const Slider=()=>{
    return(
        <Swiper
        className="slider"
        spaceBetween={30}
        slidesPerView={1}
        >
                {/* Slide1 */}
                 <SwiperSlide className="slider__slide">
                    <div className="slider__image-container">
                        <img src={Img4} alt="slider 1" />
                    </div>
                </SwiperSlide>
                {/* Slide2 */}
                <SwiperSlide className="slider__slide">
                    <div className="slider__image-container">
                        <img src={Img2} alt="slider 3" />
                    </div>
                </SwiperSlide>
                {/* Slide3 */}
                 <SwiperSlide className="slider__slide">
                    <div className="slider__image-container">
                        <img src={Img3} alt="slider 4" />
                    </div>
                </SwiperSlide>  
        </Swiper>
    )
}


export default Slider;