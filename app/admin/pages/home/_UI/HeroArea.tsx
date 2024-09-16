import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, Image, Input, Popover, Spin } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';
import UploadImage from './UploadImage';
import UpdateImage from './UpdateImage';

const HeroArea = () => {
    const { data, isFetching, refetch } = useQuery({
        queryKey: ['hero'],
        queryFn: () => {
            return fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Hero Area"
                }
            })
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
        <div id='hero' className='border p-4 rounded-lg'>
            <h1 className='text-3xl font-medium font-elMessiri'>{data?.section}</h1>
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
            <h1 className='text-2xl font-medium'>
                Images
            </h1>
            {/* <UploadImage url={data?.images}/> */}
            <div className="flex flex-wrap gap-4 mt-4">
                {
                    data?.images?.map((image: any, index: number) => (
                        <div key={index} className='flex flex-col items-start gap-y-3'>
                            <Image src={image} alt="login" height={150} className={'h-full w-full'} />
                            <Popover trigger={"click"} content={<UpdateImage  
                            data={data}
                             url={image}
                             refetch={refetch}
                             />}>
                                <Button type='primary'>
                                    Update
                                </Button>
                            </Popover>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HeroArea;