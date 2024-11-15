'use client'
import { Button, Card, Form, Input, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';
import ChangePassword from './Form';

const page = () => {
    return (
        <Suspense>
            <div className='container mx-auto flex items-center justify-center h-screen'>
            <Card className='lg:w-[500px] w-full min-h-[400px] border-none lg:p-5'>
                <Image src={'/icons/forgot.png'} alt="forgot" width={50} height={50} />
                <h1 className='text-[32px] messiri mt-4'>
                    Change password!
                </h1>
                <p className='text-[16px] text-[#898989]'>
                    Almost done. Enter your new password and youre all set.
                </p>
                <ChangePassword />
                   
            </Card>
        </div>
        </Suspense>
    );
};

export default page;