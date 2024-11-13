import { ProductMeta, ProductType } from '@/Components/util/type';
import { Button, Image, Table } from 'antd';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

const ProductTable = ({ data }: { data: any }) => {
    const products = data?.offers as ProductType[]
    // const meta = data?.meta as ProductMeta

    return (
        <div>
            <Table
                dataSource={products}
                bordered
                rowKey={'offerId'}
                size='small'
                columns={[
                    {
                        title: 'Product',
                        dataIndex: 'product',
                        key: 'product',
                        render: (_, record: ProductType) => (
                            <div className='flex gap-x-4'>
                                <Image
                                    src={record.images[0].url}
                                    alt={record.title}
                                    width={50}
                                />
                                <div>
                                    <p className='text-xs max-w-[200px]'>{record.title}
                                    </p>
                                </div>
                            </div>
                        )
                    },
                    {
                        title: 'Brand',
                        dataIndex: 'brand',
                        key: 'brand',
                        render: (_, record: ProductType) => (
                            <div className='text-sm'>
                                Brand: {record.brand.name}
                            </div>
                        )
                    },
                    {
                        title: 'Price',
                        dataIndex: 'Price',
                        key: 'Price',
                        render: (_, record: ProductType) => (
                            <p className='font-bold  text-sm'>${record.price}</p>
                        )
                    },
                    {
                        title: 'Marchent Id',
                        dataIndex: 'marchent',
                        key: 'marchent',
                        render: (_, record: ProductType) => (
                            <p className='text-xs'>{record.merchant.id}</p>
                        )
                    },
                    {
                        title: 'AvailabilityStatus',
                        dataIndex: 'availabilityStatus',
                        key: 'availabilityStatus'
                    },
                    {
                        title: "Action",
                        dataIndex: "action",
                        key: "action",
                        render: (_, record: ProductType) => (
                            <div className='flex flex-col gap-y-3'>

                                <Button size='small' type='primary'
                                    onClick={() => {
                                        const url = `${window.location.origin}/redirect?pid=${record.offerId}&marchantId=${record.merchant.id}`
                                        navigator.clipboard.writeText(url);
                                        toast.success('Product redirect link copied to clipboard')
                                    }}
                                >
                                    Copy Redirect Url
                                </Button>
                                <Link href={`/products/${record.offerId}`}>
                                    <Button size='small'>
                                        Product Details
                                    </Button>
                                </Link>
                            </div>
                        )
                    }
                ]}
            />
        </div>
    );
};

export default ProductTable;