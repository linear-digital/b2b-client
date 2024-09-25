import { Avatar, Card, Image, Rate } from 'antd';
import React from 'react';
import { PType } from '../../_UI/ProductContainer';
import moment from 'moment';

const AllReviews = ({ data }: { data: PType }) => {
    return (
        <section className='mt-10 container mx-auto lg:p-0 p-4'>
            <div className="flex items-center justify-between">
                <h2 className='messiri lg:text-[28px] text-[25px]'>
                    All reviews
                </h2>
                <button className='bg-primary text-white px-5 lg:px-8 py-4 text-sm rounded-xl'>
                    Write a review
                </button>

            </div>
            <div className="mt-10 flex flex-col gap-y-4">
                {
                    data.reviews.map((review: any, index: number) => {
                        return <ReviewCard key={index} data={review} />
                    })
                }
            </div>
            <div className="flex mt-10 justify-center">
                <button className='border border-black text-black px-8 py-3 text-sm rounded-xl font-medium'>
                    Load more
                </button>
            </div>
        </section>
    );
};

export default AllReviews;

const ReviewCard = ({ data }: { data: any }) => {
    return <Card className='border-0'>
        <div className="lg:flex justify-between">
            <div>
                <div className="flex items-center gap-x-4">
                    <Avatar size={60} />
                    <div>
                        <h3 className='messiri text-[20px]'>
                            {data?.reviewerName}
                        </h3>
                        <h5 className='text-[#898989]'>
                            {moment(data?.date).fromNow()}
                        </h5>
                    </div>
                </div>
                <p className='mt-4 text-[#898989] text-[14px] lg:text-[16px] max-w-[632px]'>
                 {data?.comment}
                </p>
                <Rate className='mt-3' defaultValue={data?.rating} />
            </div>
            {/* <div className='flex gap-4 lg:mt-0 mt-4'>
                <Image src={'/products/watch.png'} alt="quote"
                    className='border h-full rounded-lg overflow-hidden max-h-[100px] lg:max-h-[216px] '
                />
                <Image src={'/products/watch.png'} alt="quote"
                    className='border h-full rounded-lg overflow-hidden max-h-[100px] lg:max-h-[216px] '
                />

            </div> */}
        </div>
    </Card>
}