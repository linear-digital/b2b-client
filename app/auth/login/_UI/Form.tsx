'use client';

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GoogleLogin from '../../signup/_UI/GoogleLogin';
import Link from 'next/link';
type FieldType = {
    name: string;
    email: string;
    password: string;
    remember: boolean;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LoginSignup: React.FC = () => {
    const [password, setPassword] = React.useState('');
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}

            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
            className='mt-8'
        >
            <Form.Item<FieldType>
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input size='large' />
            </Form.Item>
            <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input size='large' />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size='large' onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ span: 20, }}
            >
               <div className="flex items-center justify-between">
               <Checkbox>Remember me</Checkbox>
                <Link href={"/auth/forgot"} className='font-semibold'>
                    Forgot password?
                </Link>
               </div>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 20 }}>
                <Button type="primary" htmlType="submit" size='large' className='w-full p-2'>
                    Submit
                </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 20 }}>
                <GoogleLogin />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 20 }}>
                <Link href="/auth/signup" >
                    Don't have an account? Signup
                </Link>
            </Form.Item>
        </Form>
    );
}

export default LoginSignup;