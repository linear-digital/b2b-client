'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandContainer({ data }: { data: any }) {
    return (
        <div className='mt-16'>
            <Swiper
                breakpoints={{
                    700: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                }}
                
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Autoplay]}
                className="mySwiper"
            >
                {
                    data?.slice(0, data?.length / 2).map((brand: any, index: number) => (
                        <SwiperSlide key={index}>
                            <Link  href={`/products?merchantId=${brand?.id}`} className={`p-5 bg-white flex h-[100px] justify-center items-start w-full`}>
                                <Image
                                    src={brand?.logo}
                                    alt={brand?.name} width={240} height={240}
                                    className={'object-contain w-auto min-w-[100px] max-h-[80px] '}
                                />
                            </Link>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                breakpoints={{
                    700: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                }}
                modules={[Grid, Autoplay]}
                className="mt-4"
            >
                {
                    data?.slice(data?.length / 2).map((brand: any, index: number) => (
                        <SwiperSlide key={index}>
                            <Link  href={`/products?merchantId=${brand?.id}`} className={`p-5 bg-white flex h-[100px] justify-center items-start w-full`}>
                                <Image
                                    src={brand?.logo}
                                    alt={brand?.name} width={240} height={240}
                                    className={'object-contain w-auto min-w-[100px] max-h-[80px] '}
                                />
                            </Link>

                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
