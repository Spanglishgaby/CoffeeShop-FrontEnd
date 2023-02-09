import React from 'react'

import { DrinkMenu } from './DrinkMenu'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'
const Mainpage = ({drinks, setDrinks}) => {
return (
    <div>
        <NavBar/>
        <Header/>
        <DrinkMenu drinks={drinks} setDrinks={setDrinks}/>
        <br/><br/><br/><br/>
        <Footer/>
    </div>
)
}

export default Mainpage