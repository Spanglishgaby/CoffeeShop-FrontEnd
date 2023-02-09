import { useState } from 'react';
import {Switch, Route} from 'react-router-dom'
import LandingPage from './LandingPage';
import Mainpage from './Mainpage';
import NewDrinks from './NewDrinks';
import OrdersContainer from './OrdersContainer';
function App() {
  const [drinks, setDrinks] =useState([])
  const [orders, setOrders] =useState([])
  // const [users, setusers] =useState([])
  // fetch("http://localhost:9292/drinks")
  // .then(r => r.json())
  // .then(bubbleTeas => {
  // console.log(bubbleTeas)
  // })


  return (
  <Switch>
    <Route exact path = '/'>
    <LandingPage/>
    </Route>
    <Route exact path = '/mainpage'>
    <Mainpage drinks={drinks} setDrinks={setDrinks}/>
    </Route>
    <Route exact path = '/drinks'>
    <NewDrinks drinks={drinks} setDrinks={setDrinks}/>
    </Route>
    <Route exact path = '/orders'>
    <OrdersContainer orders={orders} setOrders={setOrders}/>
    </Route>
  </Switch>
  );
}

export default App;
