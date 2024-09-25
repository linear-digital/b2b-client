'use client'
import { SearchOutlined } from '@ant-design/icons';
import { Input, Popover } from 'antd';
import React from 'react';
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
    meta: MetaData;
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
  
  interface MetaData {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  }
import axios from 'axios';
const ProductContainer = () => {
    const [visible, setVisible] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [limit, setLimit] = React.useState(20);
    const { data } = useQuery({
        queryKey: ['products', page, limit],
        queryFn: async () => {
            const data = await axios.get(`https://dummyjson.com/products/category/mens-shirts?limit=${limit}&skip=${limit * (page - 1)}`)
            return data.data
        }
    })
    return (
        <section className='w-full lg:pb-20 pb-10'>
            {
                visible && <div className="absolute z-[60] top-0 left-0 w-full h-screen overflow-y-auto  bg-white lg:hidden animate__animated  animate__zoomIn animate__faster">
                    <Filter setVisible={setVisible} />
                </div>
            }
            <div className="flex justify-between items-center gap-x-3">
                <Input
                    className='search-input-p w-[295px] pl-2 border-none outline-none'
                    prefix={<SearchOutlined className='text-lg bg-transparent' />}
                    size="middle"
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
                    <select className='bg-white py-2 px-2 rounded-lg ml-2 text-sm'>
                        <option value="">Popularity</option>
                        <option value="">Price: High - Low</option>
                        <option value="">Price: Low - High</option>
                        <option value="">Rating: High - Low</option>
                        <option value="">Rating: Low - High</option>

                    </select>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-7 gap-5 mb-8 ">
                {
                    data?.products?.map((product: PType, index: number) => <ProductCard key={index} data={product} />)
                }

            </div>
            <Pagination pages={data?.total / 30} active={page} setActive={setPage} />
        </section>
    );
};

export default ProductContainer;