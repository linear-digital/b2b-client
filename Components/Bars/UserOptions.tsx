import { EditFilled, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import KeyIcon from '@mui/icons-material/Key';
import { Delete } from '@mui/icons-material';
const UserOptions = ({ onClick }: { onClick?: () => void }) => {

    return (
        <div className='w-[200px]'>
            <Link href={"/profile"} className='flex items-center gap-x-3 mt-3'
                onClick={onClick}
            >
                <UserOutlined />
                <span>Profile</span>
            </Link>
            <Link href={"/settings"} className='flex items-center gap-x-3 mt-2'
                onClick={onClick}
            >
                <SettingOutlined />
                <span>Account Settings</span>
            </Link>
            <Link href={"/settings/password"} className='flex items-center gap-x-3 mt-2 lg:hidden'
                onClick={onClick}
            >
                <KeyIcon fontSize='small' />
                <span>Change Password</span>
            </Link>
            <button className='flex text-red-500 items-center gap-x-3 mt-2 lg:hidden'
            >
                <Delete fontSize='small' />
                <span>Delete Account</span>
            </button>
            <button className='flex text-red-500 items-center gap-x-3 mt-2'
            >
                <LogoutOutlined />
                <span>Logout</span>
            </button>
        </div>
    );
};

export default UserOptions;