'use client'
import Link from 'next/link';
import React, { useRef } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';



const OurTeam = () => {
    const { data } = useQuery({
        queryKey: ['Our Team'],
        queryFn: () => {
            return fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Our Team"
                }
            })
        },
    })
    const swiperRef: any = useRef(null);
    const [swiper, setSwiper] = React.useState<any>(null);
    return (
        <div className='container mx-auto px-4 lg:px-0'>
            <h2 className='sec-title mt-4'>
                {data?.title}
            </h2>
            <div className="lg:flex items-end justify-between mt-8">
                <p className='max-w-[749px] text-[#898989] lg:text-[18px] text-[14px] mb-3 lg:mb-0'>
                    {data?.desc}
                </p>
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
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={30}
                className="mt-10 h-auto"
                onSwiper={(swiper) => setSwiper(swiper)}
                modules={[Navigation, A11y]}
            >
                {
                    data?.others?.members?.map((item: any, index: number) => <SwiperSlide key={index}>
                        <SwiperSlide >
                            <div>
                                <Image src={item?.image} alt="login" width={400} height={400} className={'h-full w-full object-cover'} />
                                <h2 className='text-[18px] font-medium mt-3'>
                                    {item?.name}
                                </h2>
                                <h5 className='text-[14px] text-[#898989]'>{item?.position}</h5>
                            </div>
                        </SwiperSlide>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default OurTeam;



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