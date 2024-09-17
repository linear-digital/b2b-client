import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, Input, Spin } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';

const Details = () => {

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['Contact Details'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "information"
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
                        address: values?.address,
                        email: values?.email,
                        phone: values?.phone
                    }
                }
            })
            toast.success("Data updated successfully")
            refetch()
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div>
            <div id='' className='border p-4 rounded-lg mt-10' >
                <h1 className='text-3xl font-medium font-elMessiri'>{data?.title}</h1>
                <Form
                    layout='vertical'
                    initialValues={{
                        ...data,
                        address: data?.others?.address,
                        email: data?.others?.email,
                        phone: data?.others?.phone
                    }}
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

                    <Form.Item
                        label="Address"
                        name={"address"}
                    >
                        <Input size='large' />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name={"email"}
                    >
                        <Input size='large' />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name={"phone"}
                    >
                        <Input size='large' />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Update
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    );
};

export default Details;