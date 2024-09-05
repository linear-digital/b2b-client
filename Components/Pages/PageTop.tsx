
import Image from 'next/image';
import React from 'react';

const PageTop = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className='h-[313px] bg-[#EEEEEE] w-full flex flex-col justify-center items-center overflow-hidden'>
            <div className="container flex flex-col items-center justify-center relative h-full">
                <h1 className='sec-title text-center'>
                    {title}
                </h1>
                <p className='sec-desc text-center mt-2'>
                    {description}
                </p>
                <Image src={'/images/page-top/left.png'} alt="left" width={200} height={250} className={'absolute top-0 left-0'} />
                <Image src={'/images/page-top/right.png'} alt="right" width={212} height={301} className={'absolute top-0 right-0  h-[300px]'} />
            </div>

        </div>
    );
};

export default PageTop;