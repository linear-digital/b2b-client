
'use client';
import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, Image, Input, Popover, Spin } from 'antd';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const WhatWoDO = () => {

    const { data, isFetching, refetch } = useQuery({
        queryKey: ['What We Do'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "What We Do"
                }
            })
            return res
        },
        refetchOnWindowFocus: false
    })
    const onFinish = async (values: any) => {
        try {
            const res = await fetcher({
                method: 'PUT',
                url: `/pages/${data?._id}`,
                body: values
            })
            toast.success("Data updated successfully")
            refetch()
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    if (isFetching) {
        return <Spin size='large' />
    }
    return (
        <div id='voucher-discount' className='border p-4 rounded-lg' >
            <h1 className='text-3xl font-medium font-elMessiri'>{data?.title}</h1>
            <Form
                layout='vertical'
                initialValues={data}
                className='mt-4'
                onFinish={onFinish}
            >
                <Form.Item
                    label="Title"
                    name={"title"}
                >
                    <Input size='large' />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name={"desc"}
                >
                    <Input.TextArea
                        rows={3}
                        size='large'
                    />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Update
                    </Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default WhatWoDO;