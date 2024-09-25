import fetcher from "@/Components/util/axios";
import { errorDisplay } from "@/Components/util/readError";
import { Button, Form, Image, Input } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import type { UploadProps } from 'antd';



const AddTeamMember = ({ rootData, refetch }: { rootData: any, refetch: any }) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info) => {

        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.fileList) {
            setLoading(false);
            setImageUrl(info.fileList[0]?.response?.url);
        }
        // if (info.file.status === 'done') {
        //     // Get this url from response in real world.
        //     getBase64(info.file.originFileObj as FileType, (url) => {
        //         setLoading(false);
        //         setImageUrl(url);
        //     });
        // }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none', fontSize:12 }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload Images</div>
        </button>
    );

    const [form] = Form.useForm();
    const onFinish = async (values: any) => {
        try {
            if (!imageUrl) {
                return toast.error("Please upload image")
            }
            const questions = rootData?.others?.members
            const newMembers = [...questions, {
                ...values,
                image: imageUrl
            }]
            const res = await fetcher({
                method: 'PUT',
                url: `/pages/${rootData?._id}`,
                body: {
                    others: {
                        members: newMembers
                    }
                }
            })
            refetch()
            toast.success("Member added successfully")
            window.location.reload()
            form.resetFields()
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    return (
        <Form
            layout='vertical'
            className='mt-4 border p-4 rounded-lg'
            onFinish={onFinish}
            form={form}
        >
            <Form.Item>
                <Upload
                    name="profile"
                    listType="picture-card"
                    className="avatar-uploader"
                    action="https://server.shoppanorma.com/upload"
                    accept="image/*"
                    maxCount={1}
                    onChange={handleChange}
                    onRemove={() => setImageUrl('')}
                >
                    {imageUrl ? null : uploadButton}
                </Upload>
            </Form.Item>
            <Form.Item
                label="Name"
                name={"name"}
                rules={[{ required: true, message: 'Please enter name' }]}
            >
                <Input size='middle' />
            </Form.Item>
            <Form.Item
                label="Position"
                name={"position"}
                rules={[{ required: true, message: 'Please enter position' }]}
            >
                <Input size='middle' />
            </Form.Item>
            <Form.Item>
                <Button type='primary' htmlType='submit'>
                    Add New
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddTeamMember