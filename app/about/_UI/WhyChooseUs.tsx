import Image from 'next/image';
import React from 'react';

const WhyChooseUs = () => {
    const items = [
        {
            image: "/icons/trust.png",
            title: "Trustworthy",
            description: "We partner with reputable merchants and brands, so you can shop with confidence."
        },
        {
            image: "/icons/front-end.png",
            title: "User-Centric",
            description: "Our platform is designed with you in mind, offering intuitive navigation and powerful filters to help you find the perfect product."
        },
        {
            image: "/icons/mind-map.png",
            title: "Comprehensive",
            description: "From tech gadgets to fashion, we cover a wide range of categories to cater to all your shopping needs."
        }
    ]
    return (
        <div className='min-h-[450px] bg-[#8E9E84] py-10 flex flex-col justify-center'>
            <div className="container mx-auto">
                <h1 className='sec-title text-white'>
                    Why Choose Us?
                </h1>
                <div className="grid grid-cols-3 gap-5 mt-14">
                {items.map((item, index) => <ItemCard data={item} key={index} />)}
            </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;

const ItemCard = ({ data }: { data: { image: string, title: string, description: string } }) => {
    return <div>
        <Image src={data.image} alt="login" width={80} height={80} />
        <h2 className='text-[20px] font-semibold text-white mt-5'>{data.title}</h2>
        <p className='text-white text-[16px] mt-1 max-w-[400px]'>{data.description}</p>
    </div>
}