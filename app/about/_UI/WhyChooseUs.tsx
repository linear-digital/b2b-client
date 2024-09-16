import fetcher from '@/Components/util/axios';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
    const { data } = useQuery({
        queryKey: ['Why_Choose_Us'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Why_Choose_Us"
                }
            })
            return res
        },
    })
    return (
        <div className='min-h-[450px] bg-[#8E9E84] py-10 flex flex-col justify-center px-4 lg:px-0'>
            <div className="container mx-auto">
                <h1 className='sec-title text-white'>
                    {data?.title}
                </h1>
                <div className="grid lg:grid-cols-3 gap-5 mt-14">
                    {data?.others?.options?.map((item: any, index: number) => <ItemCard data={item} key={index} />)}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

const ItemCard = ({ data }: { data: { image: string, title: string, description: string } }) => {
    return <div>
        <Image src={data.image} alt="login" width={80} height={80} />
        <h2 className='text-[20px] font-semibold text-white mt-5'>{data.title}</h2>
        <p className='text-white text-[16px] mt-1 max-w-[400px]'>{data.description}</p>
    </div>
}