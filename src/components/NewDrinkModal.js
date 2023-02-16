import { Modal, message,} from 'antd';
import { Button,Form, } from 'semantic-ui-react'
import { useState } from 'react';


const NewDrinkModal = ({drinks, setDrinks,drinkIngredients, setdrinkIngredients,ingredients,setIngredients}) => {
    const [openSignup, setOpenSignup] = useState(false)
    // const [ingredient_id, setIngredient_id] = useState("")
    const [newDrink, setNewDrink] = useState({
      name: "",
      price: "",
      size: "small",
      image_url:"",
    })
    console.log(ingredients)

    function handleOpen() {
      setOpenSignup(true)
    }
    function handleClose() {
      setOpenSignup(false)
    }

    function handleChange1(e) {
      e.preventDefault()
      setNewDrink({
          ...newDrink, [e.target.name]:e.target.value
      })
    }
    function handleSubmit() {
      fetch("http://localhost:9292/drinks", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newDrink)
      })
      .then((r) => r.json())
      .then((data) => {
        setDrinks([...drinks, data]);
        setOpenSignup(false)
        success();
      })
    }

    const success = () => {
        message.success('New drink created!');
    };
    
  return (
    <>
    <button className='btnDrink' onClick={handleOpen}>Create a New Drink</button>
    <Modal 
        title="Create a New Drink" 
        open={openSignup}
        onCancel={handleClose}
        onOk={handleClose}
        footer={null}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Field required>
          <label>Please input the name!</label>
          <input name="name" onChange={handleChange1}  />
        </Form.Field>
        <Form.Field required>
          <label>Please input the price!</label>
          <input name="price" onChange={handleChange1}  />
        </Form.Field>
        <Form.Field required>
          <label>Please input the image url!</label>
          <input name="image_url" onChange={handleChange1}  />
        </Form.Field>
        <Button primary>Create</Button>
      </Form>
    </Modal>
    </>
  )
}

export default NewDrinkModal