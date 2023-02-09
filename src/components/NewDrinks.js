import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const NewDrinks = () => {
  return (
    <>
        <NavBar/>
        <div className='menu-container'>
            <h1>Drinks</h1>
            <div className='menu-cards'>
                {/* {drinksArray} */}
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default NewDrinks