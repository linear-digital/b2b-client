import { Container } from '@/Components/Shared/Global';
import Image from 'next/image';
import React from 'react';

const WhatWeDo = () => {
    return (
        <Container className='py-16'>
            <div className="flex items-center gap-x-6 flex-row-reverse">
                <div>
                    <h2 className='sec-title'>
                        What We Do
                    </h2>
                    <p className='text-[25px] text-[#5B5B5B] max-w-[610px] mt-3 leading-[39px]'>
                        We aggregate and display products from various merchants, allowing you to easily compare prices, features, and reviews. Our platform leverages advanced APIs and product feed technology to bring you real-time data, ensuring that the information you receive is both accurate and comprehensive.
                    </p>
                </div>
                <Image
                    src={"/images/about/what.png"}
                    alt="what"
                    width={610}
                    height={525}
                />
            </div>
        </Container>
    );
};

export default WhatWeDo;