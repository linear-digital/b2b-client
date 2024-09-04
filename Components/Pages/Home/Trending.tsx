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
import ProductCard from './ProductCard';


const Trending = () => {
    return (
        <div className='container '>
            <h2 className='messiri text-3xl mt-10'>
                Trending products
            </h2>
            <div className="flex items-center justify-between mt-8">
                <ul className='flex items-center gap-x-4 text-[#898989]'>
                    <li>
                        <button className='text-primary'>
                            All
                        </button>
                    </li>
                    <li>
                        <button>
                            Fashion
                        </button>
                    </li>
                    <li>
                        <button>
                            Home Appliances
                        </button>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button>
                        <ArrowBackIosIcon />
                    </button>
                    <button>
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                className="mt-10 h-auto"
            >
                <SwiperSlide className='relative'>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide className='relative'>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide className='relative'>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide className='relative'>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide className='relative'>
                   <ProductCard />
                </SwiperSlide>
                <SwiperSlide className='relative'>
                   <ProductCard />
                </SwiperSlide>
               
            </Swiper>
            <div className="flex justify-center mt-10">
                <Link href={'/shop'} className='text-white bg-primary px-7 py-3 rounded-lg hover:text-white bg-primary/90'>
                    View All
                </Link>
            </div>
        </div>
    );
};

export default Trending;