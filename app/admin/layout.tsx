
'use client';
import {
    ShopOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import DiscountIcon from '@mui/icons-material/Discount';


import React, { Children, useEffect, useMemo, useState } from 'react';

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

const items: MenuProps['items'] = [
    {
        icon: <TeamOutlined />,
        label: 'All Users',
        key: '1',
        onClick: (e: any) => {
            console.log(e);
        }
    },
    {
        icon: <ShopOutlined />,
        label: 'Products',
        key: '2',
        children: [
            {
                label: 'All Products',
                key: '3',
            },
            {
                label: 'Add New Product',
                key: '4',
            },
        ]
    },
    {
        icon: <DiscountIcon />,
        label: 'Vouchers',
        key: '5',
        children: [
            {
                label: 'All Vouchers',
                key: '6',
            },
            {
                label: 'Add New Voucher',
                key: '7',
            },
        ]
    }
    // VideoCameraOutlined,
    // UploadOutlined,
    // BarChartOutlined,
    // CloudOutlined,
    // AppstoreOutlined,
    // TeamOutlined,
    // ShopOutlined,
].map((item, index) => ({
    ...item,
    key: String(index),
}));

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
        if (e.key === '0') {
            router.push('/admin')
        }
        else if (e.key === '3') {
            router.push('/admin/products')
        }
        else if (e.key === '4') {
            router.push('/admin/products/add')
        }
        else if (e.key === '6') {
            router.push('/admin/vouchers')
        }
        else if (e.key === '7') {
            router.push('/admin/vouchers/add')
        }
    }
    const menuItems = useMemo(() => [
        {
            icon: <TeamOutlined />,
            label: 'All Users',
            path: '/admin',
            key: '1',
        },
        {
            icon: <ShopOutlined />,
            label: 'Products',
            path: '/admin/products',
            key: '2',
            children: [
                {
                    label: 'All Products',
                    path: '/admin/products',
                    key: '3',
                },
                {
                    label: 'Add New Product',
                    path: '/admin/products/add',
                    key: '4',
                },
            ]
        },
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
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={siderStyle}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" selectedKeys={[`${selected}`]} mode="inline" items={menuItems.map((item, index) => ({
                    ...item,
                    key: String(index),
                    onClick: navigateHandler
                }))} />
            </Sider>
            <Layout style={{ marginInlineStart: 200 }}>
                <Header style={{ background: colorBgContainer }}
                    className='flex justify-between items-center px-10'
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
                <Content style={{ margin: '24px 16px 0', overflow: 'initial', minHeight: '80vh' }}
                    className='bg-white p-5 rounded-lg'
                >
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;