import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar />
            <PageTop
                title='About us'
                description='Welcome to [Your Site Name], your trusted partner in finding the best products at the best prices. We are more than just a comparison-shopping site; we are a platform designed to empower consumers by simplifying their shopping experience.'
            />
            <Footer />
        </div>
    );
};

export default page;