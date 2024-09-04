import { Image } from 'antd';
import React from 'react';

const GoogleLogin = () => {
    return (
        <button className='flex items-center gap-x-3 justify-center w-full border border-primary rounded-lg p-2'>
            <Image src="/images/google.png" alt="google" width={30} height={30} />
            <span className='text-base font-semibold'>
                Continue with Google
            </span>
        </button>
    );
};

export default GoogleLogin;