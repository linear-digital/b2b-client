import Image from 'next/image';
import React from 'react';

const Why = () => {
    const items = [
        {
            image: "/icons/checklist.png",
            title: "Product Variety",
            description: "Compare thousands of products across multiple categories."
        },
        {
            image: "/icons/ab-testing.png",
            title: "Precise Comparisons",
            description: "Accurate comparisons with real-time data from top merchants."
        },
        {
            image: "/icons/filter.png",
            title: "Smart Filtering",
            description: "User-friendly interface with advanced filtering options."
        },
        {
            image: "/icons/design.png",
            title: "Seamless Everywhere",
            description: "Seamless experience across all devices."
        }
    ]
    return (
        <div className='min-h-[450px] bg-[#8E9E84] mt-20 py-10 flex flex-col justify-center'>
            <div className="container mx-auto">
                <h1 className='sec-title text-white'>
                    Why Shop with Us?
                </h1>
                <div className="grid grid-cols-4 gap-5 mt-14">
                {items.map((item, index) => <ItemCard data={item} key={index} />)}
            </div>
            </div>
        </div>
    );
};

export default Why;

const ItemCard = ({ data }: { data: { image: string, title: string, description: string } }) => {
    return <div>
        <Image src={data.image} alt="login" width={80} height={80} />
        <h2 className='text-[20px] font-semibold text-white mt-3'>{data.title}</h2>
        <p className='text-white text-[16px] mt-1'>{data.description}</p>
    </div>
}