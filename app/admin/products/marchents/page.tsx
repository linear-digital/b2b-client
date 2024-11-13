'use client'
import fetcher, { api, fetcherSS } from '@/Components/util/axios';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Image, Spin, Table } from 'antd';
import React from 'react';

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
                    }
                ]}
            />
        </div>
    );
};

export default Marchents;