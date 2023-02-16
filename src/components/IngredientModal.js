import { useState } from 'react';
import { Modal, Form, Input,message,Button} from 'antd';


const IngredientModal = ({ingredients,setIngredients}) => {

  const [openSignup, setOpenSignup] = useState(false)
  const [newIngredient, setNewIngredient] = useState({
      name: "",
  })
  function handleOpen() {
      setOpenSignup(true)
  }
  function handleClose() {
      setOpenSignup(false)
  }

  function handleChange(e) {
    e.preventDefault()
    setNewIngredient({
        ...newIngredient, [e.target.name]:e.target.value
        })
  }

  function handleSubmit() {
  fetch("http://localhost:9292/ingredients", {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(newIngredient)
  })
  .then((r) => r.json())
  .then((data) => {
    setIngredients([...ingredients, data]);
    setOpenSignup(false)
    success();
  })
  }
  const success = () => {
        message.success('New ingredient created!');
  };
  return (
    <>
    <button className='btnDrink' onClick={handleOpen}>Create a New Ingredient</button>
    <Modal 
        title="Create a New Ingredients" 
        open={openSignup}
        onCancel={handleClose}
        onOk={handleClose}
        footer={null}
    >
      <Form
          name="newDrink"
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          style={{maxWidth: 600}}
          autoComplete="off"
          onFinish={handleSubmit}
      >
          <Form.Item
              label="Name"
              name="name"
              rules={[{required: true, message: 'Please input your drink!'}]}
          >
              <Input name="name" onChange={handleChange}  />
          </Form.Item>
          <Form.Item wrapperCol={{offset: 5}}>
            <Button type="primary" htmlType="submit" >Create</Button>
          </Form.Item>
      </Form>
    </Modal>
    </>
  )
}

export default IngredientModal