import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import { Container } from '@/Components/Shared/Global';
import React from 'react';
import PageTop from './_Ui/PageTop';
import Sidebar from './_Ui/Sidebar';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='default-bg'>
            <Navbar />
            <PageTop title='Account settings' />
            <Container className='mt-10'>
                <div className="flex gap-5 items-start">
                    <Sidebar />
                    {children}
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default layout;