import { Button, Modal, Form, Input,message } from 'antd';
import { useState } from 'react';

const Newcustomer = () => {
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
    <h1>Are you a new client?</h1>
    <Button shape='round' className="BtnSignUp" onClick={handleOpen}>Register Now!</Button>
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
                label="Name"
                name="name"
                rules={[{required: true, message: 'Please input your full name!'}]}
            >
                <Input name="name" onChange={handleInputChange} />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!'}]}
            >
                <Input name="email" onChange={handleInputChange} />
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

export default Newcustomer