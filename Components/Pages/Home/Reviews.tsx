'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// Import Swiper styles
// import 'swiper/swiper-bundle.min.css';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Avatar } from 'antd';

// Import required modules


const ReviewSlider = () => {

    return (
        <section className='container mx-auto mt-20 review px-4 lg:px-0' >
            <h1 className='sec-title'>
                What Our Clients Say
            </h1>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}

                pagination={{ clickable: true }}
                modules={[Navigation, A11y]}
                className='w-full lg:mt-10 '
            >
                <SwiperSlide className='w-[1000px]'>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide className='w-[1000px]'>
                    <ReviewCard />
                </SwiperSlide>
                <SwiperSlide className='w-[1000px]'>
                    <ReviewCard />
                </SwiperSlide>
                {/* Add more slides as needed */}

            </Swiper>

        </section>
    );
};

export default ReviewSlider;


const ReviewCard = () => {
    return <div className='relative max-w-[1000px] h-[400px] flex items-center'>
        <div className="p-8 w-[720px]  bg-white rounded-lg shadow-lg z-10 ">
            <div className="">
                <div className="">
                    <Image src={'/icons/Quote.png'} alt="quote" width={90} height={90} />
                </div>
                <p className="text-gray-500 lg:text-[18px] text-[14px] mt-4">
                    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable."
                </p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center mt-4 gap-x-3">
                    <Avatar size={45} />
                    <div className="lg:mt-4">
                        <h3 className="lg:text-lg text-[16px] font-bold">Joe Weeks</h3>
                        <p className="text-sm text-gray-400">Customer</p>
                    </div>
                </div>
                <SwiperNavButtons />
            </div>
        </div>
        <Image src={'/images/Avatar/avater.png'} alt="avater" width={400} height={400}
            className='absolute bottom-0 right-0 z-[-1] lg:block hidden'
        />
    </div>
}


export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className='flex gap-x-5 swiper-nav-btns'>
            <button onClick={() => swiper?.slidePrev()}>
                <ArrowBackIosIcon />
            </button>
            <button onClick={() => swiper?.slideNext()}>
                <ArrowForwardIosIcon />
            </button>
        </div>
    );
};
