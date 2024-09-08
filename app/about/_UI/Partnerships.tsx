import { Container } from '@/Components/Shared/Global';
import Image from 'next/image';
import React from 'react';

const Partnerships = () => {
    return (
        <Container className='lg:py-16 py-10 px-4 lg:px-0'>
            <div className="lg:flex items-center gap-x-6">
                <div>
                    <h2 className='sec-title'>
                        Partnerships
                    </h2>
                    <p className='lg:text-[25px] text-[14px] text-[#5B5B5B] max-w-[610px] mt-3 lg:leading-[39px]'>
                        We partner with some of the most trusted brands and merchants in the industry, bringing you exclusive deals and a wide range of products. Our collaborations ensure that you always have access to the latest and greatest on the market.
                    </p>
                </div>
                <Image
                    src={"/images/about/partner.png"}
                    alt="mission"
                    width={610}
                    height={525}
                    className='mt-4 lg:mt-0'
                />
            </div>
        </Container>
    );
};

export default Partnerships;