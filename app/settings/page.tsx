'use client'
import { Avatar, Button, Form, Input, Select } from 'antd';
import React from 'react';
type FieldType = {
    name: string;
    email: string;
    phone: string
    gender: string
    address: string
};
const page = () => {
    const onSubmit = (data: FieldType) => {
        console.log(data)
    }
    return (
        <div className='w-full'>
            <div className="flex items-center gap-10">
                <Avatar size={150} src={'/images/Avatar/man-1.png'} />
                <button className='btn-primary'>
                    Change
                </button>
            </div>
            <Form className='grid grid-cols-2 gap-x-5 mt-10'
                layout='vertical'
                name="basic"
                onFinish={onSubmit}
                initialValues={{ gender: "" }}
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
                <Form.Item></Form.Item>
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

export default page;