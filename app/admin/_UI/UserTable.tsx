'use client'
import React from 'react';
import { Button, Space, Spin, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';
import { UserType } from '@/Components/util/type';

interface DataType {
    key: string;
    name: string;
    email: string;
    address: string;
    phone: string;
}

const columns: TableProps<UserType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Button type="link">Edit</Button>
                <Button danger>Delete</Button>
            </Space>
        ),
    },
];


const UserTable: React.FC = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            return await fetcher({
                url: '/users',
                method: 'GET'
            })
        }
    })
    if (isLoading) {
        return <Spin size='large'/>
    }
    return <Table columns={columns} dataSource={data as UserType[]} rowKey={(row) => row._id}/>
};

export default UserTable;