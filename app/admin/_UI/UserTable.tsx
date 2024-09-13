'use client'
import React from 'react';
import { Button, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    name: string;
    email: string;
    address: string;
    phone: string;
}

const columns: TableProps<DataType>['columns'] = [
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

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        email: "a@a.com",
        phone: '9876543210',
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        email: "a@a.com",
        phone: '9876543210',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        email: "a@a.com",
        phone: '9876543210',
        address: 'Sidney No. 1 Lake Park',
    },
    
];

const UserTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default UserTable;