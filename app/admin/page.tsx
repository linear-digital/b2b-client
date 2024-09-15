import React from 'react';
import UserTable from './_UI/UserTable';

const page = () => {
    return (
        <div>
            <h2 className='text-2xl pb-3'>All Users</h2>
            <UserTable />
        </div>
    );
};

export default page;