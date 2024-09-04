'use client'
import React from 'react';
import Logo from '../Shared/Logo';
import SearchBox from './SearchBox';
import { Avatar, List, Popover } from 'antd';
import { HeartOutlined, UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserOptions from './UserOptions';
export const items = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Products",
        path: "/products",
    },
    {
        name: "Vouchers",
        path: "/voucher",
    },
    {
        name: "About Us",
        path: "/about",
    },
    {
        name: "Contact",
        path: "/contact",
    }
]
const Navbar = () => {
    
    const path = usePathname();
    return (
        <div>
            <div className="flex justify-between py-3 items-center container">
                <Logo />
                <SearchBox />
                <div className='flex items-center gap-x-5'>
                    <HeartOutlined className='text-xl' />
                    <Popover title={"User Options"} trigger={"click"} content={<UserOptions />}>
                        <Avatar
                            size={40}
                            className='border border-primary'
                            src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                    </Popover>
                </div>
            </div>
            <hr />
            <div className="container py-3">
                <div className='flex justify-center gap-x-4'>
                    {
                        items.map((item, index) => (
                            <div key={index} className='flex items-center gap-x-3'>
                                <Link href={item.path} className={path === item.path ? 'text-primary' : ''}>
                                    {item.name}
                                </Link>
                                {
                                    index !== items.length - 1 && <h4 className='text-gray-400'>/</h4>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Navbar;