import { Button, Checkbox, Form, Input, message } from "antd";
// import React, { useState } from 'react';
import { store } from '@/store'
import { setUsername } from "@/store/features/userSlice"
import Cookie from "@/common/utils/cookie"

const cookie = new Cookie();

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
  };

const Login: React.FC = () => {
    // 规则验证通过
    const onFinish = (values: any) => {
        console.log('Success:', values);
        handleLogin(values.username, values.password)
    };

    // 规则验证失败
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleLogin = (username:String, password:String) => {
        if (username === "asens" && password === "123456") {
            console.log("登录成功");
            message.success("登录成功");
            cookie.add("username", username, 3);
            store.dispatch(setUsername(username));
            window.location.href = "http://localhost:3000/index.html"
        } else {
            message.warning("登录失败！用户名或密码不正确！");
        }
    };

    return (
        <div className="login">
            <div className="login-content">
                <Form
                    name="basic"
                    {...layout}
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
                
                    <Form.Item name="remember" valuePropName="checked" {...tailLayout}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">登录</Button>
                        <Button htmlType="button" ghost style={{marginLeft: "20px"}}>Reset</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
      );
}

export default Login;