import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

const HeroArea = () => {
    return (
        <div className='container mx-auto py-14'>
            <h1 className='text-center messiri text-[48px] text-black font-semibold'>
                Find the Best Deals on the Latest <br />
                 Tech, Fashion, and More!
            </h1>
            <p className='text-center text-lg mt-4 text-[#898989]'>Compare products from top merchants and save big.</p>
            <div className="flex justify-center mt-8">
                <button className='bg-primary text-white px-8 py-4 rounded-xl' >
                    Shop Now 
                </button>
            </div>
            <div className="grid grid-cols-12 max-h-[480px] grid-rows-2 gap-5 mt-10">
                <div className="col-span-4 row-span-2">
                    <Image src={'/photos/image1.png'} alt="login" width={700} height={1000} className={'h-full w-full'}/>
                </div>
                <div className="col-span-4 row-span-1">
                    <Image src={'/photos/image2.png'} alt="login" width={700} height={1000} className={'h-full w-full'}/>
                </div>
                <div className="col-span-4 row-span-1">
                    <Image src={'/photos/image3.png'} alt="login" width={700} height={1000} className={'h-full w-full'}/>
                </div>
                <div className="col-span-4 row-span-1">
                    <Image src={'/photos/image4.png'} alt="login" width={700} height={1000} className={'h-full w-full'}/>
                </div>
                <div className="col-span-4 row-span-1">
                    <Image src={'/photos/image5.png'} alt="login" width={700} height={1000} className={'h-full w-full'}/>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;