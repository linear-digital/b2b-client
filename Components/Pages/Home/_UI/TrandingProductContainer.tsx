'use client'
import Link from 'next/link';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import ProductCard from '@/app/products/_UI/ProductCard';
import { useQuery } from '@tanstack/react-query';
import fetcher, { fetcherSS } from '@/Components/util/axios';
import axios from 'axios';
import { Select, Spin } from 'antd';
import { ProductType } from '@/Components/util/type';
// import ProductCard from './ProductCard';


const TrendingProductContainer = ({data, products}: {data: any, products: ProductType[]}) => {
    const [swiper, setSwiper] = React.useState<any>(null);
   
    return (
        <div className='container mx-auto px-4 lg:px-0'>
            <h2 className='sec-title mt-10'>
                {data?.title}
            </h2>
            <div className="flex items-center justify-between mt-8">
                {/* <ul className='flex items-center gap-x-4 text-[#898989] lg:text-base text-sm'>
                    {
                        data?.others?.category?.map((item: any, index: number) => (
                            <li key={index}>
                                <button>
                                    {item}
                                </button>
                            </li>
                        ))
                    }
                </ul> */}
                <div></div>
                 {/* <Select
                        showSearch
                        size='large'
                        value={selectedCategory}
                        onChange={(value) => setSelectedCategory(value)}
                        defaultValue={categories?.[0]?.id}
                        placeholder="Select Category"
                        filterOption={(input, option) =>
                            String(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={
                            categories?.map((item: any) => ({
                                value: item?.id,
                                label: item?.name
                            }))
                        }
                        className='min-w-[200px]'
                    /> */}
                <div className='flex items-center gap-4'>
                    <button onClick={() => swiper?.slidePrev()}>
                        <ArrowBackIosIcon />
                    </button>
                    <button onClick={() => swiper?.slideNext()}>
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>
            <Swiper
                // slidesPerView={4}
                breakpoints={{
                    400: {
                        slidesPerView: 1,
                    },
                    700: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={30}
                className="mt-10 h-auto w-full"
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                {
                    products?.map((product: any, index: number) => (
                        <SwiperSlide key={index}>
                            <ProductCard data={product} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default TrendingProductContainer;