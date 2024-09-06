import React from 'react';
import Cover from './cover.png'
import Image from 'next/image';
import { Button } from 'antd';
const ProfileTop = () => {
    return (
        <div>
            <Image src={Cover} alt="cover" width={1240} height={280} />
            <div className="relative flex gap-x-5 py-5 px-4">
                <div className='min-w-[225px]'>
                    <Image src={'/images/Avatar/man-1.png'} alt="login" width={175} height={175}
                        className='absolute top-[-90px] left-[50px]'
                    />
                </div>
                <div className="flex w-full justify-between">
                    <div>
                        <h3 className='text-[22px] font-medium'>
                            Robert Fox
                        </h3>
                        <h5 className='text-[#898989] text-[16px]'>
                            curtis.weaver@example.com
                        </h5>
                    </div>
                    <Button size='large' type='primary' className='py-3'>
                        Account settings
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProfileTop;