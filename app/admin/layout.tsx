
'use client';
import {
    ShopOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import DiscountIcon from '@mui/icons-material/Discount';


import React, { Children, useEffect, useMemo, useState } from 'react';
import LayersIcon from '@mui/icons-material/Layers';
import type { MenuProps } from 'antd';
import { Avatar, Layout, Menu, Popover, theme } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import Logo from '@/Components/Shared/Logo';
import UserOptions from '@/Components/Bars/UserOptions';
import { usePathname, useRouter } from 'next/navigation';


const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
};


const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const { currentUser } = useSelector((state: RootState) => state.user)
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter()
    const path = usePathname()
    const [selected, setSelected] = useState(0)

    const navigateHandler = (e: any) => {
        console.log(e);
        menuItems.forEach((item, index) => {
            if (item.key === e.key) {
                setSelected(index)
                return router.push(item.path)
            }
            else if (item.children) {
                item.children.forEach((child, index) => {
                    if (child.key === e.key) {
                        setSelected(index)
                        return router.push(child.path)
                    }
                    else if (child.children) {
                        child.children.forEach((child, index) => {
                            if (child.key === e.key) {
                                setSelected(index)
                                return router.push(child.path)
                            }
                        })
                    }
                })
            }

        })
    }
    const menuItems = useMemo(() => [
        {
            icon: <TeamOutlined />,
            label: 'All Users',
            path: '/admin',
            key: '0',
        },
        // {
        //     icon: <ShopOutlined />,
        //     label: 'Products',
        //     path: '/admin/products',
        //     key: '32',
        //     children: [
        //         {
        //             label: 'All Products',
        //             path: '/admin/products',
        //             key: '33',
        //         },
        //         {
        //             label: 'Add New Product',
        //             path: '/admin/products/add',
        //             key: '34',
        //         },
        //     ]
        // },
        {
            icon: <DiscountIcon />,
            label: 'Vouchers',
            path: '/admin/vouchers',
            key: '5',
            children: [
                {
                    label: 'All Vouchers',
                    path: '/admin/vouchers',
                    key: '6',
                },
                {
                    label: 'Add New Voucher',
                    path: '/admin/vouchers/add',
                    key: '7',
                },
            ]
        },
        {
            icon: <LayersIcon />,
            label: 'Pages',
            path: '/admin/pages',
            key: '8',
            children: [
                {
                    label: 'Home Page',
                    path: '/admin/pages/home',
                    key: '9',
                    children: [
                        {
                            label: 'Hero Area',
                            path: '/admin/pages/home#hero',
                            key: '10',
                        },
                        {
                            label: 'Shop by Category',
                            path: '/admin/pages/home/#shop-by-category',
                            key: '11',
                        },
                        {
                            label: 'Voucher & Discount',
                            path: '/admin/pages/home#voucher-discount',
                            key: '112',
                        },
                        {
                            label: 'Trending Products',
                            path: '/admin/pages/home#Trending-Products',
                            key: '113',
                        }, {
                            label: 'Why Shop With Us',
                            path: '/admin/pages/home#Why-Shop',
                            key: '114',
                        }, {
                            label: 'Featured Brands',
                            path: '/admin/pages/home#Featured-Brands',
                            key: '115',
                        }, {
                            label: 'Newsletter',
                            path: '/admin/pages/home#Newsletter',
                            key: '116',
                        }, {
                            label: 'FAQ',
                            path: '/admin/pages/home/faq',
                            key: '117',
                        },
                    ]
                },
                {
                    label: 'Product Page',
                    path: '/admin/pages/product',
                    key: '213',
                }, {
                    label: 'Voucher Page',
                    path: '/admin/pages/voucher',
                    key: '214',
                },
                {
                    label: 'About Page',
                    path: '/admin/pages/about',
                    key: '13',
                },
                {
                    label: 'Team',
                    path: '/admin/pages/team',
                    key: '1325',
                },
                {
                    label: 'Contact Us',
                    path: '/admin/pages/contact',
                    key: '1353',
                }, {
                    label: 'Wishlist',
                    path: '/admin/pages/wishlist',
                    key: '1323',
                }
            ]
        }
    ], []);

    useEffect(() => {
        menuItems.forEach((item: any, index) => {
            if (path.includes(item.path)) {
                setSelected(index)
            }
        })
    }, [path, menuItems])

    return (
        <Layout hasSider>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={siderStyle}
                width={250}
            >
                {/* <Logo path='/admin' color='white'/> */}
                <Menu theme="dark"
                    className='text-base h-full overflow-y-auto'
                    selectedKeys={[`${selected}`]} mode="inline" items={menuItems.map((item, index) => ({
                        ...item,
                        key: String(index),
                        onClick: navigateHandler
                    }))}

                />
            </Sider>
            <Layout style={{ marginInlineStart: collapsed ? 60 : 250 }}>
                <Header style={{ background: colorBgContainer }}
                    className='flex justify-between items-center lg:px-10'
                >
                    <Logo path='/admin' />
                    <Popover title={"User Options"} trigger={"click"} content={<UserOptions />}
                        className='hidden lg:block'
                    >
                        <Avatar
                            size={40}
                            className='border border-primary cursor-pointer'
                            src={currentUser?.profile} />
                    </Popover>
                </Header>
                <Content style={{  overflow: 'initial', minHeight: '80vh' }}
                    className='bg-white lg:p-10 py-5 pl-5 pr-3 my-4 lg:mx-10 rounded-lg mx-2'
                >
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    B2B ©{new Date().getFullYear()}  All Rights Reserved
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;