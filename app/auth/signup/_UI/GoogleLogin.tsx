
import Image from 'next/image';
import React from 'react';

const GoogleLogin = () => {
    return (
        <div className='flex items-center gap-x-3 justify-center w-full border border-primary rounded-lg p-2 cursor-pointer hover:shadow-xl shadow-primary/10'>
            <Image src="/images/google-2.png" alt="google" width={30} height={30} />
            <span className='text-base font-semibold'>
                Continue with Google
            </span>
        </div>
    );
};

export default GoogleLogin;