'use client'
import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import { Container } from '@/Components/Shared/Global';
import React from 'react';
import Category, { categories } from './_Ui/Category';
import VouchersContainer from './_Ui/VouchersContainer';
import { Select } from 'antd';

const page = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar />
            <PageTop
                title='All Vouchers'
                description='Keep track of your vouchers in one convenient place. View active vouchers, check expiry dates, and see your redeemed offers.'
            />
            <Container className='mt-10 lg:flex items-start gap-5 px-4 lg:px-0'>
                <select name="" id="" className='w-full py-2 mb-4 rounded-lg text-sm outline-none px-2'>
                    <option value="">Select Caegory</option>
                    {
                        categories.map((category, index) => <option key={index} value={category.value}>{category.name}</option>)
                    }
                </select>
                <Category />
                <VouchersContainer />
            </Container>

            <Footer />
        </div>
    );
};

export default page;