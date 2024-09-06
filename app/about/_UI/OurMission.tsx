import { Container } from '@/Components/Shared/Global';
import Image from 'next/image';
import React from 'react';

const OurMission = () => {
    return (
        <Container className='py-16'>
            <div className="flex items-center gap-x-6">
                <div>
                    <h2 className='sec-title'>
                        Our Mission
                    </h2>
                    <p className='text-[25px] text-[#5B5B5B] max-w-[610px] mt-3 leading-[39px]'>
                        At [Your Site Name], our mission is to simplify your shopping experience by offering a seamless platform that connects you with the best deals from trusted merchants. We believe in transparency, quality, and convenience, ensuring that you find exactly what you need at the best possible price
                    </p>
                </div>
                <Image
                    src={"/images/about/mission.png"}
                    alt="mission"
                    width={610}
                    height={525}
                />
            </div>
        </Container>
    );
};

export default OurMission;