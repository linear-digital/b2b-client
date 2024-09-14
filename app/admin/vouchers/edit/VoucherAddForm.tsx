'use client'
import { Button, Form, GetProps, Input, Select, Spin } from 'antd';
import React from 'react';
import { DatePicker, Space } from 'antd';

import dayjs from 'dayjs';
import { categories } from '@/app/voucher/_Ui/Category';
import UploadBanner from './_Ui/Uploadbanner';
import { VoucherType } from '@/Components/util/type';
import toast from 'react-hot-toast';
import { errorDisplay } from '@/Components/util/readError';
import fetcher from '@/Components/util/axios';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().startOf('day');
};
const VoucherAddForm = () => {
    const search = useSearchParams();
    const id = search.get('id')
    const { data, isLoading } = useQuery({
        queryKey: ['voucher', id],
        enabled: !!id,
        queryFn: async () => {
            return await fetcher({
                url: `/vouchers/single/${id}`,
                method: 'GET'
            })
        }
    })
    const onFinish = async (values: any) => {
        const date = values.date;
        const startDate = date[0]
        const endDate = date[1]

        try {
            const res = await uploadImage()
            
            const newVoucher = {
                ...values,
                startDate,
                endDate,
                image: res || data?.image
            }
            await fetcher({
                url: `/vouchers/single/${id}`,
                method: "PUT",
                body: newVoucher
            })
            toast.success("Voucher Updated successfully")
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
            return null
        }
    }
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div className='grid lg:grid-cols-2 gap-10'>
            <Form layout='vertical'
                onFinish={onFinish}
                initialValues={{
                    ...data,
                    date: data?.startDate && data?.endDate ? [dayjs(data?.startDate), dayjs(data?.endDate)] : null
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
                    <Input type='number' placeholder='Discount %' size='large' max={100} />
                </Form.Item>
                <Form.Item<VoucherType>
                    label='Website Link'
                    name='link'
                    rules={[{ required: true, message: 'Please enter  link' }]}
                >
                    <Input placeholder='Website Link' size='large' />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' size='large' type='primary'>
                        Update
                    </Button>
                </Form.Item>
            </Form>
            <div>
                <h2 className='text-lg font-medium mb-4'>Add an image</h2>
                <UploadBanner image={image} setImage={setImage} publicImg={data?.image}/>
            </div>
        </div>
    );
};

export default VoucherAddForm;