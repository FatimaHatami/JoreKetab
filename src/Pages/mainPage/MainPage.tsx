import React from 'react';
import Header from '../../components/header/Header';
import logo from '../../assets/images/Logo.png';
import ScrollUpButtton from '../../components/buttons/ScrollUpButton';

const MainPage=()=>{
    return(
        <div className='main-page'>
            <Header Logo={logo}/>
      <ScrollUpButtton/>
        </div>
    )
}

export default MainPage;