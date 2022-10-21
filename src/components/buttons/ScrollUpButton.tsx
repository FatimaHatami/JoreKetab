import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
import './ScrollUpButton.scss';
const ScrollUpButtton=()=>{
    const [showScrollBtn,setShowScrollBtn]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>200)
            setShowScrollBtn(true);
            else
            setShowScrollBtn(false);
        });
    },[]);
    const scrollTopBtnHandler=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return(
        <div className='scroll-up-button'>
            {
                showScrollBtn && (<button onClick={scrollTopBtnHandler}> <AiOutlineArrowUp/> </button>  )
            }
        </div>
    )
}
export default ScrollUpButtton;