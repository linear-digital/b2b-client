
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PageTop = ({ title }: { title: string }) => {
    const items = [{ name: "Home", path: "/" }, { name: "Profile", path: "/profile" }, { name: "Account Settings", path: "/settings" }];
    return (
        <div className='lg:h-[250px] h-[133px] bg-[#EEEEEE] w-full flex flex-col justify-center items-center overflow-hidden'>
            <div className="container flex flex-col items-center justify-center relative h-full">
                <h1 className='sec-title text-center'>
                    {title}
                </h1>
                {/* <p className='sec-desc text-center mt-2'>
                    {description}
                </p> */}
                <div className='flex lg:text-base text-sm justify-center gap-x-4 mt-4'>
                    {
                        items.map((item, index) => (
                            <div key={index} className='flex items-center gap-x-3'>
                                <Link href={item.path ? item.path : "#"} >
                                    {item.name}
                                </Link>
                                {
                                    index !== items.length - 1 && <h4 className='text-gray-400'>/</h4>
                                }
                            </div>
                        ))
                    }
                </div>
                <Image src={'/images/page-top/left.png'} alt="left" width={200} height={250} className={'absolute top-[-50px] left-0 lg:block hidden'} />
                <Image src={'/images/page-top/right.png'} alt="right" width={212} height={301} className={'absolute top-[-50px] right-0  h-[300px] lg:block hidden'} />
            </div>

        </div>
    );
};

export default PageTop;