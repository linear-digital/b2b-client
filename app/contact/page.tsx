'use client'
import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import React from 'react';
import Contact from './_UI/Contact';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';

const Page = () => {

    const { data } = useQuery({
        queryKey: ['Contact'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Contact"
                }
            })
            return res
        }
    })
    return (
        <div className='bg-[#F7F7F7]'>
            <Navbar />
            <PageTop
                title={data?.title}
                description={data?.desc}
            />
            <Contact />
            <Footer />
        </div>
    );
};

export default Page;