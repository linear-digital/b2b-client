'use client'
import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import { Container } from '@/Components/Shared/Global';
import React from 'react';
import Category from './_Ui/Category';
import VouchersContainer from './_Ui/VouchersContainer';

const page = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar />
            <PageTop
                title='All Vouchers'
                description='Keep track of your vouchers in one convenient place. View active vouchers, check expiry dates, and see your redeemed offers.'
            />
            <Container className='mt-10 flex items-start gap-5'>
                <Category />
                <VouchersContainer />
            </Container>
            
            <Footer />
        </div>
    );
};

export default page;