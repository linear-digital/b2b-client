'use client'
import { Button, Card, Form, Input, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='container mx-auto flex items-center justify-center h-screen'>
            <Card className='lg:w-[500px] w-full min-h-[400px] border-none lg:p-5'>
                <Image src={'/icons/forgot.png'} alt="forgot" width={50} height={50} />
                <h1 className='text-[32px] messiri mt-4'>
                    Verify email
                </h1>
                <p className='text-[16px] text-[#898989]'>
                    A verification code has been sent to you. Enter the code below
                </p>
                <div className='w-full mt-5'>
                    <Input.OTP />
                </div>
                <button className='w-full mt-5 bg-primary py-3 rounded-xl text-white'>
                    Reset Password
                </button>
            </Card>
        </div>
    );
};

export default page;