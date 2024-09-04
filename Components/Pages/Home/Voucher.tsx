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
import VoucherCard from './VoucherCard';


const Vouchers = () => {
    return (
        <div className='container '>
            <div className="flex justify-between mt-16">
                <h2 className='messiri text-3xl mt-4'>
                    Exclusive Vouchers and Discounts
                </h2>
                <div className='flex items-center gap-4'>
                    <button>
                        <ArrowBackIosIcon />
                    </button>
                    <button>
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between mt-8">
                <ul className='flex items-center gap-x-4 text-[#898989]'>
                    <li>
                        <button className='text-primary'>
                            All Vouchers
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
                <select className='bg-transparent outline-none border-none'>
                    <option value="">Sort By</option>
                    <option value="featured">Featured</option>
                    <option value="popularity">Popularity</option>
                    <option value="latest">Latest</option>
                    <option value="upcomming">Upcomming</option>
                </select>
            </div>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                className="mt-10 h-[350px]"
            >
                <SwiperSlide>
                    <VoucherCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VoucherCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VoucherCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VoucherCard />
                </SwiperSlide>
                <SwiperSlide>
                    <VoucherCard />
                </SwiperSlide>
            </Swiper>
            <div className="flex justify-center mt-5">
                <Link href={'/shop'} className='text-white bg-primary px-7 py-3 rounded-lg hover:text-white bg-primary/90'>
                    View All
                </Link>
            </div>
        </div>
    );
};

export default Vouchers;