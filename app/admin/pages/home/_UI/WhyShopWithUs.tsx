
'use client';
import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, Input, Popover, Spin } from 'antd';
import Image from 'next/image';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const WhyShopWithUs = () => {

    const { data, isFetching, refetch } = useQuery({
        queryKey: ['Why Shop With Us'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Why Shop With Us"
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
                body: {
                    ...values,
                    others: {

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
        <div id='Why-Shop' className='mt-20 border p-4 rounded-lg'>
            <h1 className='text-3xl font-medium font-elMessiri'>{"Why Shop With Us"}</h1>
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
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Update
                    </Button>
                </Form.Item>
            </Form>
            <section className='mt-10'>
                <h1 className='text-2xl font-medium font-elMessiri'>{"Items"}</h1>
                <div className="mt-10 grid grid-cols-2 gap-10">
                    {
                        data?.others?.options?.map((item: any, index: number) => <ItemCard
                            data={item}
                            key={index}
                            index={index}
                            options={data?.others?.options}
                            id={data?._id}
                        />)
                    }
                </div>

            </section>
        </div>
    );
};

export default WhyShopWithUs;

const ItemCard = ({ data, index, options, id }: { data: any, index: number, options: any, id?: string }) => {
    const onFinish = async (values: any) => {
        const newData = options.map((item: any, i: number) => {
            if (i === index) {
                return {
                    ...item,
                    ...values
                }
            }
            return item
        })
        try {
            const res = await fetcher({
                method: 'PUT',
                url: `/pages/${id}`,
                body: {
                    others: {
                        options: newData
                    }
                }
            })
            toast.success("Data updated successfully")
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    return <div>
        <Image src={data.image} alt="login" width={80} height={80} />
        <Form className="mt-4"
            layout='vertical'
            initialValues={data}
            onFinish={onFinish}
        >
            <Form.Item
                label="Title"
                name="title"
            >
                <Input size='large' />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
            >
                <Input size='large' />
            </Form.Item>
            <Form.Item>
                <Button type='primary' className='mt-5' size='large' htmlType='submit'>
                    Update Options
                </Button>
            </Form.Item>
        </Form>
    </div>
}