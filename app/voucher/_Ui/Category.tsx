'use client'
import fetcher from '@/Components/util/axios';
import { useQuery } from '@tanstack/react-query';
import { Spin } from 'antd';
import React from 'react';

type CategoryType = {
    _id: string,
    count: number,
}

const Category = () => {
    const [selected, setSelected] = React.useState(0);
    const {data, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            return await fetcher({
                url: '/vouchers/statistics',
                method: 'GET'
            })
        }
    })
    const categorys = data as CategoryType[]
    if (isLoading) {
        return <Spin size='large'/>
    }
    return (
        <div className='w-[295px] lg:block hidden  p-5 min-w-[295px] h-auto bg-white rounded-xl '>
            <h1 className='text-[28px] messiri font-medium'>Category</h1>
            <div className="flex flex-col gap-y-2 mt-6">
                {
                    categorys.map((category, index) => (
                        <div className={`w-full flex items-center justify-between ${selected === index ? 'text-black' : 'text-[#898989]'} cursor-pointer`} key={index}
                            onClick={() => setSelected(index)}
                        >
                            <h5>{category._id}</h5>
                            <h5>{category.count}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;

export const categories = [
    { name: "All", value: 332 },
    { name: "Electronics", value: 32 },
    { name: "Computers & Accessories", value: 11 },
    { name: "Smartphones & Tablets", value: 9 },
    { name: "Home Appliances", value: 18 },
    { name: "Fashion & Clothing", value: 17 },
    { name: "Footwear", value: 20 },
    { name: "Beauty & Personal Care", value: 7 },
    { name: "Health & Wellness", value: 5 },
    { name: "Sports & Fitness", value: 16 },
    { name: "Toys & Games", value: 3 },
    { name: "Books & Stationery", value: 2 },
    { name: "Automotive", value: 12 },
    { name: "Furniture & Home Decor", value: 8 },
    { name: "Kitchen & Dining", value: 10 },
    { name: "Outdoor & Garden", value: 1 },
    { name: "Pet Supplies", value: 15 },
    { name: "Music & Instruments", value: 4 },
    { name: "Baby & Kids", value: 6 },
    { name: "Office Supplies", value: 13 },
    { name: "Gadgets & Accessories", value: 14 }
];