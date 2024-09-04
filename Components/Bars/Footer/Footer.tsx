'use client'

import Logo from '@/Components/Shared/Logo';
import { LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import { items } from '../Navbar';
import { Button } from 'antd';
const Footer = () => {
    return (
        <footer className='bg-black w-full  mt-52'>
            <div className="container grid grid-cols-12 py-10 gap-x-10">
                <div className='col-span-3'>
                    <Logo color='white' />
                    <p className='text-sm leading-normal text-white mt-2'>
                        Efforlessly manage and organize chats,
                        tasks, and files in one centeral location
                        with Qoterra chat management solutions
                    </p>
                    <div className="icons text-white text-2xl gap-x-3 flex items-center mt-5">
                        <a href="#" className='flex items-center'>
                            <TwitterOutlined color='white' />
                        </a>
                        <a href="#" className='flex items-center'>
                            <FacebookIcon />
                        </a>
                        <a href="#" className='flex items-center'>
                            <LinkedinOutlined />
                        </a>
                        <a href="#" className='flex items-center'>
                            <YoutubeOutlined />
                        </a>
                    </div>
                </div>
                <div className="col-span-2">
                    <h3 className='text-lg text-white'>
                        Navigate
                    </h3>
                    <div className="flex flex-col gap-y-3 mt-5">
                        {
                            items.map((item, index) => (
                                <Link href={item.path} key={index} className='text-white text-sm  block'>
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-2">
                    <h3 className='text-lg text-white'>
                        Support Us
                    </h3>
                    <div className="flex flex-col gap-y-3 mt-5">
                        {
                            links2.map((item, index) => (
                                <Link href={item.path} key={index} className='text-white text-sm  block'>
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-2">
                    <h3 className='text-lg text-white'>
                        Resources
                    </h3>
                    <div className="flex flex-col gap-y-3 mt-5">
                        {
                            resources.map((item, index) => (
                                <Link href={item.path} key={index} className='text-white text-sm  block'>
                                    {item.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-3">
                    <h3 className='text-lg text-white'>
                        Contact Us
                    </h3>
                    <div className="mt-5">
                        <h5 className='text-gray-400'>Qoterra@business.com</h5>
                        <h5 className='text-gray-400 text-lg mt-2'>+91-80-65652545</h5>
                        <Button type='primary' className='mt-5 px-5' size='large'>
                            Help Center
                        </Button>
                    </div>
                </div>
            </div>
            <hr />
            <div className='py-5 text-white container flex justify-between text-sm'>
                <p className='text-sm'>©2024 Your Company</p>
                <div className='flex gap-x-3'>
                    <Link href={'/'}>
                        Privacy Policy
                    </Link>
                    /
                    <Link href={'/'}>
                        Cookies Policy
                    </Link>
                    /
                    <Link href={'/'}>
                        Sitemap
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

const links2 = [

    {
        name: "FAQ's",
        path: "/",
    },
    {
        name: "Contact Us",
        path: "/",
    },
    {
        name: "Blog",
        path: "/",
    },
    {
        name: "Security",
        path: "/",
    },
]


const resources = [

    {
        name: "Partnership",
        path: "/",
    },
    {
        name: "terms and conditions",
        path: "/",
    }
]