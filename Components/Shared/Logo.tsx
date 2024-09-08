import Link from 'next/link';
import React from 'react';

const Logo = ({ color, size }: { color?: string, size?: number }) => {
    return (
        <Link href={"/"} 
        className='text-black lg:text-[40px] text-[28px] font-bold'
        >
            B2B
        </Link>
    );
};

export default Logo;