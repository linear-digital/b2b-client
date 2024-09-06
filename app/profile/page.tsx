import Navbar from '@/Components/Bars/Navbar';
import { Container, HR } from '@/Components/Shared/Global';
import React from 'react';
import ProfileTop from './_UI/ProfileTop';
import Footer from '@/Components/Bars/Footer/Footer';
import Reviews from './_UI/Reviews';
import WishLists from './_UI/WishLists';

const page = () => {
    return (
        <div className='default-bg min-h-screen'>
            <Navbar />
            <Container className='mt-10'>
                <ProfileTop />
                <HR className='my-5' />
                <div className="grid grid-cols-2 gap-5">
                    <Reviews />
                    <WishLists />
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default page;