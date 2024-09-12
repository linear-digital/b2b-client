'use client'
import React from 'react';
import Logo from '../Shared/Logo';
import SearchBox from './SearchBox';
import { Avatar, List, Popover } from 'antd';
import { HeartOutlined, MenuOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserOptions from './UserOptions';
import { HR } from '../Shared/Global';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
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
    const [show, setShow] = React.useState(false);
    const { currentUser } = useSelector((state: RootState) => state.user)
    return (
        <div className='relative'>
            <div className="flex justify-between py-3 items-center container mx-auto lg:px-0 px-4 ">
                <Logo />
                <SearchBox />
                <div className='flex items-center gap-x-5 '>
                    <button>
                        <SearchOutlined className='text-xl' />
                    </button>
                    <Link href={"/wishlist"}>
                        <HeartOutlined className='text-xl' />
                    </Link>
                    <button onClick={() => setShow(!show)}
                        className='lg:hidden'
                    >
                        <MenuOutlined className='text-xl' />
                    </button>
                    {
                        currentUser ?
                            <Popover title={"User Options"} trigger={"click"} content={<UserOptions />}
                                className='hidden lg:block'
                            >
                                <Avatar
                                    size={40}
                                    className='border border-primary cursor-pointer'
                                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                            </Popover>
                            :
                            <div className="lg:flex hidden items-center gap-x-3">
                                <Link href={"/auth/login"}>
                                    Login
                                </Link>
                                <Link href={"/auth/login"}>
                                    Register
                                </Link>
                            </div>
                    }


                </div>
                {
                    show && <div className="absolute top-0 left-0 right-0 bg-white w-full h-screen z-50 lg:hidden flex flex-col gap-y-4 p-5 animate__animated  animate__zoomIn animate__faster">
                        <div className="flex items-center justify-between">
                            <Logo />
                            <button onClick={() => setShow(!show)}>
                                <CloseIcon fontSize="medium" />
                            </button>
                        </div>
                        <MenuItems onClick={() => setShow(!show)} />
                        <HR />
                        {
                            currentUser ?
                                <Popover title={"User Options"} trigger={"click"} content={<UserOptions onClick={() => setShow(!show)} />}
                                    placement='bottom'
                                >
                                    <Avatar
                                        size={40}
                                        className='border border-primary cursor-pointer'
                                        src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                                </Popover>
                                :
                                <div className="flex flex-col gap-y-3">
                                    <Link href={"/auth/login"}>
                                        Login
                                    </Link>
                                    <Link href={"/auth/login"}>
                                        Register
                                    </Link>
                                </div>
                        }

                    </div>
                }
            </div>
            <div className="hidden lg:block">
                <hr />
                <div className="container mx-auto py-3">
                    <div className='flex justify-center gap-x-4'>
                        <MenuItems />
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Navbar;

const MenuItems = ({ onClick }: { onClick?: () => void }) => {
    const path = usePathname();
    return <>
        {
            items.map((item, index) => (
                <div key={index} className='flex items-center gap-x-3'

                >
                    <Link href={item.path} className={path === item.path ? 'text-primary' : ''}
                        onClick={onClick}
                    >
                        {item.name}
                    </Link>
                    {
                        index !== items.length - 1 && <h4 className='text-gray-400 lg:block hidden'>/</h4>
                    }
                </div>
            ))
        }
    </>
}