'use client'

import Logo from '@/Components/Shared/Logo';
import { LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import { items } from '../Navbar';
import { Button } from 'antd';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';
const Footer = () => {
    const { data } = useQuery({
        queryKey: ['Contact Information'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "information"
                }
            })
            return res
        },
        refetchOnWindowFocus: false
    })
    return (
        <footer className='bg-black w-full  lg:mt-16 mt-10'>
            <div className="container mx-auto grid lg:grid-cols-12 py-10 gap-x-10 grid-cols-1 p-4 gap-y-6">
                <div className='col-span-3'>
                    <div className="bg-white max-w-[200px] flex justify-center py-2">
                        <Logo color='white' />
                    </div>
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
                        <h5 className='text-gray-400'>
                            {data?.others?.email}
                        </h5>
                        <h5 className='text-gray-400 text-lg mt-2'>
                            {data?.others?.phone}
                        </h5>
                        <Button type='primary' className='mt-5 px-5' size='large'>
                            Help Center
                        </Button>
                    </div>
                </div>
            </div>
            <hr />
            <div className='py-5 text-white container mx-auto flex justify-between lg:flex-row flex-col-reverse items-center gap-y-2 text-sm'>
                <p className='text-sm'>©2024 Your Company</p>
                <div className='flex gap-x-3'>
                    <Link href={'#'}>
                        Privacy Policy
                    </Link>
                    /
                    <Link href={'#'}>
                        Cookies Policy
                    </Link>
                    /
                    <Link href={'#'}>
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