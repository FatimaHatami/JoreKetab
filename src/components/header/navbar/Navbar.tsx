import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <div className="navbar">
            <Link className='navbar-item' to="/">صفحه اصلی</Link>
            <Link className='navbar-item' to="/PublicBooks">کتاب عمومی</Link>
            <Link className='navbar-item' to="/SchoolBooks">کمک درسی </Link>
            <Link className='navbar-item' to="/ForeignBooks">زبان خارجی </Link>
            <Link className='navbar-item' to="/ChildrenBooks"> کودک و نوجوان</Link>
        </div>
    )
}

export default Navbar;