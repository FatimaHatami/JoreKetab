import React from 'react';
import CategoriesData from '../../Datas';
import Category from './Category/Category';

import './Categories.scss';

const Categories=()=>{
    console.log(CategoriesData);
    return(
        <div className="categories">
            <h3 className='section-heading'>دسته بندی ها</h3>
           <div className="categories__container">
           {CategoriesData.map(category=>(
            <Category
            name={category.categoryName}
            icon={category.categoryIcon}
            bgColor={category.categoryBackgroundColor}
            />
           ))}
           </div>
        </div>
    )
}

export default Categories;