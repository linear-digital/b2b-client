'use client';

import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, message } from 'antd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GoogleLogin from './GoogleLogin';
import Link from 'next/link';
import fetcher from '@/Components/util/axios';
import toast from 'react-hot-toast';
import { errorDisplay } from '@/Components/util/readError';
import { useRouter } from 'next/navigation';
type FieldType = {
    name: string;
    email: string;
    password: string;
};


const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const FormSignup: React.FC = () => {
    const [password, setPassword] = React.useState('');

    const [messageText, setMessage] = React.useState('');
   
    const router = useRouter();
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
                return setMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character')
            }
            else {
                setMessage('')
            }
            const res = await fetcher({
                method: 'POST',
                url: '/users',
                body: {
                    name: values.name,
                    email: values.email,
                    password: values.password
                }
            })
            toast.success('Account created successfully');
            router.push('/auth/login');
        } catch (error: any) {
            setMessage(errorDisplay(error));
            toast.error(errorDisplay(error));
        }
    };
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

            <p className='text-red-500 mb-2 max-w-[500px] text-xs'>{messageText}</p>
            <Form.Item wrapperCol={{ span: 20 }}>
                <Button type="primary" htmlType="submit" size='large' className='w-full'>
                    Submit
                </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 20 }}>
                <GoogleLogin />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 20 }}>
                <Link href="/auth/login" >
                    Already have an account? Login
                </Link>
            </Form.Item>

        </Form>
    );
}

export default FormSignup;