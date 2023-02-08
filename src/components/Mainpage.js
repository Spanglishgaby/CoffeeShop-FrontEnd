import React from 'react'
import videoBg from './coffeelogo.png'
import { DrinkMenu } from './DrinkMenu'
import Footer from './Footer'
import Header from './Header'
const Mainpage = () => {
return (
    <div>
        <div  id="address"> 776 3rd Ave, New York, NY 10017</div>
        <div className='nav-container'>
            <div className='logo'>
                <img src={videoBg} alt="logo"></img>
            </div>
            <nav id='menu'>
                <ul>
                <li><a href='http://'>Home</a></li>
                <li><a href='http://'>Menu</a></li>
                <li><a href='http://'>Orders</a></li>
                </ul>
            </nav>
        </div>
        <Header/>
        <DrinkMenu/>
        <Footer/>
</div>
)
}

export default Mainpage