
import React, { useEffect, useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useRouter, useSearchParams } from 'next/navigation';

import { decodeToken, isExpired } from 'react-jwt';
import fetcher from '@/Components/util/axios';
import toast from 'react-hot-toast';
import { errorDisplay } from '@/Components/util/readError';

type FieldType = {
    rewirte: string;
    password: string;
};


const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const ChangePassword: React.FC = () => {
    const [password, setPassword] = React.useState('');
    const search = useSearchParams()
    const token = search.get('token') as string
    const decode: any = decodeToken(token)
    const router = useRouter()
    const [isValid, setIsValid] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        (
            async () => {
                try {
                    if (decode.email) {
                        const res = await fetcher({
                            url: `/users/verify-token`,
                            method: 'POST',
                            body: {
                                email: decode.email,
                                token
                            }
                        })
                    }
                    setIsValid(true)
                } catch (error) {
                    setIsValid(false)
                }
            }
        )()
    }, [token, decode.email])


    const [message, setMessage] = useState('')
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(values.password)) {
            return setMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character')
        }
        const email = decode.email
        if (values.password !== values.rewirte) {
            return toast.error('Password does not match')
        }
        try {
            setIsLoading(true)
            const res = await fetcher({
                url: `/users/update-password`,
                method: 'PATCH',
                body: {
                    email,
                    password
                }
            })
            toast.success(res?.message)
            setMessage('')
            router.push('/auth/login')
        } catch (error) {
            toast.error(errorDisplay(error))
            setIsLoading(false)
        }
    };
    if (!isValid) {
        return <h1 className='text-center text-red-500'>Invalid Token</h1>
    }
    if (isExpired(token)) {
        return <h1>Token Expired</h1>
    }
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
            <div className='grid grid-cols-2 mb-5   text-gray-500 gap-2'>
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
                <div className="flex items-center gap-2 ">
                    <CheckCircleIcon fontSize='small' className={/\d/.test(password) ? 'text-primary' : ''} />
                    <span>one number</span>
                </div>
            </div>
            <Form.Item>
                <p className='text-red-500'>{message}</p>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
                <Button type='primary' className='w-full' htmlType='submit' loading={isLoading} size='large'>
                    Reset Password
                </Button>
            </Form.Item>

        </Form>
    );
}

export default ChangePassword;