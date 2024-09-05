import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductContainer = () => {
    return (
        <section className='w-full pb-20'>
            <div className="flex justify-between items-center">
                <Input
                    className='search-input-p w-[295px] pl-2 border-none outline-none'
                    prefix={<SearchOutlined className='text-lg bg-transparent' />}
                    size="middle"
                    placeholder='Search for products'
                />
                <div className="flex items-center">
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
            <div className="grid grid-cols-3 mt-7 gap-5 mb-8 max-h-screen overflow-y-auto">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <Pagination />
        </section>
    );
};

export default ProductContainer;