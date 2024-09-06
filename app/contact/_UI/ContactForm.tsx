'use client';
import { Button, Form, FormProps, Input } from 'antd';
import React from 'react';
type FieldType = {
    name: string;
    email: string;
    message: string;
    subject: string;
    phone: string;
};


const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const ContactForm = () => {

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className='bg-[#2F3B2A] rounded-xl p-7 contact'>
            <h2 className='messiri text-[30px] text-white'>
                We’d Love to Hear From You
            </h2>
            <Form
                className='mt-8'
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                    label="Phone Number"
                    name="phone"
                >
                    <Input size='large' />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Subject"
                    name="subject"
                >
                    <Input size='large' />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Message"
                    name="message"
                >
                    <Input.TextArea size='large' rows={4} />
                </Form.Item>
                <Form.Item>
                    <Button className='px-8' type='primary' size='large' >
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default ContactForm;