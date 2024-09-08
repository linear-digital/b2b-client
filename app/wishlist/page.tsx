import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import { Container } from '@/Components/Shared/Global';
import { Card } from 'antd';
import Image from 'next/image';
import React from 'react';
import WishImg from './image.png';
import WishListCard from './_UI/WishListCard';
const page = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar />
            <PageTop
                title='My Wishlist'
                description="Keep track of the products you love and find them easily whenever you return. Your wishlist is a convenient way to save items you're interested in, so you can compare and make informed decisions later."
            />
            <Container className='lg:py-16 py-10 lg:px-0 px-4'>
                <h2 className='text-[28px] font-medium'>
                    Saved Items
                </h2>
                <div className="flex flex-col gap-y-4 mt-8">
                    <WishListCard image={WishImg} />
                    <WishListCard image={WishImg} />
                    <WishListCard image={WishImg} />
                    <WishListCard image={WishImg} />
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default page;