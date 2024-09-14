'use client'
import React, { useState } from 'react';
import { Button, Popconfirm, Spin, Table, message } from 'antd';
import type { TableColumnsType } from 'antd';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';
import moment from 'moment';
import { VoucherType } from '@/Components/util/type';
import { errorDisplay } from '@/Components/util/readError';
interface DataType {
    key: React.Key;
    title: string;
    code: number;
    address: string;
    description: string;
}


const VoucherTable: React.FC = () => {
    const { data: vouchers, isLoading, refetch } = useQuery({
        queryKey: ['vouchers'],
        queryFn: async () => {
            return await fetcher({
                url: '/vouchers/all',
                method: 'GET'
            })
        }
    })

    const router = useRouter();
    // Handler for deleting a row
    const handleDelete = async (key: string) => {
        try {
            await fetcher({
                url: `/vouchers/single/${key}`,
                method: 'DELETE'
            })
            toast.success('Voucher deleted successfully')
            refetch()
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    };

    // Handler for editing a row (you can replace this with your own logic)
    const handleEdit = (key: React.Key) => {
        router.push(`/admin/vouchers/edit?id=${key}`)
    };

    const columns: TableColumnsType<VoucherType> = [
        { title: 'Name', dataIndex: 'title', key: 'title', render: (text: string) => <p className='text-sm max-w-[250px]'>{text.slice(0, 60)}</p> },
        {
            title: 'Start Date', dataIndex: 'startDate', key: 'startDate',
            render: (date) => (
                moment(date).format('MMMM Do YYYY')
            )
        },
        {
            title: 'Expiration Date', dataIndex: 'endDate', key: 'endDate',
            render: (date) => (
                moment(date).format('MMMM Do YYYY')
            )
        },
        {
            title: 'Expires', dataIndex: 'endDate', key: 'endDate',
            render: (time) => (
                moment(time).fromNow()
            )
        },
        {
            title: 'Discount', dataIndex: 'discount', key: 'discount',
            render: (discount) => (
                `${discount}%`
            )
        },
        { title: 'Category', dataIndex: 'category', key: 'category' },
        {
            title: 'Link', dataIndex: 'link', key: 'link',
            render: (link) => (
                <a href={link} target='_blank'>Click here</a>
            )
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: 5 }}>
                    <Popconfirm
                        title="Delete the Voucher?"
                        description="Are you sure to delete Voucher?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={() => handleDelete(record._id)}
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>

                    <Button type='primary' onClick={() => handleEdit(record._id)}>Update</Button>
                </div>
            ),
        },
    ];

    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <Table
            columns={columns}
            expandable={{
                expandedRowRender: (record) => <div className='text-xs'>
                    <h5>
                        <strong>Title</strong>: {record.title}
                    </h5>
                    <h5>
                        <strong>Code</strong>: {record.code}
                    </h5>
                    <h5>
                        <strong>Link</strong>: {record.link}
                    </h5>
                    <p>
                        <strong>Description</strong>:
                        {record.description}
                    </p>
                </div>,
            }}
            rowKey={(record) => record._id}
            dataSource={vouchers?.data}
        />
    );
}

export default VoucherTable;