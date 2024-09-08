import Image from 'next/image';
import React from 'react';

const FeaturedBrands = () => {
    const logos = [
        '/logos/logo-1.png',
        '/logos/logo-2.png',
        '/logos/logo-3.png',
        '/logos/logo-4.png',
        '/logos/logo-5.png',
        '/logos/logo6.png',
        '/logos/logo-7.png',
        '/logos/logo-8.png',
    ]
    return (
        <div className='container mx-auto mt-20 px-4 lg:px-0'>
            <h1 className='sec-title'>Featured Brands</h1>
            <p className='max-w-[749px] lg:text-base text-[14px] text-[#898989] mt-4'>
                Explore our curated selection of top brands across various categories. Discover quality and innovation from leading names in tech, fashion, and more.
            </p>
            <div className="lg:grid hidden mt-10 lg:grid-cols-4 grid-cols-2">
                {
                    logos.map((logo, index) => (
                        <div className={`p-5 ${index < 3 ? "border-b border-r" : index > 3 && index < 7 ? "border-r" : index === 3 ? "border-b" : ""}`} key={index}>
                            <Image src={logo} alt="logo" width={240} height={40} className={''} />
                        </div>
                    ))
                }
            </div>
            <div className="grid lg:hidden mt-10  grid-cols-2">
                {
                    logos.map((logo, index) => (
                        <div className={`p-5 ${index < 6 ? `border-b ${(index !== 1 && index !== 5 && index !== 3) && "border-r"}` : `${index !== 7 && "border-r"}`}`} key={index}>
                            <Image src={logo} alt="logo" width={240} height={40} className={''} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedBrands;