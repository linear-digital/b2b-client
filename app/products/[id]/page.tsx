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
import { useEffect, useState } from 'react';
import ProductDetails from './_UI/ProductDetails';
import ProductComparison from './_UI/ProductComparison';
import CustomerReview from './_UI/CustomerReview';
import AllReviews from './_UI/AllReviews';
import FeaturedProduct from './_UI/FeaturedProduct';


const Page = () => {
    const [swiper, setSwiper] = useState<any>(null);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar />
            <PageTop title='Products details' />
            <div className="container mx-auto mt-8 px-4 lg:p-0">
                <section className='flex gap-6 items-center'>
                    <div className="flex lg:flex-row flex-col-reverse items-center gap-5">
                        <div className="lg:w-[190px]"
                            style={{
                                maxWidth: width - 30
                            }}
                        >
                            <Swiper
                                onSwiper={(swiper) => setSwiper(swiper)}
                                direction={width < 768 ? 'horizontal' : 'vertical'}
                                slidesPerView={3}
                                className='lg:max-h-[500px] w-full'
                                spaceBetween={20}
                            >
                                <SwiperSlide>
                                    <Image src={'/products/watch.png'} alt="login" width={148} height={161} className={"bg-[#E3E3E3] p-3 rounded-lg lg:max-w-[148px] max-w-[100px]"} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={'/products/watch.png'} alt="login" width={148} height={161} className={"bg-[#E3E3E3] p-3 rounded-lg lg:max-w-[148px] max-w-[100px]"} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={'/products/watch.png'} alt="login" width={148} height={161} className={"bg-[#E3E3E3] p-3 rounded-lg lg:max-w-[148px] max-w-[100px]"} />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={'/products/watch.png'} alt="login" width={148} height={161} className={"bg-[#E3E3E3] p-3 rounded-lg lg:max-w-[148px] max-w-[100px]"} />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className='lg:min-w-[505px] w-full lg:w-[505px] lg:h-[550px] rounded-[10px] bg-[#E3E3E3] flex items-center justify-center relative'>
                            <Image src={'/products/watch.png'} alt="login" width={422} height={460} className={"bg-[#E3E3E3] p-3 rounded-lg lg:w-[422px] full"} />
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
                    <div className="hidden lg:block">
                        <ProductDetails />
                    </div>
                </section>
                <div className="lg:hidden mt-8">
                    <ProductDetails />
                </div>
            </div>
            <ProductComparison />
            {/*   <CustomerReview />
            <AllReviews />
            <FeaturedProduct /> */}
            <Footer />
        </div>
    );
};

export default Page;