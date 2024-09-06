import { Container } from '@/Components/Shared/Global';
import Image from 'next/image';
import React from 'react';

const Affiliate = () => {
    return (
        <Container className='py-10'>
            <div className="flex items-center gap-x-6 flex-row-reverse">
                <div>
                    <h2 className='sec-title'>
                    Our Affiliate Network
                    </h2>
                    <p className='text-[25px] text-[#5B5B5B] max-w-[610px] mt-3 leading-[39px]'>
                    We partner with a vast network of affiliates, including top-tier merchants and brands, to bring you the best deals and product options. Our affiliate relationships are built on trust, transparency, and mutual growth, ensuring that we provide high-quality offerings to our users.
                    </p>
                </div>
                <Image
                    src={"/images/about/affiliate.png"}
                    alt="Affiliate"
                    width={610}
                    height={525}
                />
            </div>
        </Container>
    );
};

export default Affiliate;