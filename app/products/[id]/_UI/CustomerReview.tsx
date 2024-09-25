import { Rate } from 'antd';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { PType } from '../../_UI/ProductContainer';

const CustomerReview = ({ data }: { data: PType }) => {
    const [ratingsData, setRadingData] = React.useState({
        start1: 0,
        start2: 0,
        start3: 0,
        start4: 0,
        start5: 0
    })
    // useEffect(() => {
    //     if (data.reviews) {
    //         const start1 = data.reviews.filter((review: any) => review.rating === 1).length
    //         const start2 = data.reviews.filter((review: any) => review.rating === 2).length
    //         const start3 = data.reviews.filter((review: any) => review.rating === 3).length
    //         const start4 = data.reviews.filter((review: any) => review.rating === 4).length
    //         const start5 = data.reviews.filter((review: any) => review.rating === 5).length
    //         setRadingData({
    //             start1,
    //             start2,
    //             start3,
    //             start4,
    //             start5
    //         })
    //     }
    // }, [data.reviews])
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
                            {5}/5
                        </h2>
                    </div>
                    <h3 className='text-[16px] mt-5' >
                        {1} reviews
                    </h3>
                </div>
                <div className="lg:ml-20 mt-5 lg:mt-0">
                <RatingBar  stars={5} value={ratingsData.start5} />
                <RatingBar  stars={4} value={ratingsData.start4} />
                <RatingBar  stars={3} value={ratingsData.start3} />
                <RatingBar  stars={2} value={ratingsData.start2} />
                <RatingBar  stars={1} value={ratingsData.start1} />
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