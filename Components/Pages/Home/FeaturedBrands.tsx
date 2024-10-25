
import fetcher, { fetcherSS } from '@/Components/util/axios';
import Image from 'next/image';
import React from 'react';
import BrandContainer from './_UI/BrandContainer';

const FeaturedBrands = async () => {

    const data: any = await fetcherSS({
        url: `/pages/search`,
        method: 'POST',
        body: {
            name: "Featured Brands"
        }
    })
    const brands = await fetcherSS({
        url: `/marchents`,
        method: 'GET',
    })
    return (
        <div className='container mx-auto mt-20 px-4 lg:px-0'>
            <h1 className='sec-title'>
                {data?.title}
            </h1>
            <p className='max-w-[749px] lg:text-base text-[14px] text-[#898989] mt-4'>
                {data?.desc}
            </p>
            <BrandContainer data={brands} />
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