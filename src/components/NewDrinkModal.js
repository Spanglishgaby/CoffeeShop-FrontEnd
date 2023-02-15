import { Modal, Form, Input,message,Button} from 'antd';
import { useState } from 'react';


const NewDrinkModal = ({drinks, setDrinks,drinkIngredients, setdrinkIngredients}) => {
    const [openSignup, setOpenSignup] = useState(false)
    const [newDrink, setNewDrink] = useState({
      name: "",
      price: "",
      size: "small",
      image_url:"",
    })

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
    <Button className='btnDrink' onClick={handleOpen}>Create a New Drink</Button>
    <Modal 
        title="Create a New Drink" 
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
              <Input name="name" onChange={handleChange1}  />
          </Form.Item>
          <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: 'Please input the price!'}]}
          >
              <Input name="price" onChange={handleChange1}  />
          </Form.Item>
          <Form.Item
              label="Image"
              name="image_url"
              rules={[{ required: true,message: 'Please input the image url!'}]}
          >
              <Input name="image_url" onChange={handleChange1}  />
          </Form.Item>
          <Form.Item wrapperCol={{offset: 5}}>
            <Button type="primary" htmlType="submit" >Create</Button>
          </Form.Item>
      </Form>
    </Modal>
    </>
  )
}

export default NewDrinkModal