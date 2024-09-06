import { Card } from 'antd';
import Image from 'next/image';
import React from 'react';
import DeleteImg from '../delete.png';
const WishListCard = ({ image }: { image: any }) => {
    return (
        <Card className='border-0'>
            <div className="flex gap-x-5">
                <Image src={image} alt="login" width={190} height={190} />
                <div className='w-full'>
                    <div className="flex items-center justify-between">
                        <h2 className='messiri text-[18px] font-semibold'>
                            Apple MacBook Pro 16-inch
                        </h2>
                        <Image
                            src={DeleteImg}
                            width={44}
                            height={44}
                            alt='delete'
                        />
                    </div>
                    <p className='max-w-[485px] text-[#898989] text-[14px]'>
                        Experience top-tier performance with the Apple MacBook Pro 16-inch, featuring a stunning Retina display, powerful Intel Core i9 processor, and advanced graphics—perfect for professionals seeking speed and reliability.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                        <h3 className='text-[28px] font-medium'>
                            $2,499.00
                        </h3>
                        <div className="flex items-center gap-x-3">
                            <button className='btn-primary active'>
                                View Deals
                            </button>
                            <button className='btn-primary-active'>
                                Go to store
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default WishListCard;