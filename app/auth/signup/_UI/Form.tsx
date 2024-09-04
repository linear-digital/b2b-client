'use client';

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
type FieldType = {
    name: string;
    email: string;
    password: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormSignup: React.FC = () => {
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
            <div className='grid grid-cols-2 mb-8 pt-3 text-gray-500'>
                <div className="flex items-center gap-2">
                    <CheckCircleIcon fontSize='small' className={/[a-z]/.test(password) ? 'text-primary' : ''} />
                    <span>one lowercase character</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircleIcon fontSize='small' className={/[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'text-primary' : ''} />
                    <span>one special character</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircleIcon fontSize='small' className={/[A-Z]/.test(password) ? 'text-primary' : ''} />
                    <span>one uppercase character</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircleIcon fontSize='small' className={password.length >= 8 ? 'text-primary' : ''} />
                    <span>8 characters minimum</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircleIcon fontSize='small' className={/\d/.test(password) ? 'text-primary' : ''} />
                    <span>one number</span>
                </div>
            </div>
            <Form.Item wrapperCol={{ span: 20 }}>
                <Button type="primary" htmlType="submit" size='large' className='w-full'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default FormSignup;