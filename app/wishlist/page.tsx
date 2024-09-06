import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar />
            <PageTop
                title='My Wishlist'
                description="Keep track of the products you love and find them easily whenever you return. Your wishlist is a convenient way to save items you're interested in, so you can compare and make informed decisions later."
            />
            <Footer />
        </div>
    );
};

export default page;