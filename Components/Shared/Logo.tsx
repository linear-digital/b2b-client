import Link from 'next/link';
import React from 'react';

const Logo = ({ color, size }: { color?: string, size?: number }) => {
    return (
        <Link href={"/"} style={{
            color: color ? color : "black",
            fontSize: size ? size : 40
        }}>
            B2B
        </Link>
    );
};

export default Logo;