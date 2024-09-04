import Logo from '@/Components/Shared/Logo';
import { LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className='bg-black w-full  mt-52'>
            <div className="container grid grid-cols-12 py-10">
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