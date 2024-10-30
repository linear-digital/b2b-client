import React from 'react';

const Details = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center p-5'>
            <h1 className='text-4xl font-bold text-primary nosifer '>Redirecting...</h1>
            <p className='mt-5 text-center text-gray-600'>
                Hang tight! You'll be redirected shortly.
            </p>
            <p className='mt-2 text-center text-gray-500'>
                If you're not redirected automatically, please check your product url and try again.
            </p>
        </div>
    );
};

export default Details;