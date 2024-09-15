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
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';
import { Spin } from 'antd';
import { VoucherType } from '@/Components/util/type';


const Vouchers = () => {
    const { data: alldata, isLoading } = useQuery({
        queryKey: ['vouchers'],
        queryFn: async () => {
            const vouchers = await fetcher({
                url: '/vouchers/all',
                method: 'GET'
            })
            const section = await fetcher({
                url: '/pages/search',
                method: 'POST',
                body: {
                    name: 'Vouchers and Discounts'
                }
            })
            return { vouchers, section }
        }
    })
    const data = alldata?.vouchers
    const section = alldata?.section
    const [swiper, setSwiper] = React.useState<any>(null);
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div className='container mx-auto lg:px-0 px-4'>
            <div className="flex justify-between mt-16">
                <h2 className='sec-title mt-4'>
                    {section?.title}
                </h2>
                <div className='items-center gap-4 lg:flex hidden'>
                    <button onClick={() => swiper?.slidePrev()}>
                        <ArrowBackIosIcon />
                    </button>
                    <button onClick={() => swiper?.slideNext()}>
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between lg:mt-8 mt-5 lg:flex-row flex-col ">
                <ul className='flex items-center gap-x-4 text-[#898989] lg:text-base text-sm'>
                    {
                        section?.others?.category?.map((item: any, index: number) => (
                            <li key={index}>
                                <button>
                                    {item}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <div className="flex items-center justify-between w-full lg:w-auto mt-7">
                    <select className='bg-transparent outline-none border-none'>
                        <option value="">Sort By</option>
                        <option value="featured">Featured</option>
                        <option value="popularity">Popularity</option>
                        <option value="latest">Latest</option>
                        <option value="upcomming">Upcomming</option>
                    </select>
                    <div className='items-center gap-4 flex lg:hidden'>
                        <button onClick={() => swiper?.slidePrev()}>
                            <ArrowBackIosIcon />
                        </button>
                        <button onClick={() => swiper?.slideNext()}>
                            <ArrowForwardIosIcon />
                        </button>
                    </div>

                </div>

            </div>
            <Swiper
                breakpoints={{
                    1000: {
                        slidesPerView: 1
                    },
                    1200: {
                        slidesPerView: 2
                    }
                }}
                spaceBetween={30}
                className="mt-10 h-auto"
                onSwiper={(swiper) => setSwiper(swiper)}
            >
                {
                    data?.data?.map((voucher: VoucherType) => (
                        <SwiperSlide key={voucher._id}>
                            <VoucherCard voucher={voucher} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="flex justify-center mt-5 lg:mt-10">
                <Link href={'/shop'} className='text-white bg-primary px-7 py-3 rounded-lg hover:text-white bg-primary/90'>
                    View All
                </Link>
            </div>
        </div>
    );
};

export default Vouchers;