import React from 'react'
import videoBg from './coffeelogo.png'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <div  id="address"> 776 3rd Ave, New York, NY 10017</div>
        <div className='nav-container'>
            <div className='logo'>
                <img src={videoBg} alt="logo"></img>
            </div>
            <nav id='menu'>
                <ul>
                <li><Link to="/mainpage">Home</Link></li>
                <li><Link to="/drinks">Menu</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default NavBar