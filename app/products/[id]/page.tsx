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
import { Suspense, useEffect, useState } from 'react';
import ProductDetails from './_UI/ProductDetails';
import ProductComparison from './_UI/ProductComparison';
import CustomerReview from './_UI/CustomerReview';
import AllReviews from './_UI/AllReviews';
import FeaturedProduct from './_UI/FeaturedProduct';
import { products, ProductType } from '@/app/admin/products/data';
import { useQuery } from '@tanstack/react-query';
import fetcher, { api } from '@/Components/util/axios';
import axios from 'axios';
import { Spin } from 'antd';
import { PType } from '../_UI/ProductContainer';


const Page = ({ params }: { params: { id: string } }) => {
    const [swiper, setSwiper] = useState<any>(null);
    const [width, setWidth] = useState(0);
    // const product: ProductType = products.find(product => product._id === params.id) as ProductType
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])
    const { data, isLoading } = useQuery({
        queryKey: ['product-details', params.id],
        queryFn: async () => await axios.get(`https://dummyjson.com/products/${params.id}`)
    })
    const [selected, setSelected] = useState("");
    const product: PType = data?.data as any
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <Suspense fallback={<Spin size='large' />}>
            <div className='bg-[#F7F7F7]'>
                <Navbar />
                <PageTop title='Products details' />
                <div className="container mx-auto mt-8 px-4 lg:p-0">
                    <section className='flex gap-6 items-start'>
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
                                    className='lg:min-h-[500px] max-h-[500px] w-full h-full'
                                    spaceBetween={20}
                                >
                                    {
                                        product?.images?.map((image, index) => (
                                            <SwiperSlide key={index} className='h-[160px]'
                                            >
                                                <Image src={image} alt="login" width={148} height={161} className={"p-3 rounded-lg h-[161px] lg:max-w-[148px] max-w-[100px]"}
                                                    onClick={() => setSelected(image)}
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <div className='lg:min-w-[505px] w-full lg:w-[505px] lg:h-[550px] rounded-[10px]  flex items-center justify-center relative'>
                                <Image src={selected || product?.thumbnail} alt="login" width={422} height={400} className={" p-3 rounded-lg lg:w-[422px] h-full"} />
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
                            <ProductDetails
                                details={product}
                                price={product?.price} product={product} />
                        </div>
                    </section>
                    <div className="lg:hidden mt-8">
                        <ProductDetails price={product?.price} product={product} details={product} />
                    </div>
                </div>
                <ProductComparison product={product} price={product?.price} />
                <CustomerReview data={product} />
                <AllReviews data={product} />
                <FeaturedProduct data={product} />
                <Footer />
            </div>
        </Suspense>
    );
};

export default Page;