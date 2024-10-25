'use client';
import { Card, Spin } from 'antd';
import React from 'react';
import WishListCard from './WishlistCard';
import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import fetcher from '@/Components/util/axios';

const WishLists = () => {
    const { currentUser } = useSelector((state: RootState) => state.user)
    const { data: wishlist, isLoading, refetch } = useQuery({
        queryKey: ['Wishlist'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/wishlist/user/${currentUser?._id}`,
                method: 'GET',
            })
            return res
        },
        enabled: !!currentUser
    })
    if (isLoading) {
        return <Spin size='large' fullscreen/>
    }
    return (
        <Card className='border-0'>
            <h3 className='messiri text-[28px]'>
                WishLists
            </h3>
            <div className='flex flex-col gap-4 mt-5'>
                {
                    wishlist?.length < 1 ?
                        <h1 className='text-center mt-10 text-xl font-medium'>No Wishlists Found</h1>
                        :

                        wishlist?.map((item: any) => (
                            <WishListCard refetch={refetch} key={item?._id} data={item} />
                        ))
                }

            </div>
        </Card>
    );
};

export default WishLists;