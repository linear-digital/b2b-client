
'use client'
import Pagination from '@/app/products/_UI/Pagination';
import VoucherCard from '@/Components/Pages/Home/VoucherCard';
import fetcher from '@/Components/util/axios';
import { VoucherType } from '@/Components/util/type';
import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import React from 'react';

const VouchersContainer = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['vouchers'],
        queryFn: async () => {
            return await fetcher({
                url: '/vouchers/all',
                method: 'GET'
            })
        }
    })
    const [active, setActive] = React.useState(1);
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div className='w-full flex flex-col gap-y-4'>
            {
                data?.data?.map((voucher: VoucherType, index: number) => <VoucherCard key={index} voucher={voucher} />)
            }
            <Pagination className='mt-5' pages={data?.totalPage} active={active} setActive={setActive}/>
        </div>
    );
};

export default VouchersContainer;