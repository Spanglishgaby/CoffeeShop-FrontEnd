import { Modal,Radio,Descriptions} from 'antd';
import { Button, Icon,Form, } from 'semantic-ui-react'
import { useState,useEffect } from 'react';
import moment from 'moment';

const formattedDate = moment().format('YYYY-MM-DD HH:mm');

const Shop = ({orders,setOrders, customers, drinks}) => {
    const [openSignup, setOpenSignup] = useState(false)
    const [total, setTotal] = useState("")
    const [customer_id, setCustomer_id] = useState("")
    const [drink_id, setDrink_id] = useState("")
    const [selectedDrinkPrice, setSelectedDrinkPrice] = useState(2.5)

    const newOrder ={
    order_time: formattedDate,
    total: total,
    customer_id: customer_id,
    drink_id:drink_id,
    }
    console.log(newOrder)
    function handleOpen() {
      setOpenSignup(true)
    }
    function handleClose() {
      setOpenSignup(false)
    }
    useEffect(() => {
      const selectedDrink = drinks.find(drink => drink.id === drink_id)
      console.log(selectedDrink)
      if (selectedDrink) {
        setSelectedDrinkPrice(selectedDrink.price)
      }
    }, [drink_id, drinks])

    function handleSubmit() {
      fetch("http://localhost:9292/orders", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newOrder)
      })
      .then((r) => r.json())
      .then((data) => {
          setOrders([...orders, data]);
          setOpenSignup(false)
      })
    }
    return (
    <>
    <Button animated='vertical' onClick={handleOpen}>
        <Button.Content hidden>Order</Button.Content>
        <Button.Content visible>
            <Icon name='shop' />
        </Button.Content>
    </Button>
    <Modal 
      title="Order Form" 
      open={openSignup}
      onCancel={handleClose}
      onOk={handleClose}
      footer={null}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Field required>
            <select onChange={(e) => setCustomer_id(e.target.value)}>
              <option>Select your name</option>
              {customers.map((customer) => ( 
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>))}
            </select>
        </Form.Field>
        <Form.Field required>
            <select  onChange={(e) => setDrink_id(e.target.value)}>
              <option>Select a Drink</option>
              {drinks.map((drink) => ( 
              <option key={drink.id} value={drink.id}>
                {drink.name}
              </option>))}
            </select>
        </Form.Field>
        <Form.Field required>
        <Radio.Group onChange={(e) => setTotal(e.target.value)} >
            <Radio value={selectedDrinkPrice}>Small</Radio>
            <Radio value={selectedDrinkPrice + 1}>Medium</Radio>
            <Radio value={selectedDrinkPrice + 2}>Large</Radio>
          </Radio.Group>
        </Form.Field>

      <Form.Field required>
      <Descriptions size='default'>
            <Descriptions.Item label="Total">${total}</Descriptions.Item>
        </Descriptions>
      </Form.Field>
    <Button>Order</Button>
  </Form>
    </Modal>
    </>
    )
}

export default Shop