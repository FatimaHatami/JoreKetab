import React from 'react';
import './QuickAction.scss';
import {CiShoppingCart,CiUser,CiSearch} from 'react-icons/ci'

const QuickAction=()=>{
    return(
        <div className='quick-action'>
            <button> <CiShoppingCart/> </button> 
            <button> <CiUser/> </button> 
            <button> <CiSearch/> </button> 
        </div>
    )
}

export default QuickAction;