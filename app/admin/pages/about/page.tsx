'use client';
import React from 'react';
import TopSection from './_UI/TopSection';
import OurMission from './_UI/OurMission';
import WhatWoDO from './_UI/WhatWeDo';
import Partnerships from './_UI/Partnerships';
import Affiliate from './_UI/Affiliate';

const page = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            <TopSection />
            <OurMission />
            <WhatWoDO />
            <Partnerships />
            <Affiliate />
        </div>
    );
};

export default page;