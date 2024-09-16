
'use client';
import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, Image, Input, Popover, Spin } from 'antd';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import Category from '../shop-category/UI/Categorys';

const TrendingProducts = () => {

    const { data, isFetching, refetch } = useQuery({
        queryKey: ['Trending Products'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Trending Products"
                }
            })
            return res
        },
        refetchOnWindowFocus: false
    })
    const [tags, setTags] = React.useState<string[]>([]);
    useEffect(() => {
        if (data?.others?.category) {
            setTags(data?.others?.category)
        }
    }, [data])
    const onFinish = async (values: any) => {
        try {
            const res = await fetcher({
                method: 'PUT',
                url: `/pages/${data?._id}`,
                body: {
                    ...values,
                    others: {
                        category: tags
                    }
                }
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
        <div id='Trending-Products' className='mt-20 border p-4 rounded-lg'>
            <h1 className='text-3xl font-medium font-elMessiri'>{"Trending Products"}</h1>
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
                    label="Categorys"
                >
                    <Category tags={tags} setTags={setTags} />
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

export default TrendingProducts;