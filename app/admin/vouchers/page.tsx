import React from 'react';
import VoucherTable from './_UI/VoucherTable';

const page = () => {
    return (
        <div>
            <h2 className='text-2xl pb-3'>All Vouchers</h2>
            <VoucherTable />
        </div>
    );
};

export default page;