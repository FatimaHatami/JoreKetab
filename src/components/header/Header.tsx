import React from "react";
import './Header.scss';
const Header =(props:any)=>{
    
    return(
        <div className="header">
            <div className="header__logo">
                        <img src={props.Logo} alt="joreketab"></img>
            </div>
        </div>
    )
}
export default Header;