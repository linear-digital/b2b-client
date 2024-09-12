'use client'
import React from 'react';
import Cover from './cover.png'
import Image from 'next/image';
import { Button, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import Link from 'next/link';
const ProfileTop = () => {
    const { currentUser } = useSelector((state: RootState) => state.user)
    if (!currentUser) {
        return <Spin size="large" fullscreen/>
    }
    return (
        <div>
            <Image src={Cover} alt="cover" width={1240} height={280}
                className='lg:h-auto h-[280px] w-full'
            />
            <div className="relative lg:flex lg:flex-row gap-x-5 py-5 px-4">
                <div className='min-w-[225px] absolute top-[-90px] left-0 lg:left-[50px] lg:block flex justify-center w-full'>
                    <Image src={currentUser?.profile as string} alt="login" width={175} height={175}
                        className='rounded-lg'
                    />
                </div>
                <div className="flex lg:flex-row flex-col w-full justify-between items-center lg:mt-0 mt-20 lg:pl-[225px] pl-0">
                    <div className='flex lg:block flex-col items-center'>
                        <h3 className='text-[22px] font-medium'>
                            {currentUser?.name}
                        </h3>
                        <h5 className='text-[#898989] text-[16px]'>
                            {currentUser?.email}
                        </h5>
                    </div>
                    <Link href={"/settings"}>
                        <Button size='large' type='primary' className='py-3 mt-4 lg:mt-0'>
                            Account settings
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileTop;