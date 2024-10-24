
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
import fetcher, { fetcherSS } from '@/Components/util/axios';
import axios from 'axios';
import { PType } from '@/app/products/_UI/ProductContainer';
import { useRouter } from 'next/navigation';
import { Select, Spin } from 'antd';
import { ProductType } from '@/Components/util/type';



const ShopCategory = () => {
    const swiperRef: any = useRef(null);
    const [swiper, setSwiper] = React.useState<any>(null);
    const [selectedCategory, setSelectedCategory] = React.useState<string>('')
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
    const { data: response, isLoading: isLoadingProduct } = useQuery({
        queryKey: ['products', selectedCategory],
        queryFn: async () => {
            const data = await fetcherSS({
                url: `/product/category/${selectedCategory}?pageSize=50&sortBy=performanceScore&fieldsAlias=all`,
                method: 'GET',
            })
            return data
        }
    })
    const products = response?.offers as ProductType[]
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetcherSS({
                url: '/product/category'
            })
            return res
        },
    })
    const router = useRouter()
    useEffect(() => {
        if (categories) {
            setSelectedCategory(categories[0]?.id)
        }
    }, [categories])
    if (isLoading || isLoadingProduct) {
        return <div className="flex w-full py-10 justify-center">
            <Spin size='large' />
        </div>
    }
    return (
        <div className='container mx-auto px-4 lg:px-0'>
            <h2 className='sec-title  mt-4'>
                {data?.title}
            </h2>
            <div className="flex items-center justify-between mt-8">
                {/* <ul className='flex items-center gap-x-4 text-[#898989] lg:text-base text-sm'>
                    {
                        categories?.slice(0, 4).map((item: any, index: number) => (
                            <li key={index}>
                                <button>
                                    {item?.name}
                                </button>
                            </li>
                        ))
                    }
                </ul> */}
                <div className="hidden items-center lg:flex">
                    {/* <h3 className='font-medium'>
                        Select Category:
                    </h3> */}
                    {/* <select className='bg-white py-2 px-2 rounded-lg ml-2 text-sm'
                    >
                       {
                           categories?.map((item: any, index: number) => (
                               <option key={index} value={item?.id}>
                                   {item?.name}
                               </option>
                           ))
                       }
                    </select> */}
                    <Select
                        showSearch
                        size='large'
                        value={selectedCategory}
                        onChange={(value) => setSelectedCategory(value)}
                        defaultValue={categories?.[0]?.id}
                        placeholder="Select Category"
                        filterOption={(input, option) =>
                            String(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={
                            categories?.map((item: any) => ({
                                value: item?.id,
                                label: item?.name
                            }))
                        }
                        className='min-w-[200px]'
                    />
                </div>
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
                className="mt-10 h-auto"
                onSwiper={(swiper) => setSwiper(swiper)}
                modules={[Navigation, A11y]}
            >
                {
                    products?.map((item: ProductType, index: number) => (
                        <SwiperSlide key={index} className='relative cursor-pointer'
                            onClick={() => router.push(`/products?category=${item?.category.id}`)}
                        >
                            <Image src={item?.images[0].zoomUrl} alt="Product" width={720} height={1000} className={'h-[380px] min-w-[300px] w-full object-cover bg-white rounded-lg '} />
                            <h4 className='absolute top-4 left-4 capitalize text-white px-1 bg-primary'>
                                {item?.category.name}
                            </h4>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="flex justify-center lg:mt-10 mt-7">
                <Link href={`/products?category=${selectedCategory}`} className='text-white bg-primary px-7 py-3 rounded-lg hover:text-white bg-primary/90'>
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