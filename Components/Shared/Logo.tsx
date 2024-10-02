import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({ color, size, path }: { color?: string, size?: number, path?: string }) => {
    return (
        <Link href={path ? path : "/"}
            className=' lg:text-[40px] text-[28px] font-bold'
            style={{ color: color ? color : "black", maxWidth: '200px' }}
        >
            <Image
                src={'/logo.png'}
                alt="logo"
                width={size ? size : 110}
                height={size ? size : 40}
            />
        </Link>
    );
};

export default Logo;

