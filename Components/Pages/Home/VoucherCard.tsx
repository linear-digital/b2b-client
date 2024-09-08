
'use client'
import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

const VoucherCard = () => {
    return (
        <div className='w-full h-[309px] bg-[#323F45] rounded-lg flex flex-col justify-center p-8 items-start relative'>
            <div className='z-10 '>
                <h4 className='text-[#B8B8B8] lg:text-[16px] text-[12px]'>
                    20% Off Tech Gadgets
                </h4>
                <h2 className='lg:text-[22px] text-[18px] text-white mt-3 lg:max-w-[60%] max-w-[90%]'>
                    Use code TECH20 to get 20% off selected tech gadgets. Limited time offer!
                </h2>
                <h4 className='text-white mt-5 text-sm lg:hidden'>
                    Expires: 30th August 2024
                </h4>
                <Button className='bg-transparent text-primary border-primary mt-5' size='large'>
                    Get Code
                </Button>
            </div>
            <Image src={'/products/headphone.png'} alt="voucher" width={365} height={295}
                className='absolute top-0 right-0 z-1 lg:w-[365px] w-[200px]'
            />
            <h4 className='text-white absolute bottom-3 right-3 text-sm lg:block hidden'>
                Expires: 30th August 2024
            </h4>
        </div>
    );
};

export default VoucherCard;