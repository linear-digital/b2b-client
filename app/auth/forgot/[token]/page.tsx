'use client'

import React from 'react';
import TokenForm from './_UI/TokenForm';

const page = ({ params }: { params: { token: string } }) => {
    return (
        <div className='container mx-auto flex items-center justify-center h-screen'>
            <TokenForm token={params.token}/>
        </div>
    );
};

export default page;