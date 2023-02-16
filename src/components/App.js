import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import DrinksContainer from './DrinksContainer';
import LandingPage from './Home/LandingPage';
import Mainpage from './Home/Mainpage';
import OrdersContainer from './OrdersContainer';
import MenuContainer from './MenuContainer';

function App() {
  const [drinks, setDrinks] =useState([])
  const [orders, setOrders] =useState([])
  const [customers, setCustomers] =useState([])
  const [ingredients, setIngredients] =useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:9292/drinks");
        const data = await res.json();
        setDrinks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/customers")
    .then(res => res.json())
    .then((data) => 
    setCustomers(data)
    // Console.log(data)
    )
    }, [])

    useEffect(() => {
      fetch("http://localhost:9292/orders")
      .then(res => res.json())
      .then((data) => 
      setOrders(data)
      // Console.log(data)
      )
      }, [])

      useEffect(() => {
        fetch("http://localhost:9292/ingredients")
        .then(res => res.json())
        .then((data) => setIngredients(data))
      }, [])



  return (
  <Routes>
    <Route path = '/' element={<LandingPage/>}/>
    <Route path = '/mainpage' element={<Mainpage customers={customers} setCustomers={setCustomers}/>}>
      <Route path = 'menu' element={<MenuContainer drinks={drinks} setOrders={setOrders} orders={orders} customers={customers}/>}/>
      <Route path = 'drinks' element={<DrinksContainer drinks={drinks} setDrinks={setDrinks} ingredients={ingredients} setIngredients={setIngredients}/>}/>
      <Route path = 'orders' element={<OrdersContainer orders={orders} setOrders={setOrders} customers={customers} />}/>
    </Route>
  </Routes>
  );
}

export default App;
