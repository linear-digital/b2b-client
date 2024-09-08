'use client'
import { Card } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
    const links = [
        {
            name: "Edit Profile",
            path: "/settings"
        },
        {
            name: "Password",
            path: "/settings/password"
        },
        {
            name: "Notification",
            path: "/settings/notification"
        }
    ]
    const path = usePathname();
    return (
        <Card className='border-0 hidden lg:block bg-[#ECEDEA]  min-w-[295px] w-[295px]'>
            <div className="flex flex-col justify-between  h-[586px]">
                <div className="flex flex-col gap-4">
                    {
                        links.map((link, index) => (
                            <Link href={link.path} key={index}
                                className={`text-[18px] ${link.path === path ? "text-black" : "text-[#898989]"}`}
                            >
                                {link.name}
                            </Link>
                        ))
                    }
                </div>
                <button className='text-red-500 font-medium'>Delete Account</button>
            </div>
        </Card>
    );
};

export default Sidebar;