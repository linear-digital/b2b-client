'use client';

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import Cookies from 'js-cookie';
import GoogleLogin from '../../signup/_UI/GoogleLogin';
import Link from 'next/link';
import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '@/Redux/user/userSlice';
type FieldType = {
    name: string;
    email: string;
    password: string;
    remember: boolean;
};


const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const LoginSignup: React.FC = () => {
    const router = useRouter();
    const dispatch = useDispatch()
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            const res = await fetcher({
                method: 'POST',
                url: '/users/login',
                body: {
                    email: values.email,
                    password: values.password
                }
            })
            Cookies.set('auth-token', res.token, { expires: 30 });
            dispatch(setCurrentUser(res.user))
            toast.success('Login successfully');
            router.push('/');
        } catch (error) {
            toast.error(errorDisplay(error));
        }
    };
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 22 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout='vertical'
            className='mt-8'
        >
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
                <Input.Password size='large' />
            </Form.Item>
            <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                wrapperCol={{ span: 22, }}
            >
                <div className="flex items-center justify-between">
                    <Checkbox>Remember me</Checkbox>
                    <Link href={"/auth/forgot"} className='font-semibold'>
                        Forgot password?
                    </Link>
                </div>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 22 }}>
                <Button type="primary" htmlType="submit" size='large' className='w-full p-2'>
                    Submit
                </Button>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 22 }}>
                <GoogleLogin />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 22 }}>
                <Link href="/auth/signup" >
                    Dont have an account? Signup
                </Link>
            </Form.Item>
        </Form>
    );
}

export default LoginSignup;