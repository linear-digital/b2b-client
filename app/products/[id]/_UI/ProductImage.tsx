'use client'

import { ProductType } from '@/Components/util/type';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Image as AntdImage } from 'antd'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ShareAltOutlined } from '@ant-design/icons';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';


const ProductImage = ({ product }: { product: ProductType }) => {
    const { currentUser } = useSelector((state: RootState) => state.user)
    const [swiper, setSwiper] = useState<any>(null);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])
    const copyToClipboard = () => {
        const url = `${window.location.origin}/redirect?pid=${product.offerId}&marchantId=${product.merchant.id}`
        navigator.clipboard.writeText(url);
        toast.success('Product redirect link copied to clipboard')
    }
    console.log(product);
    const [selected, setSelected] = useState("");
    return (
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
                            <SwiperSlide key={index} className='h-[160px] min-w-[100px]'
                            >
                                <Image src={image.url} alt="Product Image" width={148} height={161} className={"p-3 rounded-lg h-[161px] lg:max-w-[148px] max-w-[100px] w-full bg-white object-contain"}
                                    onClick={() => setSelected(image.zoomUrl)}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className='lg:min-w-[505px] p-5 w-full lg:w-[505px] lg:h-[550px] rounded-[10px]  flex items-center justify-center relative bg-white '>
            <button className='absolute top-4 right-4 '
                        onClick={copyToClipboard}
                    >
                        <ShareAltOutlined className='text-2xl hover:text-primary' />
                    </button>
                <AntdImage src={selected || product?.images[0].zoomUrl} alt="Product Image" className={" p-3 rounded-lg lg:w-[422px] max-h-[422px] object-contain"} />
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
    );
};

export default ProductImage;