import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../App.css';

export default function Login() {

    const onFinish = (values) => {
        console.log(values);
    }

    return (
<div>
        <Form onFinish={onFinish} className="login-form">
            <Form.Item  name="username" label="Username">
                <Input placeholder="Username" required />
            </Form.Item>
            <Form.Item  name="password" label="password">
                <Input type="password" placeholder="Password" required/>
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
</div>
    );

}