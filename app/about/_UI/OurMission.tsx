import { Container } from '@/Components/Shared/Global';
import Image from 'next/image';
import React from 'react';

const OurMission = () => {
    return (
        <Container className='lg:py-16 py-10 px-4 lg:px-0'>
            <div className="lg:flex items-center gap-x-6">
                <div>
                    <h2 className='sec-title'>
                        Our Mission
                    </h2>
                    <p className='lg:text-[25px] text-[14px] text-[#5B5B5B] max-w-[610px] mt-3 lg:leading-[39px]'>
                        At [Your Site Name], our mission is to simplify your shopping experience by offering a seamless platform that connects you with the best deals from trusted merchants. We believe in transparency, quality, and convenience, ensuring that you find exactly what you need at the best possible price
                    </p>
                </div>
                <Image
                    src={"/images/about/mission.png"}
                    alt="mission"
                    width={610}
                    height={525}
                    className='mt-4 lg:mt-0'
                />
            </div>
        </Container>
    );
};

export default OurMission;