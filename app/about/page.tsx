'use client';
import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import PageTop from '@/Components/Pages/PageTop';
import React from 'react';
import OurMission from './_UI/OurMission';
import Image from 'next/image';
import { Container } from '@/Components/Shared/Global';
import WhatWeDo from './_UI/WhatWeDo';
import WhyChooseUs from './_UI/WhyChooseUs';
import Partnerships from './_UI/Partnerships';
import Affiliate from './_UI/Affiliate';
import OurTeam from './_UI/OurTeam';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';

const Page = () => {
    const { data } = useQuery({
        queryKey: ['About Us'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "About Us"
                }
            })
            return res
        },
    })
    return (
        <div>
            <Navbar />
            <PageTop
                title={data?.title}
                description={data?.desc}
            />
            <OurMission />
            <Container>
                <Image
                    src="/images/about/about.png"
                    alt="about"
                    width={1240}
                    height={500}
                    className='w-full'
                />
            </Container>
            <WhatWeDo />
            <WhyChooseUs />
            <Partnerships />
            <Affiliate />
            {/* <OurTeam /> */}
            <Footer />
        </div>
    );
};

export default Page;