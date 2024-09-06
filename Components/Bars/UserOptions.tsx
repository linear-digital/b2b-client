import { EditFilled, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

const UserOptions = () => {
    return (
        <div className='w-[200px]'>
            <Link href={"/profile"} className='flex items-center gap-x-3 mt-3'>
                <UserOutlined />
                <span>Profile</span>
            </Link>
            <Link href={"/settings"} className='flex items-center gap-x-3 mt-2'>
                <SettingOutlined />
                <span>Account Settings</span>
            </Link>
            <button className='flex text-red-500 items-center gap-x-3 mt-2'>
                <LogoutOutlined />
                <span>Logout</span>
            </button>
        </div>
    );
};

export default UserOptions;