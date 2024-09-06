import React from 'react';
import ReviewCard from './ReviewCard';
import { Card } from 'antd';

const Reviews = () => {
    return (
        <Card className='border-0'>
            <h3 className='messiri text-[28px]'>
                Reviews and Ratings
            </h3>
            <div className='flex flex-col gap-4 mt-5'>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </Card>
    );
};

export default Reviews;