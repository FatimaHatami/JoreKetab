import React from 'react';

import './Category.scss';

const Category=(props:any)=>{
    const color=props.bgColor;
    return(
        <div className="category" style={{backgroundColor:color}}>
            <div className="category__container">
                <div className="category__icon">
                    <img src={props.icon} alt="category icon"/>
                </div>
                <div className="category__name">{props.name}</div>
                <div className="category__cta">
                    <a href="/">برو به دسته بندی</a>
                </div>
            </div>
        </div>
    )
}

export default Category;