'use client';
import React from 'react';
import SectionTop from './_Ui/SectionTop';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';
import { Spin } from 'antd';
import AddTeamMember from './_Ui/AddTeamMember';
import Members from './_Ui/Members';

const Page = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['Our Team'],
        queryFn: () => {
            return fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "Our Team"
                }
            })
        },
    })
    if (isLoading) {
        return <Spin size='large' />
    }
    return (
        <div>
            <SectionTop data={data} refetch={refetch} />
            <AddTeamMember rootData={data} refetch={refetch} />
            <h1 className='text-3xl font-semibold mt-5'>Members List</h1>
            <Members data={data} refetch={refetch}/>
        </div>
    );
};

export default Page;