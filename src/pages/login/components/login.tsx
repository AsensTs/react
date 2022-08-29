import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from 'react';

const Login: React.FC = () => {
    const leftCol = 6;
    const rightCol = 18;

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    return (
        <div className="login">
            <div className="login-content">
                <Form
                    name="basic"
                    labelCol={{ span: leftCol }}
                    wrapperCol={{ span: rightCol }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                
                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: leftCol, span: rightCol }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                
                    <Form.Item wrapperCol={{ offset: leftCol, span: rightCol }}>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
      );
}

export default Login;