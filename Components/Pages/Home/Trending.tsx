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
// import ProductCard from './ProductCard';


const Trending = () => {
    const [swiper, setSwiper] = React.useState<any>(null);
    return (
        <div className='container mx-auto px-4 lg:px-0'>
            <h2 className='sec-title mt-10'>
                Trending products
            </h2>
            <div className="flex items-center justify-between mt-8">
                <ul className='flex items-center gap-x-4 text-[#898989] lg:text-base text-sm'>
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
                Explore All Trends
                </Link>
            </div>
        </div>
    );
};

export default Trending;