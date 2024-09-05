'use client';

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Link from 'next/link';
type FieldType = {
    rewirte: string;
    password: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const ChangePassword: React.FC = () => {
    const [password, setPassword] = React.useState('');
    return (
        <Form
            name="basic"
            labelCol={{ span: 14 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}

            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
            className='mt-5'
        >

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size='large' onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <Form.Item<FieldType>
                label="Rewrite Password"
                name="rewirte"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password size='large' onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>
            <div className='grid grid-cols-2 mb-5  text-gray-500'>
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

            <Form.Item wrapperCol={{ span: 24 }}>
                <button className='w-full  bg-primary py-3 rounded-xl text-white' type='submit'>
                    Reset Password
                </button>
            </Form.Item>

        </Form>
    );
}

export default ChangePassword;