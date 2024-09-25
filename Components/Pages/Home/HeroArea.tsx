
import fetcher from '@/Components/util/axios';
import { useQuery } from '@tanstack/react-query';
import { Col, Row, Skeleton } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroArea = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['hero'],
        queryFn: () => {
            return fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Hero Area"
                }
            })
        },
    })
    if (isLoading) {
        return <div className="container mx-auto py-14 lg:px-0 px-4">
            <Skeleton title />
            <Skeleton paragraph />
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <Skeleton active />
                </Col>
                <Col span={6}>
                    <Skeleton active />
                </Col>
                <Col span={6}>
                    <Skeleton active />
                </Col>
                <Col span={6}>
                    <Skeleton active />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <Skeleton active />
                </Col>
                <Col span={8}>
                    <Skeleton active />
                </Col>
                <Col span={8}>
                    <Skeleton active />
                </Col>
            </Row>
        </div>
    }
    return (
        <div className='container mx-auto py-14 lg:px-0 px-4'>
            <h1 className='text-center messiri lg:text-[48px] text-[32px] text-black font-semibold max-w-[725px] mx-auto'>
                {data?.title}
            </h1>
            <p className='text-center lg:text-lg text-[14px]  mt-4 text-[#898989]'>
                {data?.desc}
            </p>
            <div className="flex justify-center lg:mt-8 mt-5">
                <Link href={'/products'}>
                    <button className='bg-primary text-white px-8 py-4 rounded-xl' >
                        Shop Now
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-12 max-h-[480px] grid-rows-2 gap-5 mt-10">
                <div className="col-span-4 row-span-2">
                    <Image src={data?.images[0]} alt="login" width={700} height={1000} className={'h-full w-full '} loading="eager" />
                </div>
                <div className="col-span-4 row-span-1">
                    <Image src={data?.images[1]} alt="login" width={1000} height={1000} className={'h-full w-full'} />
                </div>
                <div className="col-span-4 row-span-1">
                    <Image src={data?.images[2]} alt="login" width={1000} height={1000} className={'h-full w-full'} />
                </div>
                <div className="col-span-4 row-span-1">
                    <Image src={data?.images[3]} alt="login" width={1000} height={1000} className={'h-full w-full'} />
                </div>
                <div className="col-span-4 row-span-1">
                    <Image src={data?.images[4]} alt="login" width={1000} height={1000} className={'h-full w-full'} />
                </div>
            </div>
        </div>
    );
};

export default HeroArea;