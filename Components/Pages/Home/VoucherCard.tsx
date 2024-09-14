
'use client'
import dateDisplay from '@/Components/util/dayjs';
import { VoucherType } from '@/Components/util/type';
import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

const VoucherCard = ({ voucher }: { voucher: VoucherType }) => {
    return (
        <div className='w-full h-[309px] bg-[#323F45] rounded-lg flex flex-col justify-center p-8 items-start relative'>
            <div className='z-10 '>
                <h4 className='text-[#B8B8B8] lg:text-[16px] text-[12px]'>
                    {voucher.discount}% Off {voucher.category}
                </h4>
                <h2 className='lg:text-[22px] text-[18px] text-white mt-3 lg:max-w-[60%] max-w-[90%]'>
                    {voucher.title}
                </h2>
                <h4 className='text-white mt-5 text-sm lg:hidden'>
                    Expires: {dateDisplay(voucher.endDate)}
                </h4>
                <Button className='bg-transparent text-primary border-primary mt-5' size='large'>
                    Get Code
                </Button>
            </div>
            <Image src={voucher.image} alt="voucher" width={365} height={295}
                className='absolute top-0 right-0 z-1 lg:w-[365px] w-[200px] max-w-[365px] max-h-[295px]'
            />
            <h4 className='text-white absolute bottom-3 right-3 text-sm lg:block hidden'>
                Expires: {dateDisplay(voucher.endDate)}
            </h4>
        </div>
    );
};

export default VoucherCard;