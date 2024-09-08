import React from 'react';
import Cover from './cover.png'
import Image from 'next/image';
import { Button } from 'antd';
const ProfileTop = () => {
    return (
        <div>
            <Image src={Cover} alt="cover" width={1240} height={280}
                className='lg:h-auto h-[280px]'
            />
            <div className="relative lg:flex lg:flex-row gap-x-5 py-5 px-4">
                <div className='min-w-[225px] absolute top-[-90px] left-0 lg:left-[50px] lg:block flex justify-center w-full'>
                    <Image src={'/images/Avatar/man-1.png'} alt="login" width={175} height={175}
                        className=''
                    />
                </div>
                <div className="flex lg:flex-row flex-col w-full justify-between items-center lg:mt-0 mt-20 lg:pl-[225px] pl-0">
                    <div className='flex lg:block flex-col items-center'>
                        <h3 className='text-[22px] font-medium'>
                            Robert Fox
                        </h3>
                        <h5 className='text-[#898989] text-[16px]'>
                            curtis.weaver@example.com
                        </h5>
                    </div>
                    <Button size='large' type='primary' className='py-3 mt-4 lg:mt-0'>
                        Account settings
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileTop;