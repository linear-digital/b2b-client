
'use client'
import Pagination from '@/app/products/_UI/Pagination';
import VoucherCard from '@/Components/Pages/Home/VoucherCard';
import React from 'react';

const VouchersContainer = () => {
    return (
        <div className='w-full flex flex-col gap-y-4'>
            <VoucherCard />
            <VoucherCard />
            <VoucherCard />
            <VoucherCard />
            <VoucherCard />
            <Pagination className='mt-5'/>
        </div>
    );
};

export default VouchersContainer;