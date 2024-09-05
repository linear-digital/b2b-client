'use client';
import PageTop from '../_UI/PageTop';
import Image from 'next/image';
import Footer from '@/Components/Bars/Footer/Footer';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from '@/Components/Bars/Navbar';
import { useState } from 'react';
import ProductDetails from './_UI/ProductDetails';
import ProductComparison from './_UI/ProductComparison';
import CustomerReview from './_UI/CustomerReview';
import AllReviews from './_UI/AllReviews';
import FeaturedProduct from './_UI/FeaturedProduct';


const Page = () => {
    const [swiper, setSwiper] = useState<any>(null);
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar />
            <PageTop title='Products details' />
            <div className="container mx-auto mt-8">
                <section className='flex gap-6 items-center'>
                    <div className="flex items-center">
                        <div className="flex flex-col w-[190px] gap-y-3">
                            <Image src={'/products/watch.png'} alt="login" width={148} height={161} className={"bg-[#E3E3E3] p-3 rounded-lg"} />
                            <Image src={'/products/watch.png'} alt="login" width={148} height={161} className={"bg-[#E3E3E3] p-3 rounded-lg"} />
                            <Image src={'/products/watch.png'} alt="login" width={148} height={161} className={"bg-[#E3E3E3] p-3 rounded-lg"} />
                        </div>
                        <div className='min-w-[505px] w-[505px] h-[550px] rounded-[10px] bg-[#E3E3E3] flex items-center justify-center relative'>
                            <Swiper
                                freeMode={true}
                                spaceBetween={30}
                                className="h-[460px] w-[422px]"
                                onSwiper={(swiper) => setSwiper(swiper)}
                            >
                                <SwiperSlide>
                                    <Image src={'/products/watch.png'} alt="login" width={422} height={460} className={"bg-[#E3E3E3] p-3 rounded-lg"} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={'/products/watch.png'} alt="login" width={422} height={460} className={"bg-[#E3E3E3] p-3 rounded-lg"} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={'/products/watch.png'} alt="login" width={422} height={460} className={"bg-[#E3E3E3] p-3 rounded-lg"} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={'/products/watch.png'} alt="login" width={422} height={460} className={"bg-[#E3E3E3] p-3 rounded-lg"} />
                                </SwiperSlide>
                            </Swiper>
                            <button
                                className='absolute top-1/2 left-3 -translate-y-1/2 '
                                onClick={() => swiper?.slidePrev()}>
                                <ArrowBackIosIcon />
                            </button>
                            <button
                                className='absolute top-1/2 right-3 -translate-y-1/2'
                                onClick={() => swiper?.slideNext()}>
                                <ArrowForwardIosIcon />
                            </button>
                        </div>
                    </div>
                    <ProductDetails />
                </section>
            </div>
            <ProductComparison />
            <CustomerReview />
            <AllReviews />
            <FeaturedProduct />
            <Footer />
        </div>
    );
};

export default Page;