import React from 'react';

const Logo = ({ color, size }: { color?: string, size?: number }) => {
    return (
        <div style={{
            color: color ? color : "black",
            fontSize: size ? size : 40
        }}>
            B2B
        </div>
    );
};

export default Logo;