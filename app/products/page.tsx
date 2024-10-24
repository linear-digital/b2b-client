'use client'
import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import Filter from '@/Components/Pages/Products/Filter';
import React, { Suspense, useState } from 'react';
import ProductContainer from './_UI/ProductContainer';
import Footer from '@/Components/Bars/Footer/Footer';
import { Spin } from 'antd';

const Page = () => {
    const [range, setRange] = useState({ min: 0, max: 0 })
    const [stockAvailable, setStockAvailable] = useState('')
    return (
        <Suspense fallback={<Spin />}>
            <div className='bg-[#F7F7F7]'>
                <Navbar />
                <PageTop
                    title='Our Products'
                    description="Browse through our extensive collection of products. Whether you're looking for the latest tech gadgets, stylish apparel, or everyday essentials, you'll find everything you need right here."
                />
                <div className="container mx-auto mt-16 flex gap-5 items-start p-4 lg:p-0">
                    <div className="hidden lg:block">
                        <Filter
                            range={range}
                            setRange={setRange}
                            stockAvailable={stockAvailable}
                            setStockAvailable={setStockAvailable}
                        />
                    </div>
                    <ProductContainer
                        range={range}
                        setRange={setRange}
                        stockAvailable={stockAvailable}
                        setStockAvailable={setStockAvailable}
                    />
                </div>
                <Footer />
            </div>
        </Suspense>
    );
};

export default Page;