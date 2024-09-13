'use client'
import React, { useState } from 'react';
import { Button, Table, message } from 'antd';
import type { TableColumnsType } from 'antd';
import toast from 'react-hot-toast';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    description: string;
}

const initialData: DataType[] = [
    {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
    },
    {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
];

const VoucherTable: React.FC = () => {
    const [data, setData] = useState<DataType[]>(initialData);

    // Handler for deleting a row
    const handleDelete = (key: React.Key) => {
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
        toast.success('Voucher deleted successfully');
    };

    // Handler for editing a row (you can replace this with your own logic)
    const handleEdit = (key: React.Key) => {
        message.info(`Editing voucher with key: ${key}`);
        // Logic for updating or editing the record
    };

    const columns: TableColumnsType<DataType> = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Expiration Date', dataIndex: 'age', key: 'age' },
        { title: 'Time Remaining', dataIndex: 'age', key: 'age' },
        { title: 'Discount', dataIndex: 'age', key: 'age' },
        { title: 'Category', dataIndex: 'age', key: 'age' },
        { title: 'Link', dataIndex: 'address', key: 'address' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: 5 }}>
                    <Button danger onClick={() => handleDelete(record.key)}>Delete</Button>
                    <Button type='primary' onClick={() => handleEdit(record.key)}>Update</Button>
                </div>
            ),
        },
    ];

    return (
        <Table
            columns={columns}
            expandable={{
                expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
                rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            dataSource={data}
        />
    );
}

export default VoucherTable;