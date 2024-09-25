import { Rate } from 'antd';
import Image from 'next/image';
import React from 'react';
const ratingsData = [
    { stars: 5, value: 40 },
    { stars: 4, value: 30 },
    { stars: 3, value: 22 },
    { stars: 2, value: 10 },
    { stars: 1, value: 8 },
];
const CustomerReview = () => {
    return (
        <div className='container mx-auto py-16 px-4 lg:px-0'>
            <h2 className='sec-title'>
                Customer reviews & ratings
            </h2>
            <p className='max-w-[750px] mt-4 text-[#898989]' >
                Read genuine customer reviews and ratings to make confident decisions. Share your experience to help others and shape better products.
            </p>
            <div className="flex lg:flex-row flex-col mt-10 lg:items-end">
                <div>
                    <Image src={'/images/hart.png'} width={76} height={76} alt='Hart' />
                    <h2 className='text-[24px] font-semibold mt-4'>
                        User reviews
                    </h2>
                    <div className="flex mt-3 items-center gap-3">
                        <Rate allowHalf defaultValue={4.9} />
                        <h2 className='text-[18px] font-semibold'>
                            4.9/5
                        </h2>
                    </div>
                    <h3 className='text-[16px] mt-5' >
                        200 reviews
                    </h3>
                </div>
                <div className="lg:ml-20 mt-5 lg:mt-0">
                    {ratingsData.map((rating, index) => (
                        <RatingBar key={index} stars={rating.stars} value={rating.value} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;

const RatingBar = ({ stars, value }: { stars: number; value: number }) => {
    return (
        <div className="flex items-center mt-2 lg:w-[455px] w-full">
            <h5 className="flex text-gray-700 min-w-[50px]">{stars} Star</h5>
            <div className="w-full h-[10px] bg-gray-200 rounded-lg overflow-hidden mx-3">
                <div className="bg-[#FDCC0D] h-full"
                style={{
                    width: `${value}%`,
                }}
                ></div>
            </div>
            <span className="w-8 text-gray-700">{value}</span>
        </div>
    );
};