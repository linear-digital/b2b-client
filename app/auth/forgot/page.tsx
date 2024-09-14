'use client'
import { Button, Card, Form, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import fetcher from '@/Components/util/axios';
import toast from 'react-hot-toast';
import { errorDisplay } from '@/Components/util/readError';
import { useRouter } from 'next/navigation';
const Page = () => {
    const router = useRouter()
    const handleForgot = async (data: { email: string }) => {
        try {
            const res = await fetcher({
                url: `/users/forget/${data.email}`,
                method: 'PATCH',
            })
            toast.success(res.message)
            router.push(`/auth/forgot/${res?.token}`)
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    return (
        <div className='container mx-auto flex items-center justify-center h-screen'>
            <Card className='lg:w-[500px] w-full min-h-[400px] border-none'>
                <Image src={'/icons/forgot.png'} alt="forgot" width={50} height={50} />
                <h1 className='text-[32px] messiri mt-4'>
                    Reset your password
                </h1>
                <p className='text-[16px] text-[#898989]'>
                    Have no fear. We’ll email you instructions to reset your passwid. If you dont have access to your email we can try
                    <u className='text-black ml-2 cursor-pointer'>
                        account recovery
                    </u>
                </p>
                <Form
                    name="basic"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 24 }}
                    style={{ maxWidth: 600 }}
                    autoComplete="on"
                    layout='vertical'
                    className='mt-5'
                    onFinish={handleForgot}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input size='large' type='email'/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 24 }}>
                        <Button type="primary" htmlType="submit" className="w-full" size='large'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <Link href={'/auth/login'}
                    className='text-sm'
                >
                    <ArrowLeftOutlined className='mr-1' />  Back to login
                </Link>
            </Card>
        </div>
    );
};

export default Page;