import React from 'react';
import Header from '../../components/header/Header';
import logo from '../../assets/images/Logo.png';
import ScrollUpButtton from '../../components/buttons/ScrollUpButton';
import Slider from '../../components/slider/Slider';
import Categories from '../../components/categories/Categories';

import './Home.scss';


const MainPage=()=>{
    return(
        <div className='main-page'>
            <Header Logo={logo}/>
            <Slider/>
            <Categories/>
            <ScrollUpButtton/>
        </div>
    )
}

export default MainPage;