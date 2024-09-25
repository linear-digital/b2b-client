import React, { Suspense } from 'react';
import UserTable from './_UI/UserTable';
import { Spin } from 'antd';

const page = () => {
    return (
        <Suspense fallback={<Spin size='large' />}>
            <h2 className='text-2xl pb-3'>All Users</h2>
            <UserTable />
        </Suspense>
    );
};

export default page;