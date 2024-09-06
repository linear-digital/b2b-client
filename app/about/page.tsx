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

const page = () => {
    return (
        <div>
            <Navbar />
            <PageTop
                title='About us'
                description='Welcome to [Your Site Name], your trusted partner in finding the best products at the best prices. We are more than just a comparison-shopping site; we are a platform designed to empower consumers by simplifying their shopping experience.'
            />
            <OurMission />
            <Container>
                <Image
                    src="/images/about/about.png"
                    alt="about"
                    width={1240}
                    height={500}
                />
            </Container>
            <WhatWeDo />
            <WhyChooseUs />
            <Partnerships />
            <Affiliate />
            <OurTeam />
            <Footer />
        </div>
    );
};

export default page;