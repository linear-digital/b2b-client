import { Card } from 'antd';
import React from 'react';
import WishListCard from './WishlistCard';

const WishLists = () => {
    return (
        <Card className='border-0'>
            <h3 className='messiri text-[28px]'>
                WishLists
            </h3>
            <div className='flex flex-col gap-4 mt-5'>
                <WishListCard />
                <WishListCard />
                <WishListCard />
                <WishListCard />
            </div>
        </Card>
    );
};

export default WishLists;