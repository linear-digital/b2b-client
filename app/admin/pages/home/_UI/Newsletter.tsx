import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, Image, Input, Popover, Spin } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import UploadImage from './UploadImage';
import UpdateImage from './UpdateImage';

const Newsletter = () => {
    const { data, isFetching, refetch } = useQuery({
        queryKey: ['Newsletter'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "newsletter"
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
        <div id='Newsletter'>
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
                    <Input.TextArea rows={4} size='large' />
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

export default Newsletter;