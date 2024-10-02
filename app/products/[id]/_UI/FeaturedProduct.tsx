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
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import { PType } from '../../_UI/ProductContainer';



const FeaturedProduct = ({data: pr}: {data: PType}) => {
    const swiperRef: any = useRef(null);
    const [swiper, setSwiper] = React.useState<any>(null);
    const { data: products, isLoading } = useQuery({
        queryKey: ['products-featured', ],
        queryFn: async () => {
            const data = await axios.get(`https://dummyjson.com/products/category/${pr.category}`)
            return data.data
        }
    })

    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div className='container mx-auto px-4 lg:px-0'>
            <div className="flex items-end justify-between">
                <div>
                    <h2 className='sec-title mt-4'>
                        Featured Products
                    </h2>
                    <p className='text-[#898989] text-[14px] lg:text-[18px] max-w-[749px] '>
                        Discover our handpicked selection of top-rated products, showcasing the best in quality and value. Explore trending items across all categories.
                    </p>
                </div>
                <SwiperNavButtons swiper={swiper} />
            </div>
            <Swiper
                ref={swiperRef}
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
                className="mt-10 h-auto"
                onSwiper={(swiper) => setSwiper(swiper)}
                modules={[Navigation, A11y]}
            >
                {
                    products?.products?.map((product: any) => (
                        <SwiperSlide key={product.id} className='relative'>
                            <ProductCard data={product} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="flex justify-center mt-10">
                <Link href={'/products'} className='text-white bg-primary px-7 py-3 rounded-lg hover:text-white bg-primary/90'>
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