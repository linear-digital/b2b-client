'use client'
import { SearchOutlined } from '@ant-design/icons';
import { Input, Popover, Skeleton, Spin } from 'antd';
import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Filter from '@/Components/Pages/Products/Filter';
import { products } from '@/app/admin/products/data';
import { useQuery } from '@tanstack/react-query';
export interface PType {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
}

interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}
import { useRouter, useSearchParams } from 'next/navigation';
import { api, fetcherSS } from '@/Components/util/axios';
import { ProductMeta, ProductType } from '@/Components/util/type';
const ProductContainer = (
    { range, setRange, stockAvailable, setStockAvailable }:
        { range: { min: number, max: number }, setRange: any, stockAvailable: string, setStockAvailable: any }) => {

    const [visible, setVisible] = React.useState(false);
    const [limit, setLimit] = React.useState(21);
    const allParams = useSearchParams()

    const cate = allParams.get('category')
    const shortBy = allParams.get('sortBy') || "performanceScore"
    const pagec = allParams.get('page') as any || 1
    const discount = allParams.get('discount')
    const merchantId = allParams.get('merchantId')

    const sortOrder = allParams.get('sortDirection')
    const [search, setSearch] = React.useState('');

    const dependency = [pagec, limit, cate, search, shortBy, sortOrder,
        range,
        stockAvailable,
        discount,
        merchantId
    ]


    const url = `/product?${cate ? `filterBy=categoryId:${cate}` : ''}${cate ? `&page=${pagec}` : `page=${pagec}`}&pageSize=${limit}${search ? `&query=${search}` : ''}${shortBy ? `&sortBy=${shortBy}&sortDirection=asc` : ''}${sortOrder ? `&sortDirection=${sortOrder}` : ''}${range.min ? `&filterGreaterThanEqual=price:${range.min}` : ''}${range.max ? `&filterLowerThanEqual=price:${range.max}` : ''}${stockAvailable ? `&facetValuesOn=availabilityStatus:${stockAvailable}` : ''}${!!discount ? `&filterGreaterThan=rebatePercentage:1` : ''}${merchantId ? `&filterBy=merchantId:${merchantId}` : ''}`



    const { data: response, isLoading, isError } = useQuery({
        queryKey: ['products', ...dependency],
        queryFn: async () => {
            const data = await fetcherSS({
                url: url,
                method: 'GET',
            })
            return data
        }
    })
    const data = {
        offers: response?.offers as ProductType[],
        meta: response?.meta as ProductMeta
    }
    const router = useRouter()
    const updateQuery = (value: any) => {
        const searchParams = new URLSearchParams(window.location.search);
        if (value === 'price-low-high') {
            searchParams.set('sortBy', 'price')
            searchParams.set('sortDirection', 'asc')
        }
        else {
            searchParams.set('sortBy', `${value}`)
            if (sortOrder) {
                searchParams.delete('sortDirection')
            }
        }

        router.push(`?${searchParams}`)
    }
    const products = data?.offers
    const meta = data?.meta
    if (isError) {
        return <div className='text-red-500 text-xl'>Something went wrong</div>
    }
    return (
        <section className='w-full lg:pb-20 pb-10'>
            {
                visible && <div className="absolute z-[60] top-0 left-0 w-full h-screen overflow-y-auto  bg-white lg:hidden animate__animated  animate__zoomIn animate__faster">
                    <Filter
                        stockAvailable={stockAvailable}
                        setStockAvailable={setStockAvailable}
                        setVisible={setVisible} range={range} setRange={setRange} />
                </div>
            }
            <div className="flex justify-between items-center gap-x-3">
                <Input
                    className='search-input-p w-[295px] pl-2 border-none outline-none'
                    prefix={<SearchOutlined className='text-lg bg-transparent' />}
                    size="middle"
                    defaultValue={search}
                    onKeyDown={(e: any) => {
                        if (e.key === 'Enter') {
                            setSearch(e.target.value)
                        }
                    }}
                    onBlur={(e) => setSearch(e.target.value)}
                    placeholder='Search for products'
                />
                <button className='px-3 bg-white py-2 rounded-lg lg:hidden'
                    onClick={() => setVisible(true)}
                >
                    <FilterAltIcon />
                </button>
                <div className="hidden items-center lg:flex">
                    <h3 className='font-medium'>
                        Sort by:
                    </h3>
                    <select className='bg-white py-2 px-2 rounded-lg ml-2 text-sm'
                        onChange={(e: any) => updateQuery(e.target.value)}
                        defaultValue={shortBy}
                    >
                        <option value="performanceScore">Popularity</option>
                        <option value="price">Price: High - Low</option>
                        <option value="price-low-high">Price: Low - High</option>
                    </select>
                </div>
            </div>
            {
                isLoading ? <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-7 gap-5 mb-8 justify-items-center w-full'>
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                    <ProductSkeleton />
                </div> : (
                    <>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-7 gap-5 mb-8 ">
                            {
                                products?.map((product: ProductType, index: number) => <ProductCard key={index} data={product} />)
                            }

                        </div>
                        <Pagination pages={meta.offers.remaining > (limit * limit) ? limit * limit : meta.offers.remaining} active={pagec} />
                    </>
                )
            }
        </section>
    );
};

export default ProductContainer;

const ProductSkeleton = () => {
    return <div className='w-full'>
        <Skeleton.Image active={true}
            style={{ width: '350px', height: '300px' }}
        />
        <Skeleton.Button className='w-full' active={true}
            style={{ height: '40px', width: '350px', marginTop: '10px' }}
        />
    </div>
}