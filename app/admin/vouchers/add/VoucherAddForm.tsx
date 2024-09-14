'use client'
import { Button, Form, GetProps, Input, Select } from 'antd';
import React from 'react';
import { DatePicker, Space } from 'antd';

import dayjs from 'dayjs';
import { categories } from '@/app/voucher/_Ui/Category';
import UploadBanner from './_Ui/Uploadbanner';
import { VoucherType } from '@/Components/util/type';
import toast from 'react-hot-toast';
import { errorDisplay } from '@/Components/util/readError';
import fetcher from '@/Components/util/axios';
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().startOf('day');
};
const VoucherAddForm = () => {
    const onFinish = async (values: any) => {
        const date = values.date;
        const startDate = date[0]
        const endDate = date[1]

        try {
            const res = await uploadImage()
            if (!res) {
                return toast.error('Image not found')
            }
            const newVoucher = {
                ...values,
                startDate,
                endDate,
                image: res
            }
            await fetcher({
                url: '/vouchers/new',
                method: "POST",
                body: newVoucher
            })
            toast.success("Voucher added successfully")
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    };
    const [image, setImage] = React.useState<any>(null);
    const uploadImage = async () => {
        try {
            if (!image) {
                throw new Error('Image not found')
            }
            const formdata = new FormData();
            formdata.append('profile', image as any);
            const resImage = await fetch('http://localhost:4000/upload', {
                method: 'POST',
                body: formdata
            })
            const data = await resImage.json()
            return data?.url
        } catch (error) {
            throw error
        }
    }
    return (
        <div className='grid lg:grid-cols-2 gap-10'>
            <Form layout='vertical'
                onFinish={onFinish}
                initialValues={{
                    categories: '',
                }}
            >
                <Form.Item<VoucherType>
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
                <Form.Item<VoucherType>
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
                <Form.Item<VoucherType>
                    label='Category'
                    name={'category'}
                    rules={[{ required: true, message: 'Please select category' }]}
                >
                    <Select
                        placeholder='Select Category'
                        size='large'
                        options={[{ value: '', label: 'Select Category' }, ...categories.map((category) => ({ label: category.name, value: category.name }))]} />
                </Form.Item>
                <Form.Item<VoucherType>
                    label='Voucher Code'
                    name='code'
                    rules={[{ required: true, message: 'Please enter  voucher code!' }]}
                >
                    <Input placeholder='Voucher Code' size='large' />
                </Form.Item>
                <Form.Item<VoucherType>
                    label='Discount'
                    name='discount'
                    rules={[{ required: true, message: 'Please enter  Discount %' }]}
                >
                    <Input type='number' placeholder='Discount %' size='large' max={100}/>
                </Form.Item>
                <Form.Item<VoucherType>
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
                <UploadBanner image={image} setImage={setImage} />
            </div>
        </div>
    );
};

export default VoucherAddForm;