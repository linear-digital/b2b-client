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



const ShopCategory = () => {
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
                slidesPerView={4}
                spaceBetween={30}
                className="mt-10 h-[300px] "
                onSwiper={(swiper) => setSwiper(swiper)}
                modules={[Navigation, A11y]}
            >
                <SwiperSlide className='relative'>
                    <Image src={'/photos/image1.png'} alt="login" width={300} height={300} className={'h-full w-full object-cover'} />
                    <h4 className='absolute top-4 left-4 text-white px-1 bg-primary'>
                        Product Category

                    </h4>

                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={'/products/product-1.png'} alt="login" width={300} height={300} className={'h-full w-full object-cover'} />
                    <h4 className='absolute top-4 left-4 text-white px-1 bg-primary'>
                        Product Category
                    </h4>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={'/photos/image3.png'} alt="login" width={300} height={300} className={'h-full w-full object-cover'} />
                    <h4 className='absolute top-4 left-4 text-white px-1 bg-primary'>
                        Product Category
                    </h4>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={'/photos/image4.png'} alt="login" width={300} height={300} className={'h-full w-full object-cover'} />
                    <h4 className='absolute top-4 left-4 text-white px-1 bg-primary'>
                        Product Category
                    </h4>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={'/photos/image5.png'} alt="login" width={300} height={300} className={'h-full w-full object-cover'} />
                    <h4 className='absolute top-4 left-4 text-white px-1 bg-primary'>
                        Product Category
                    </h4>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={'/photos/image1.png'} alt="login" width={300} height={300} className={'h-full w-full object-cover'} />
                    <h4 className='absolute top-4 left-4 text-white px-1 bg-primary'>
                        Product Category

                    </h4>

                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={'/products/product-1.png'} alt="login" width={300} height={300} className={'h-full w-full object-cover'} />
                    <h4 className='absolute top-4 left-4 text-white px-1 bg-primary'>
                        Product Category
                    </h4>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={'/photos/image3.png'} alt="login" width={300} height={300} className={'h-full w-full object-cover'} />
                    <h4 className='absolute top-4 left-4 text-white px-1 bg-primary'>
                        Product Category
                    </h4>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={'/photos/image4.png'} alt="login" width={300} height={300} className={'h-full w-full object-cover'} />
                    <h4 className='absolute top-4 left-4 text-white px-1 bg-primary'>
                        Product Category
                    </h4>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src={'/photos/image5.png'} alt="login" width={300} height={300} className={'h-full w-full object-cover'} />
                    <h4 className='absolute top-4 left-4 text-white px-1 bg-primary'>
                        Product Category
                    </h4>
                </SwiperSlide>
            </Swiper>
            <div className="flex justify-center mt-10">
                <Link href={'/products'} className='text-white bg-primary px-7 py-3 rounded-lg hover:text-white bg-primary/90'>
                    View All
                </Link>
            </div>
        </div>
    );
};

export default ShopCategory;



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