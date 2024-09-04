import Logo from '@/Components/Shared/Logo';
import Image from 'next/image';
import React from 'react';
import FormSignup from './_UI/Form';

const page = () => {
    return (
        <div className='container max-h-screen flex py-10 overflow-hidden'>
            <div className="grid grid-cols-2 h-full">
                <div className='flex flex-col justify-center p-2'>
                    <Logo />
                    <h2 className='mt-8 text-3xl messiri font-medium'>
                        Register
                    </h2>
                    <p className='text-sm mt-3'>
                        Create your account now
                    </p>
                    <FormSignup />
                </div>
                <div className='h-[90%] relative rounded overflow-hidden'>
                    <Image src='/images/login.png' alt="login" width={700} height={900}
                        className='h-full object-cover'
                    />
                    <Image src={'/images/login-elements.png'} alt="login" width={700} height={200}
                        className='absolute bottom-0 left-0 '
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
