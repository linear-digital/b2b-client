import { Card } from 'antd';
import Image from 'next/image';
import React from 'react';
import DeleteImg from './delete.png';
import WishImg from '../../wishlist/image.png';
const WishListCard = () => {
    return (
        <Card className='border-0 bg-[#F7F7F7]'>
            <div className="flex gap-x-5">
                <Image src={WishImg} alt="login" width={140} height={140} />
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
                    <h3 className='text-[28px] font-medium'>
                        $2,499.00
                    </h3>
                    <div className="flex items-center justify-between mt-4">

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