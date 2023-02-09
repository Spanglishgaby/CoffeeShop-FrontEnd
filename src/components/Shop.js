import { Modal, Form, Input,message, Select,Radio } from 'antd';
import { Button, Icon } from 'semantic-ui-react'
import { useState } from 'react';
const { Option } = Select;

const Shop = () => {
    const [openSignup, setOpenSignup] = useState(false)
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        phone: "",
        address:"",
    })

    function handleOpen() {
        setOpenSignup(true)
    }
    function handleClose() {
        setOpenSignup(false)
    }

    function handleSubmit() {
        console.log("successfully")
        success()
    }

    const success = () => {
        message.success('Welcome to the coffee shop!');
    };
    function handleInputChange(e) {
        setNewUser({
            ...newUser, [e.target.name]:e.target.value
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
        title="Customer Registration" 
        open={openSignup}
        onCancel={handleClose}
        onOk={handleClose}
        footer={null}
    >
        <Form
            name="registration"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            style={{maxWidth: 600}}
            autoComplete="off"
            onFinish={handleSubmit}
        >
            <Form.Item
                label="Drink Name"
                name="name"
                rules={[{required: true, message: 'Please select your drink!'}]}
            >
                <Input.Group compact onChange={handleInputChange}>
                    <Select
                        style={{
                        width: '90%',
                        }}
                        defaultValue="Americano"
                    >
                        <Option value="Americano">Americano</Option>
                        <Option value="Latte">Latte</Option>
                        <Option value="Cappuccino">Cappuccino</Option>
                        <Option value="Expresso">Expresso</Option>
                        <Option value="Chai Tea">Chai Tea</Option>
                        <Option value="Frutal Tea">Frutal Tea</Option>
                        <Option value="Hot Chocolate">Hot Chocolate</Option>
                        <Option value="Peppermint Hot Chocolate">Peppermint Hot Chocolate</Option>
                        <Option value="Iced Sweet Tea">PIced Sweet Tea</Option>
                        <Option value="Mango Iced Tea">Mango Iced Tea</Option>
                        <Option value="Passion Fruit Beverage">Passion Fruit Beverage</Option>
                        <Option value="Dragon Fruit Beverage">Dragon Fruit Beverage</Option>
                    </Select>
                    </Input.Group>
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!'}]}
            >
                <Radio.Group onChange={handleInputChange} >
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true,message: 'Please confirm your phone!'}]}
            >
                <Input name="phone" onChange={handleInputChange}  />
            </Form.Item>
            <Form.Item
                label="Address"
                name="address"
                rules={[{required: true,message: 'Please input your address!'}]}
            >
                <Input name="address" onChange={handleInputChange} />
            </Form.Item>
            <Form.Item
                wrapperCol={{offset: 5}}
            >
                <Button type="primary" htmlType="submit" className="login-form-button">
                Register
                </Button>
            </Form.Item>
        </Form>
    </Modal>
    </>
    )
}

export default Shop