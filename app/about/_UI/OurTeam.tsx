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



const OurTeam = () => {
    const swiperRef: any = useRef(null);
    const [swiper, setSwiper] = React.useState<any>(null);
    return (
        <div className='container mx-auto'>
            <h2 className='sec-title mt-4'>
                Shop by Category
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
                <SwiperNavButtons swiper={swiper} />
            </div>
            <Swiper
                ref={swiperRef}
                slidesPerView={3}
                spaceBetween={30}
                className="mt-10 h-auto"
                onSwiper={(swiper) => setSwiper(swiper)}
                modules={[Navigation, A11y]}
            >
                <SwiperSlide >
                    <div>
                        <Image src={'/images/Avatar/man-1.png'} alt="login" width={400} height={400} className={'h-full w-full object-cover'} />
                        <h2 className='text-[18px] font-medium mt-3'>
                            Miles   Flody
                        </h2>
                        <h5 className='text-[14px] text-[#898989]'>Manager</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div>
                        <Image src={'/images/Avatar/man-2.png'} alt="login" width={400} height={400} className={'h-full w-full object-cover'} />
                        <h2 className='text-[18px] font-medium mt-3'>
                            Jerome Bell
                        </h2>
                        <h5 className='text-[14px] text-[#898989]'>Coordinator</h5>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div>
                        <Image src={'/images/Avatar/man-3.png'} alt="login" width={400} height={400} className={'h-full w-full object-cover'} />
                        <h2 className='text-[18px] font-medium mt-3'>
                            Marvin McKinney
                        </h2>
                        <h5 className='text-[14px] text-[#898989]'>Marketing Coordinator</h5>
                    </div>
                </SwiperSlide>
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