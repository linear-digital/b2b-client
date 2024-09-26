'use client'
import React, { useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// Import Swiper styles
// import 'swiper/swiper-bundle.min.css';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Avatar } from 'antd';

// Import required modules
const reviews = [
    {
        name: "Alice Johnson",
        text: "I love the ease of use of this platform. It's very user-friendly and efficient. The shipping options are great. We always receive our orders on time. The pricing is very competitive. We've saved a lot of money by using this platform.",
        image: "/man/1.png"
    },
    {
        name: "Bob Smith",
        text: "The customer support team is incredibly helpful. They always respond promptly to our inquiries and resolve our issues efficiently. The product quality is excellent. We've never had any issues with our orders. The website is easy to navigate. We can find what we need quickly and easily.",
        image: "/man/2.png"
    },
    {
        name: "Charlie Brown",
        text: "The platform is very reliable. We've never had any technical issues. The integration with our existing systems was seamless. It was a breeze to set up. We've been using this platform for years and we've always been satisfied with the service.",
        image: "/man/3.png"
    },
    {
        name: "David Jones",
        text: "Excellent platform for our business needs. The user interface is intuitive and the product catalog is comprehensive. The customer support team is incredibly helpful. They always respond promptly to our inquiries and resolve our issues efficiently.",
        image: "/man/4.jpeg"
    },
    {
        name: "Emily Williams",
        text: "The platform is very reliable. We've never had any technical issues. The integration with our existing systems was seamless. It was a breeze to set up. We've been using this platform for years and we've always been satisfied with the service.",
        image: "/man/5.webp"
    },
    {
        name: "Frank Thomas",
        text: "The customer support team is incredibly helpful. They always respond promptly to our inquiries and resolve our issues efficiently. The product quality is excellent. We've never had any issues with our orders. The website is easy to navigate. We can find what we need quickly and easily.",
        image: "/man/6.jpeg"
    },
    {
        name: "Grace Miller",
        text: "Excellent platform for our business needs. The user interface is intuitive and the product catalog is comprehensive. The customer support team is incredibly helpful. They always respond promptly to our inquiries and resolve our issues efficiently.",
        image: "/man/7.png"
    },
    {
        name: "Henry Baker",
        text: "The customer support team is incredibly helpful. They always respond promptly to our inquiries and resolve our issues efficiently. The product quality is excellent. We've never had any issues with our orders. The website is easy to navigate. We can find what we need quickly and easily.",
        image: "/man/8.png"
    },
    {
        name: "Isabella Carter",
        text: "Excellent platform for our business needs. The user interface is intuitive and the product catalog is comprehensive. The customer support team is incredibly helpful. They always respond promptly to our inquiries and resolve our issues efficiently.",
        image: "/man/9.png"
    },
    {
        name: "Jack Davis",
        text: "The customer support team is incredibly helpful. They always respond promptly to our inquiries and resolve our issues efficiently. The product quality is excellent. We've never had any issues with our orders. The website is easy to navigate. We can find what we need quickly and easily.",
        image: "/man/10.jpeg"
    }
];

const ReviewSlider = () => {

    return (
        <section className='container mx-auto mt-20 review px-4 lg:px-0' >
            <h1 className='sec-title'>
                What Our Clients Say
            </h1>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}

                pagination={{ clickable: true }}
                modules={[Navigation, A11y]}
                className='w-full lg:mt-10 '
            >
                {
                    reviews.map((review, index) => (
                        <SwiperSlide className='w-[1000px]' key={index}>
                            <ReviewCard data={review} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </section>
    );
};

export default ReviewSlider;


const ReviewCard = ({ data }: { data: any }) => {
    return <div className='relative max-w-[1000px] h-[400px] flex items-center'>
        <div className="p-8 w-[720px]  bg-white rounded-lg shadow-lg z-10 ">
            <div className="">
                <div className="">
                    <Image src={'/icons/Quote.png'} alt="quote" width={90} height={90} />
                </div>
                <p className="text-gray-500 lg:text-[18px] text-[14px] mt-4">
                    "{data?.text}"
                </p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center mt-4 gap-x-3">
                    <Avatar size={45} />
                    <div className="lg:mt-4">
                        <h3 className="lg:text-lg text-[16px] font-bold">{data?.name}</h3>
                        <p className="text-sm text-gray-400">Customer</p>
                    </div>
                </div>
                <SwiperNavButtons />
            </div>
        </div>
        <Image src={data?.image} alt="avater" width={400} height={400}
            className='absolute bottom-0 right-0 z-[-1] lg:block hidden object-cover h-[400px] w-[400px] rounded-lg bg-white'
        />
    </div>
}


export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
        <div className='flex gap-x-5 swiper-nav-btns'>
            <button onClick={() => swiper?.slidePrev()}>
                <ArrowBackIosIcon />
            </button>
            <button onClick={() => swiper?.slideNext()}>
                <ArrowForwardIosIcon />
            </button>
        </div>
    );
};
