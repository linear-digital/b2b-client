'use client'
import Link from 'next/link';
import React, { useRef } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Navigation } from 'swiper/modules';
import Image from 'next/image';
import ProductCard from '../../_UI/ProductCard';



const FeaturedProduct = () => {
    const swiperRef: any = useRef(null);
    const [swiper, setSwiper] = React.useState<any>(null);
    return (
        <div className='container mx-auto'>
            <div className="flex items-end justify-between">
                <div>
                    <h2 className='sec-title mt-4'>
                        Featured Products
                    </h2>
                    <p className='text-[#898989] text-[18px] max-w-[749px]'>
                        Discover our handpicked selection of top-rated products, showcasing the best in quality and value. Explore trending items across all categories.
                    </p>
                </div>
                <SwiperNavButtons swiper={swiper} />
            </div>
            <Swiper
                ref={swiperRef}
                slidesPerView={4}
                spaceBetween={30}
                className="mt-10 h-auto"
                onSwiper={(swiper) => setSwiper(swiper)}
                modules={[Navigation, A11y]}
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

export default FeaturedProduct;



export const SwiperNavButtons = ({ swiper }: any) => {
    // console.log(swiper);
    return (
        <div className='flex gap-x-5 '>
            <button onClick={() => swiper?.slidePrev()}>
                <ArrowBackIosIcon />
            </button>
            <button onClick={() => swiper?.slideNext()}>
                <ArrowForwardIosIcon />
            </button>
        </div>
    );
};