import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Newcustomer from './Newcustomer'
import videoBg from './coffeelogo.png'
import Footer from './Footer'


const Mainpage = () => {
  return (
    <div>
      <div id="address"> 776 3rd Ave, New York, NY 10017</div>
        <div className='nav-container'>
          <div className='logo'>
              <img src={videoBg} alt="logo"></img>
          </div>
          <nav id='menu'>
              <ul>
              <li><Link to="/mainpage/menu">Menu</Link></li>
              <li><Link to="/mainpage/drinks">Create a Drink</Link></li>
              <li><Link to="/mainpage/orders">Orders</Link></li>
              </ul>
          </nav>
        </div>
      <section className="align-items-center bg-img-fixed header2">
        <div className="container">
          <div className="slogan2">
            <Newcustomer/>
          </div>
        </div>
      </section>
      <Outlet/>
      <br/><br/>
      <Footer/>
    </div>
  )
}

export default Mainpage