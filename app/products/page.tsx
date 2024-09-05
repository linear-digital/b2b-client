import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import Filter from '@/Components/Pages/Products/Filter';
import React from 'react';

const page = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar />
            <PageTop
                title='Our Products'
                description="Browse through our extensive collection of products. Whether you're looking for the latest tech gadgets, stylish apparel, or everyday essentials, you'll find everything you need right here."
            />
            <div className="container mx-auto mt-16">
                <Filter />
            </div>
        </div>
    );
};

export default page;