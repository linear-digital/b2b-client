import { Avatar, Card, Image, Rate } from 'antd';
import React from 'react';

const AllReviews = () => {
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
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
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

const ReviewCard = () => {
    return <Card className='border-0'>
        <div className="lg:flex justify-between">
            <div>
                <div className="flex items-center gap-x-4">
                    <Avatar size={60} />
                    <div>
                        <h3 className='messiri text-[20px]'>
                            Joe Weeks
                        </h3>
                        <h5 className='text-[#898989]'>
                            Today
                        </h5>
                    </div>
                </div>
                <p className='mt-4 text-[#898989] text-[14px] lg:text-[16px] max-w-[632px]'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
                </p>
                <Rate className='mt-3' defaultValue={5} />
            </div>
            <div className='flex gap-4 lg:mt-0 mt-4'>
                <Image src={'/products/watch.png'} alt="quote" 
                    className='border h-full rounded-lg overflow-hidden max-h-[100px] lg:max-h-[216px] '
                />
                <Image src={'/products/watch.png'} alt="quote" 
                    className='border h-full rounded-lg overflow-hidden max-h-[100px] lg:max-h-[216px] '
                />

            </div>
        </div>
    </Card>
}