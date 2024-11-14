'use client'
import fetcher, { api, fetcherSS } from '@/Components/util/axios';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Button, Image, Spin, Table } from 'antd';
import React from 'react';
import toast from 'react-hot-toast';

const Marchents = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['marchents'],
        queryFn: async () => {
            const res = await api.get('/product/custom/feeds/merchants')
            return res.data
        }
    })
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div>
            <Table
                rowKey={'id'}
                dataSource={data}
                columns={[
                    {
                        title: 'Logo',
                        dataIndex: 'logo',
                        key: 'logo',
                        render: (_, record: any) => (
                            <Avatar src={record.logoUrl} alt={record.name}
                                size={50}
                            />
                        )
                    },
                    {
                        title: 'Name',
                        dataIndex: 'name',
                        key: 'name',
                        render: (_, record: any) => (
                            <div>
                                <p className='font-semibold'>{record.name}</p>
                            </div>
                        )
                    }, {
                        title: 'WebSite',
                        dataIndex: 'url',
                        key: 'url',
                        render: (_, record: any) => (
                            <a href={record.url} target='_blank'>
                                {record.url}
                            </a>
                        )
                    },
                    {
                        title: 'Marchant ID',
                        dataIndex: 'id',
                        key: 'id',
                        render: (_, record: any) => (
                            <div>
                                <p className='font-semibold cursor-pointer'
                                    onClick={() => {
                                        navigator.clipboard.writeText(record.id)
                                        toast.success('Copied to clipboard')
                                    }
                                    }
                                >{record.id}</p>
                            </div>
                        )
                    },
                    {
                        title: 'Action',
                        dataIndex: 'action',
                        key: 'action',
                        render: (_, record: any) => (
                            <div>
                                <Button type='primary'
                                onClick={() => {
                                    const url = `${window.location.origin}/redirect?url=${record.url}&marchantId=${record.id}`
                                    navigator.clipboard.writeText(url);
                                    toast.success('Marchant redirect link copied to clipboard')
                                }}
                                >
                                    Copy Redirect URL
                                </Button>
                            </div>
                        )
                    }
                ]}
            />
        </div>
    );
};

export default Marchents;