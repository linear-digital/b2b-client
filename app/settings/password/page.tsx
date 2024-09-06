'use client'
import { Button, Form, Input } from 'antd';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className='text-[28px] font-medium font-elMessiri'>
                Change Password
            </h2>
            <Form
                layout='vertical'
                className='mt-10 w-[400px]'

            >
                <Form.Item
                    label="Old Password"
                    name={'password'}
                    rules={[{ required: true, message: 'Please input your old password!' }]}
                >
                    <Input.Password size='large' />
                </Form.Item>
                <Form.Item
                    label="New Password"
                    name={'newPassword'}
                    rules={[{ required: true, message: 'Please input your new password!' }]}
                >
                    <Input.Password size='large' />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name={'confirmPassword'}
                    rules={[{ required: true, message: 'Please input your confirm password!' }]}
                >
                    <Input.Password size='large' />
                </Form.Item>
                <Form.Item
                    className='mt-5'
                >
                    <Button size='large' type="primary" htmlType="submit">
                        Update Password
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default page;