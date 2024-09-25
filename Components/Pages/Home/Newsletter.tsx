'use client'
import fetcher from '@/Components/util/axios';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

const Newsletter = () => {
    const { data } = useQuery({
        queryKey: ['newsletter'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "newsletter"
                }
            })
            return res
        },
    })
    return (
        <div className='container lg:h-[399px]  lg:bg-[#E3E3E6] mx-auto mt-[150px] relative flex flex-col justify-center rounded-lg'>
            <div className='lg:px-10 px-5 mx-4 bg-[#E3E3E6] lg:bg-transparent  pb-10 lg:pb-0 rounded-lg'>
                <div className='z-10'>
                    <Image src={'/images/chair.png'} width={488} height={535} alt="chair" className='mt-[-150px] lg:hidden' />
                    <h2 className='sec-title leading-[60px] mt-10'>
                      {data?.title}
                    </h2>
                    <p className='max-w-[505px] mt-2 text-[#898989] lg:text-base text-[14px]'>
                        {data?.desc}
                    </p>
                    <div className="flex lg:w-[386px] items-center w-full mt-10 h-[55px]">
                        <input type="text" placeholder='Enter your email' className='w-full h-full border border-none rounded-l-lg px-4 py-2 outline-none' />
                        <button className='bg-primary text-white rounded-r-lg px-4 py-2 h-full'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <Image src={'/images/chair.png'} width={488} height={535} alt="chair" className='absolute bottom-0 right-10 z-0 lg:block hidden' />
        </div>
    );
};

export default Newsletter;