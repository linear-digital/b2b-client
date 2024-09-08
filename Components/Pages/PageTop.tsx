
import Image from 'next/image';
import React from 'react';

const PageTop = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className='lg:h-[313px] h-[240px] bg-[#EEEEEE] w-full flex flex-col justify-center items-center overflow-hidden'>
            <div className="container flex flex-col items-center justify-center relative h-full">
                <h1 className='sec-title text-center'>
                    {title}
                </h1>
                <p className='sec-desc text-center mt-2'>
                    {description}
                </p>
                <Image src={'/images/page-top/left.png'} alt="left" width={200} height={250} className={'absolute top-0 left-0 hidden lg:block'} />
                <Image src={'/images/page-top/right.png'} alt="right" width={212} height={301} className={'absolute top-0 right-0  h-[300px] hidden lg:block'} />
            </div>

        </div>
    );
};

export default PageTop;