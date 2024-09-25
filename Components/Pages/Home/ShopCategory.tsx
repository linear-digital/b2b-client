'use client'
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';
import axios from 'axios';
import { PType } from '@/app/products/_UI/ProductContainer';
import { useRouter } from 'next/navigation';



const ShopCategory = () => {
    const swiperRef: any = useRef(null);
    const [swiper, setSwiper] = React.useState<any>(null);
    const { data } = useQuery({
        queryKey: ['Shop by Category'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Shop by Category"
                }
            })
            return res
        },
    })
    const [cateData, setCateData] = React.useState<any>([])

    const { data: categories , isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get('https://dummyjson.com/products/categories')
            return res.data
        },
    })

    useEffect(() => {
        if(!isLoading){
           (
            async () => {
                categories?.map((item: any, index: number) => {
                    const d = axios.get(`https://dummyjson.com/products/category/${item?.slug}?limit=1`)
                    d.then((res: any) => {
                        setCateData((prev: any) => [...prev, res.data?.products[0]])
                    })
                })

            }
           )()
        }
    },[categories, isLoading])
    const router = useRouter()
    return (
        <div className='container mx-auto px-4 lg:px-0'>
            <h2 className='sec-title  mt-4'>
                {data?.title}
            </h2>
            <div className="flex items-center justify-between mt-8">
                <ul className='flex items-center gap-x-4 text-[#898989] lg:text-base text-sm'>
                    {
                        data?.others?.category?.map((item: any, index: number) => (
                            <li key={index}>
                                <button>
                                    {item}
                                </button>
                            </li>
                        ))
                    }
                </ul>
                <SwiperNavButtons swiper={swiper} />
            </div>
            <Swiper
                ref={swiperRef}
                // slidesPerView={4}
                breakpoints={{
                    700: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                }}
                spaceBetween={30}
                className="mt-10 h-[300px] "
                onSwiper={(swiper) => setSwiper(swiper)}
                modules={[Navigation, A11y]}
            >
                {
                    cateData?.map((item: PType, index: number) => (
                        <SwiperSlide key={index} className='relative cursor-pointer'
                        onClick={() => router.push(`/products?category=${item?.category}`)}
                        >
                            <Image src={item?.thumbnail} alt="login" width={300} height={300} className={'h-full w-full object-cover bg-white rounded-lg'} />
                            <h4 className='absolute top-4 left-4 capitalize text-white px-1 bg-primary'>
                                {item?.category}
                            </h4>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="flex justify-center lg:mt-10 mt-7">
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