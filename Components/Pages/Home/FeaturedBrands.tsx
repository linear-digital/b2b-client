import fetcher from '@/Components/util/axios';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

const FeaturedBrands = () => {

    const { data } = useQuery({
        queryKey: ['FeaturedBrands'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Featured Brands"
                }
            })
            return res
        },
        refetchOnWindowFocus: false
    })
    return (
        <div className='container mx-auto mt-20 px-4 lg:px-0'>
            <h1 className='sec-title'>
                {data?.title}
            </h1>
            <p className='max-w-[749px] lg:text-base text-[14px] text-[#898989] mt-4'>
                {data?.desc}
            </p>
            <div className="lg:grid hidden mt-10 lg:grid-cols-4 grid-cols-2">
                {
                    data?.images?.map((logo: string, index: number) => (
                        <div className={`p-5 ${index < 3 ? "border-b border-r" : index > 3 && index < 7 ? "border-r" : index === 3 ? "border-b" : ""}`} key={index}>
                            <Image src={logo} alt="logo" width={240} height={40} className={''} />
                        </div>
                    ))
                }
            </div>
            <div className="grid lg:hidden mt-10  grid-cols-2">
                {
                   data?.images?.map((logo: string, index: number) => (
                        <div className={`p-5 ${index < 6 ? `border-b ${(index !== 1 && index !== 5 && index !== 3) && "border-r"}` : `${index !== 7 && "border-r"}`}`} key={index}>
                            <Image src={logo} alt="logo" width={240} height={40} className={''} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedBrands;