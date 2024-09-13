'use client'
import fetcher from '@/Components/util/axios';
import { RootState } from '@/Redux/store';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Card, Modal } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import Cookie from 'js-cookie';
import toast from 'react-hot-toast';
import { errorDisplay } from '@/Components/util/readError';
const { confirm } = Modal;

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
    const { currentUser } = useSelector((state: RootState) => state.user)
    const deleteHandler = async () => {
        try {
            const res = await fetcher({
                method: 'DELETE',
                url: `users/${currentUser?._id}`
            })
            Cookie.remove('auth-token')
            toast.success("Account deleted successfully")
            window.location.href = '/'
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    const showPropsConfirm = () => {
        confirm({
            title: 'Are you sure delete your account?',
            icon: <ExclamationCircleFilled />,
            content: 'If you delete your account, you will not be able to recover it.',
            okText: 'Delete Account',
            okType: 'danger',
            //   okButtonProps: {
            //     disabled: true,
            //   },
            cancelText: 'Cancel',
            onOk: () => deleteHandler(),
            onCancel() {
                console.log('Cancel');
            },
        });
    };
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
                <button
                    onClick={showPropsConfirm}
                    className='text-red-500 font-medium'>Delete Account</button>
            </div>
        </Card>
    );
};

export default Sidebar;