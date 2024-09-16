
'use client';
import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { useQuery } from '@tanstack/react-query';
import { Button, Form, Image, Input, Popover, Spin } from 'antd';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import Category from '../shop-category/UI/Categorys';

const Faq = () => {

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['faq'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "faq"
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
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div id='voucher-discount' >
            <h1 className='text-3xl font-medium font-elMessiri'>
                Frequently Asked Questions (FAQ)
            </h1>
            <Form
                layout='vertical'
                initialValues={data}
                className='mt-4 border p-4 rounded-lg'
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
                    <Input.TextArea size='large' />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Update
                    </Button>
                </Form.Item>
            </Form>

            <h1 className='text-xl font-medium font-elMessiri mt-10'>Add A New Question</h1>
            <AddQuestion refetch={refetch} rootData={data} />
            <h1 className='text-2xl font-medium font-elMessiri mt-10'>Questions</h1>
            <div className="mt-10">
                {
                    data?.others?.questions?.map((item: any, index: number) => {
                        return <UpdateQuestion key={index} data={item} rootData={data} index={index} refetch={refetch} />
                    })
                }
            </div>
        </div>
    );
};

export default Faq;

const AddQuestion = ({ rootData, refetch }: { rootData: any, refetch: any }) => {
    const [show, setShow] = React.useState(false);
    const [form] = Form.useForm();
    const onFinish = async (values: any) => {
        try {
            const questions = rootData?.others?.questions
            const newQuestions = [...questions, values]
            const res = await fetcher({
                method: 'PUT',
                url: `/pages/${rootData?._id}`,
                body: {
                    others: {
                        questions: newQuestions
                    }
                }
            })
            refetch()
            toast.success("New Question added successfully")
            form.resetFields()
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    return (
        <>
            {
                show ?
                    <Form
                        layout='vertical'
                        className='mt-4 border p-4 rounded-lg'
                        onFinish={onFinish}
                        form={form}
                    >
                        <Form.Item
                            label="Question"
                            name={"q"}
                            rules={[{ required: true, message: 'Please enter question' }]}
                        >
                            <Input size='middle' />
                        </Form.Item>
                        <Form.Item
                            label="Answer"
                            name={"a"}
                            rules={[{ required: true, message: 'Please enter answer' }]}
                        >
                            <Input.TextArea size='middle' />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>
                                Add New
                            </Button>
                        </Form.Item>
                    </Form>
                    :
                    <Button onClick={() => setShow(true)}
                        type='primary'
                        size='large'
                        className='mt-3'
                    >
                        Add A New Question
                    </Button>
            }
        </>
    )
}

const UpdateQuestion = ({ data, rootData, index, refetch }: { data: any, rootData: any, index: number, refetch: any }) => {

    const onFinish = async (values: any) => {
        try {
            const questions = rootData?.others?.questions
            const newQuestions = questions.map((item: any, i: number) => {
                if (i === index) {
                    return values
                } else {
                    return item
                }
            })
            const res = await fetcher({
                method: 'PUT',
                url: `/pages/${rootData?._id}`,
                body: {
                    others: {
                        questions: newQuestions
                    }
                }
            })
            toast.success("Data updated successfully")
            refetch()
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    const deleteQuestion = async () => {
        try {
            const res = await fetcher({
                method: 'PUT',
                url: `/pages/${rootData?._id}`,
                body: {
                    others: {
                        questions: [
                            ...rootData?.others?.questions?.filter((item: any, i: number) => i !== index)
                        ]
                    }
                }
            })
            toast.success("Data Deleted successfully")
            refetch()
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    return (
        <Form
            layout='vertical'
            className='mt-4 border p-4 rounded-lg'
            onFinish={onFinish}
            initialValues={data}
        >
            <Form.Item
                label="Question"
                name={"q"}
            >
                <Input size='middle' />
            </Form.Item>
            <Form.Item
                label="Answer"
                name={"a"}
            >
                <Input.TextArea size='middle' />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>
                    Update Question
                </Button>
                <Button className='ml-4' danger onClick={deleteQuestion}>
                    Delete Question
                </Button>
            </Form.Item>
        </Form>
    )
}