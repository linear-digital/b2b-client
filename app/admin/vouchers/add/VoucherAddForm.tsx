'use client'
import { Button, Form, GetProps, Input, Select } from 'antd';
import React from 'react';
import { DatePicker, Space } from 'antd';

import dayjs from 'dayjs';
import { categories } from '@/app/voucher/_Ui/Category';
import UploadBanner from './_Ui/Uploadbanner';
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
};
const VoucherAddForm = () => {
    const onFinish = (values: any) => {
        const date = values.date;
        const startDate = date[0]
        const endDate = date[1]
        console.log('Success:', {
            ...values,
            date: startDate,
            end_date: endDate
        });
    };

    return (
        <div className='grid lg:grid-cols-2 gap-6'>
            <Form layout='vertical'
                onFinish={onFinish}
                initialValues={{
                    categories: '',
                }}
            >
                <Form.Item
                    label='Voucher Title'
                    name='title'
                    rules={[{ required: true, message: 'Please enter voucher title!' }]}
                >
                    <Input placeholder='Voucher Title' size='large' />
                </Form.Item>
                <Form.Item
                    label='Date'
                    name={'date'}
                    rules={[{ required: true, message: 'Please select start and end date!' }]}
                >
                    <DatePicker.RangePicker size='large'
                        style={{
                            width: '100%',
                        }}
                        disabledDate={disabledDate}
                        format='DD/MM/YYYY'
                        placeholder={['Select Start Date', 'Select End Date']}

                    />
                </Form.Item>
                <Form.Item
                    label='Vaucher Description'
                    name={'description'}
                    rules={[{ required: true, message: 'Please enter description!' }]}
                >
                    <Input.TextArea
                        placeholder='Add Description'
                        size='large'
                        rows={4}
                    />
                </Form.Item>
                <Form.Item
                    label='Category'
                    name={'category'}
                    rules={[{ required: true, message: 'Please select category' }]}
                >
                    <Select
                        placeholder='Select Category'
                        size='large'
                        options={[{ value: '', label: 'Select Category' }, ...categories.map((category) => ({ label: category.name, value: category.name }))]} />
                </Form.Item>
                <Form.Item
                    label='Voucher Code'
                    name='code'
                    rules={[{ required: true, message: 'Please enter  voucher code!' }]}
                >
                    <Input placeholder='Voucher Code' size='large' />
                </Form.Item>
                <Form.Item
                    label='Website Link'
                    name='link'
                    rules={[{ required: true, message: 'Please enter  link' }]}
                >
                    <Input placeholder='Website Link' size='large' />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' type='primary'>
                        Add Voucher
                    </Button>
                </Form.Item>
            </Form>
            <div>
                <h2 className='text-lg font-medium mb-4'>Add an image</h2>
                <UploadBanner />
            </div>
        </div>
    );
};

export default VoucherAddForm;