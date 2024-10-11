import { Container } from '@/Components/Shared/Global';
import fetcher from '@/Components/util/axios';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React from 'react';

const OurMission = () => {
    const { data } = useQuery({
        queryKey: ['Our Mission'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Our Mission"
                }
            })
            return res
        },
    })
    return (
        <Container className='lg:py-16 py-10 px-4 lg:px-0'>
            <div className="lg:flex items-center justify-between gap-x-6">
                <div>
                    <h2 className='sec-title'>
                        {data?.title}
                    </h2>
                    <p className='lg:text-[25px] text-[14px] text-[#5B5B5B] max-w-[610px] mt-3 lg:leading-[39px]'>
                        {data?.desc}
                    </p>
                </div>
                <Image
                    src={"/images/about/mission.png"}
                    alt="mission"
                    width={610}
                    height={525}
                    className='mt-4 lg:mt-0 rounded-lg'
                />
            </div>
        </Container>
    );
};

export default OurMission;