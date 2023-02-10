import {useEffect} from "react";
import { Card, Image } from 'semantic-ui-react'
import Shop from './Shop'

const MenuContainer = ({drinks, orders,setOrders, customers}) => {

    console.log(customers)
  let drinksArray = drinks && drinks.map((drink) => {
    return (
      <Card key={drink.id}>
      <Image src={drink.image_url} style={{ height: '400px' }} />
      <Card.Content>
      <Card.Header>{drink.name}</Card.Header>
      </Card.Content>
      <Card.Content extra textAlign='center'>
      <Shop setOrders={setOrders} orders={orders} customers={customers} drinks={drinks}/> Add to Order
      </Card.Content>
      </Card>
    )
  });
  
  return (
    <div className='menu-container'>
      <h1>Menu</h1>
      <div className='menu-cards'>
      {drinksArray}
      </div>
    </div>
  )
}
export default MenuContainer;