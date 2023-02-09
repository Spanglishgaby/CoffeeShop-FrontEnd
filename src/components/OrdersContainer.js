import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const OrdersContainer = () => {
  return (
    <>
        <NavBar/>
        <div className='menu-container'>
            <h1>Orders</h1>
            <div className='menu-cards'>
                {/* {drinksArray} */}
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default OrdersContainer