import React from "react";
import './Header.scss';
import Navbar from "./navbar/Navbar";
import QuickAction from "./quick-action/QuickAction";
const Header =(props:any)=>{
    
    return(
        <div className="header">
            <div className="header__logo">
                        <img src={props.Logo} alt="joreketab"></img>
            </div>
            <div className="header__navbar ">
                <Navbar/>
            </div>
            <div className="header__quick-action ">
                <QuickAction/>
            </div>
        </div>
    )
}
export default Header;