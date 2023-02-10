import React from 'react'
import { Button,Card} from 'semantic-ui-react'

const OrdersContainer = ({orders,setOrders,customers}) => {

  const handleDelete = (id) =>
    setOrders((current) => current.filter((p) => p.id !== id));

  function handleClickDelete(e){
      e.preventDefault()
      let id = parseInt(e.target.value)
      fetch(`http://localhost:9292/orders/${id}`, {
      method: "DELETE",
      })
      .then(() => {
        handleDelete(id)
      })
  }
  let orderArray = orders && orders.map((order) => {
    let customer = customers.find(customer => customer.id === order.customer_id)
    
    return (
      <>
      <Card key={order.id}>
        <Card.Content>
          Order #:{order.id}
          <Card.Header> {customer.name}</Card.Header>
          <Card.Description>
          <strong>Ingredients:</strong>Steve wants to add you to the group 
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='red' value={order.id} onClick={handleClickDelete}>Delete</Button>
          </div>
        </Card.Content>
      </Card>
      </>
    )
  });
  return (
    <>
      <div className='menu-container'>
      <h1>Order's List</h1>
      <div className='menu-cards'>
        {orderArray}
      </div>
    </div> 
    <br/><br/>
    </>
  )
}

export default OrdersContainer