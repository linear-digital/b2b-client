'use client'
import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { RootState } from '@/Redux/store';
import { Avatar, Button, Form, Input, Select } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
type FieldType = {
    name: string;
    email: string;
    phone: string
    gender: string
    address: string
};
const Settings = () => {
    const { currentUser } = useSelector((state: RootState) => state.user)
    const onSubmit = async (data: FieldType) => {
        try {
            const res = await fetcher({
                method: 'PUT',
                url: `/users/${currentUser?._id}`,
                body: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    address: data.address,
                    gender: data.gender
                }
            })
            toast.success("Profile updated successfully")
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    if (!currentUser) {
        return
    }
    return (
        <div className='w-full lg:p-0 p-4'>
            <div className="flex items-center gap-10">
                <Avatar size={150} src={currentUser?.profile} />
                <button className='btn-primary'>
                    Change
                </button>
            </div>
            <Form className='grid lg:grid-cols-2 gap-x-5 mt-10'
                layout='vertical'
                name="basic"
                onFinish={onSubmit}
                initialValues={{ name: currentUser?.name, email: currentUser?.email, phone: currentUser?.phone, gender: currentUser?.gender, address: currentUser?.address }}
            >

                <Form.Item<FieldType>
                    label="Name" name={'name'}
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input size='large' />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Email"
                    name={'email'}
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input size='large' />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Phone"
                    name={'phone'}
                    rules={[{ required: true, message: 'Please input your phone!' }]}
                >
                    <Input size='large' />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Gender"
                    name={'gender'}
                >
                    <Select
                        size='large'
                        options={[
                            { value: '', label: 'Select Gender' },
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Other' },
                        ]}
                    />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Address"
                    name={'address'}
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                    <Input size='large' />
                </Form.Item>
                <Form.Item className='lg:block hidden'></Form.Item>
                <Form.Item<FieldType>
                >
                    <Button htmlType='submit' type='primary' size='large'>
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Settings;