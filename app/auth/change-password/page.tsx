'use client'
import { Button, Card, Form, Input, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ChangePassword from './Form';

const page = () => {
    return (
        <div className='container mx-auto flex items-center justify-center h-screen'>
            <Card className='w-[500px] min-h-[400px] border-none p-5'>
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
    );
};

export default page;