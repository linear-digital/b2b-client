import React from 'react';

const Logo = ({ color, size }: { color?: string, size?: number }) => {
    return (
        <div style={{
            color: color ? color : "black",
            fontSize: size ? size : 40
        }}>
            Logo
        </div>
    );
};

export default Logo;