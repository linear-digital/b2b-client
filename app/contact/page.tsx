
import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import React from 'react';
import Contact from './_UI/Contact';

const page = () => {
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar />
            <PageTop
                title='Get in touch with us'
                description="We’re here to help! Whether you have a question, need assistance, or just want to provide feedback, feel free to reach out. Our team is dedicated to ensuring your experience on [Your Site Name] is seamless and satisfying."
            />
            <Contact />
            <Footer />
        </div>
    );
};

export default page;