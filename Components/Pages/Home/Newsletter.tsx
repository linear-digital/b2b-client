import Image from 'next/image';
import React from 'react';

const Newsletter = () => {
    return (
        <div className='container h-[399px] bg-[#E3E3E6] mx-auto mt-[150px] relative flex flex-col justify-center'>
            <div className='px-10'>
                <h2 className='sec-title leading-[60px]'>
                    Subscribe to our newsletter!
                </h2>
                <p className='max-w-[505px] mt-2 text-[#898989]'>
                Join thousands of savvy shoppers who trust us for the best deals and product insights. No spam, we promise!
                </p>
                <div className="flex w-[386px] items-center mt-10 h-[55px]">
                    <input type="text" placeholder='Enter your email' className='w-full h-full border border-none rounded-l-lg px-4 py-2 outline-none' />
                    <button className='bg-primary text-white rounded-r-lg px-4 py-2 h-full'>
                        Subscribe
                    </button>
                </div>
            </div>
            <Image src={'/images/chair.png'} width={488} height={535} alt="chair" className='absolute bottom-0 right-10' />
        </div>
    );
};

export default Newsletter;