'use client';
import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import { Container } from '@/Components/Shared/Global';
import Image from 'next/image';
import React from 'react';
import WishImg from './image.png';
import WishListCard from './_UI/WishListCard';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import { Spin } from 'antd';
import { ProductType } from '@/Components/util/type';
import Link from 'next/link';

const Page = () => {
    const { currentUser } = useSelector((state: RootState) => state.user)
    const { data } = useQuery({
        queryKey: ['Wishlist-Section'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Wishlist-Section"
                }
            })
            return res
        }
    })

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
        return <Spin size='large' fullscreen />
    }

    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar />
            <PageTop
                title={data?.title}
                description={data?.desc}
            />
            {
                !!currentUser ? <Container className='lg:py-16 py-10 lg:px-0 px-4'>
                    <h2 className='text-[28px] font-medium'>
                        Saved Items
                    </h2>
                    <div className="flex flex-col gap-y-4 mt-8">
                        {
                            wishlist?.map((item: ProductType) => (
                                <WishListCard refetch={refetch} product={item} key={item?.offerId} />
                            ))
                        }
                        {
                            wishlist?.length === 0 && <h1 className='text-center mt-10 text-2xl font-elMessiri font-medium'>No Wishlist Found</h1>
                        }
                    </div>
                </Container>
                    :
                    <Container className='py-20'>
                        <Link href={'/auth/login'} className='text-xl'>Login to view your wishlist</Link>
                    </Container>
            }
            <Footer />
        </div>
    );
};

export default Page;