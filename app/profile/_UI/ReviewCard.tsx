import { Avatar, Card,  Rate } from 'antd';
import React from 'react';
import DeleteImg from './delete.png';
import Image from 'next/image';
const ReviewCard = () => {
    return (
        <Card className='border-0 bg-[#F7F7F7]'>
            <div className="flex justify-between">
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-4">
                            <Avatar size={50} />
                            <div>
                                <h3 className='messiri text-[20px]'>
                                    Joe Weeks
                                </h3>
                                <h5 className='text-[#898989]'>
                                    8/26/2024
                                </h5>
                            </div>
                        </div>
                        <button>
                            <Image src={DeleteImg} alt="delete" width={40} height={40} />
                        </button>
                    </div>
                    <p className='mt-4 text-[#898989] text-[14px] max-w-[632px]'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
                    </p>
                    <Rate className='mt-3' defaultValue={5} />
                </div>
            </div>
        </Card>
    );
};

export default ReviewCard;