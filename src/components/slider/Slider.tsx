import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import './Slider.scss';


import Datas from '../../Datas';
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container=styled.div<{bgColor:any}>`
background-color:#${(props:any)=>props.bgColor};
display:flex;
border-radius:8px;
color:#fff;
`;
const Description=styled.div`
flex:2;
margin-left:20px;
height:300px
`;
const Gist=styled.div`
overflow:hidden;
text-overflow:ellipsis;
display:-webkit-box;
line-height:16px;
max-height:100px;
-webkit-line-clamp:4;
-webkit-box-orient:vertical
`;
const ImageWrapper=styled.div`

flex:1;
posititon:relative;
`;
const Image=styled.img`
width:150px;
height:300px;
object-fit:contain;
position:absolute;
bottom:-27%;
left:10px;
`;

const Slider=()=>{
    return(
        <Swiper
        className="slider"
        spaceBetween={20}
        slidesPerView={2}
        onSlideChange={()=> console.log('slide changed')}
        onSwiper={(swiper)=>console.log(swiper)}>
            {
                Datas.map((book,index)=>(
                    <SwiperSlide key={index}> 
                        <Container bgColor={book.bgColor}>
                            <Description>
                                <h4>{book.name}</h4>
                                <h5>{book.author}</h5>
                                <Gist>{book.gist}</Gist>
                                <span>{book.price} تومان</span>
                                <Link to="#">ادامه...</Link>
                            </Description>
                        <ImageWrapper className="slide-image">
                            <Image src={book.imgSrc} alt="Midnight library" />
                        </ImageWrapper>
                    </Container>
                    </SwiperSlide>)
                )
                    
            }
        </Swiper>
    )
}


export default Slider;