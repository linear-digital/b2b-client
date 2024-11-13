'use client'
import { api, fetcherSS } from '@/Components/util/axios';
import { useQuery } from '@tanstack/react-query';
import { Input, Select, Spin, Table } from 'antd';
import React from 'react';
import ProductTable from './ProductTable';
import { SearchOutlined } from '@ant-design/icons';

const Products = () => {
    const [query, setQuery] = React.useState('')
    const [merchant, setMerchant] = React.useState('')
    const [text, setText] = React.useState('')
    const [type, setType] = React.useState('query')
    const { data, isLoading } = useQuery({
        queryKey: ['products-all', query, merchant],
        queryFn: async () => {
            const res = await fetcherSS({
                url: `/product?pageSize=100&sortBy=performanceScore&sortDirection=asc${query ? `&query=${query}` : ''}${merchant ? `&filterBy=merchantId:${merchant}` : ''}`,
                method: 'GET'
            })
            return res
        }
    })
    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetcherSS({
                url: '/product/category'
            })
            return res
        },
    })
    if (isLoading) {
        return <Spin />
    }
    return (
        <div>
            <div className="flex items-center gap-x-4 mb-7">
                <Select
                    defaultValue="query"
                    onChange={(e) => setType(e)}
                    value={type}
                    style={{ minWidth: 180 }}
                    size='large'
                    options={[
                        {
                            value: 'query',
                            label: 'Search Product'
                        },
                        {
                            value: 'merchant',
                            label: 'Product By Marchent'
                        }
                    ]}
                />
                <Input
                    placeholder={type === 'query' ? 'Search for products, by title, brand , category' : 'Product By Marchent id'}
                    size='large'
                    value={text}
                    className='max-w-[400px]'
                    onChange={(e) => setText(e.target.value)}
                    onBlur={() => {
                        if (type === 'query') {
                            setQuery(text)
                            setMerchant("")
                        }
                        else {
                            setMerchant(text)
                            setQuery('')
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            if (type === 'query') {
                                setQuery(text)
                                setMerchant("")
                            }
                            else {
                                setMerchant(text)
                                setQuery('')
                            }
                        }
                    }}
                    suffix={<button
                        onClick={() => {
                            if (type === 'query') {
                                setQuery(text)
                                setMerchant("")
                            }
                            else {
                                setMerchant(text)
                                setQuery('')
                            }
                        }}
                    >
                        <SearchOutlined />
                    </button>}
                />
            </div>
            <ProductTable data={data} />
        </div>
    );
};

export default Products;

