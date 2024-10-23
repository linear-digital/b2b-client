'use client'
import { HR } from '@/Components/Shared/Global';
import { fetcherSS } from '@/Components/util/axios';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Close } from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { Checkbox, Radio, Rate, Switch } from 'antd';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
export const colors = ["black", "red", "blue", "green", "yellow", "orange"];
const Filter = ({ setVisible }: { setVisible?: any }) => {
    const [showrange, setShowrange] = React.useState(true);
    const [showBrands, setShowBrands] = React.useState(false);
    const [showColor, setShowColor] = React.useState(false);
    const [showAvailable, setShowAvailable] = React.useState(true);

    const [filter, setFilter] = React.useState({
        color: "",
        rate: 0
    })
    const cate = useSearchParams().get('category')
    const [selected, setSelected] = React.useState(cate ? cate : '');
   
    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetcherSS({
                url: '/product/category'
            })
            return res
        },
    })
    const router = useRouter()
    return (
        <div className='min-w-[295px] lg:max-w-[300px] w-full  bg-white rounded-lg p-5'>
            <div className="flex justify-between items-center">
                <h1 className='messiri text-[28px]'>
                    Filter
                </h1>
                <button onClick={() => setVisible(false)}
                    className='lg:hidden'
                >
                    <Close />
                </button>
            </div>
            <select
                value={selected}
                className='w-full mt-8 outline-none border-none bg-transparent font-semibold text-[16px] text-black'
                onChange={(e: any) => {
                    if (e.target.value) {
                        setSelected(e.target.value)
                        router.push(`/products?category=${e.target.value}`)
                    }
                    else {
                        setSelected('')
                        router.push('/products')
                    }
                }}
            >
                <option value="">Category</option>
                {
                    categories?.map((item: any, index: number) => (
                        <option key={index} value={item?.id}>
                            {item?.name}
                        </option>
                    ))
                }
            </select>
            <HR className='my-3' />
            <div className=''>
                <button className='flex justify-between items-center w-full'
                    onClick={() => setShowrange(!showrange)}
                >
                    <h2 className='font-semibold text-[18px]'>
                        Price Range
                    </h2>
                    {
                        showrange ? <CaretUpOutlined /> : <CaretDownOutlined />
                    }
                </button>
                <div className='mt-2  flex-col gap-y-1'
                    style={{
                        display: showrange ? 'flex' : 'none'
                    }}
                >
                    <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                        $0.00 - $99
                    </Checkbox>
                    <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                        $100 - $199
                    </Checkbox>
                    <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                        $200 - $299
                    </Checkbox>
                    <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                        $300 - and above
                    </Checkbox>
                </div>
            </div>
            <HR className='my-3' />
            <div className=''>
                <button className='flex justify-between items-center w-full'
                    onClick={() => setShowBrands(!showBrands)}
                >
                    <h2 className='font-semibold text-[18px]'>
                        Brand
                    </h2>
                    {
                        showBrands ? <CaretUpOutlined /> : <CaretDownOutlined />
                    }
                </button>
                <div className='mt-2  flex-col gap-y-1'
                    style={{
                        display: showBrands ? 'flex' : 'none'
                    }}
                >
                    <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                        Samsung
                    </Checkbox>
                    <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                        Apple
                    </Checkbox>
                    <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                        HP
                    </Checkbox>
                    <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                        Lenova
                    </Checkbox>
                </div>
            </div>
            <HR className='my-3' />
            <div className=''>
                <button className='flex justify-between items-center w-full'
                    onClick={() => setShowColor(!showColor)}
                >
                    <h2 className='font-semibold text-[18px]'>
                        Color <small className='text-xs pl-1'
                            style={{
                                color: filter.color
                            }}
                        >
                            {filter.color}
                        </small>
                    </h2>
                    {
                        showColor ? <CaretUpOutlined /> : <CaretDownOutlined />
                    }
                </button>
                <div className='mt-2  flex  gap-x-2 gap-y-1 items-center'
                >
                    {
                        colors.map((color, index) => {
                            return <div key={index} className={`p-[3px] border-2 w-[27px] h-[27px] rounded-full ${filter.color === color ? 'border-gray-300' : 'border-transparent'}`}>
                                <div
                                    className={`text-2xl rounded-full cursor-pointer`}
                                    style={{
                                        backgroundColor: color,
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    onClick={() => setFilter({ ...filter, color: color })}
                                />
                            </div>
                        })

                    }

                </div>
            </div>
            <HR className='my-3' />
            <div className="flex justify-between items-center">
                <h2 className='font-semibold text-[18px]'>
                    Discount & Deals
                </h2>
                <Switch size="small" defaultChecked />
            </div>
            <HR className='my-3' />
            <div className="">
                <h2 className='font-semibold text-[18px]'>
                    Ratings
                </h2>
                <div className="mt-4">
                    <Rate tooltips={desc} count={5} value={5} />
                </div>
            </div>
            <HR className='my-3' />
            <div className="">
                <button className='flex justify-between items-center w-full'
                    onClick={() => setShowrange(!showrange)}
                >
                    <h2 className='font-semibold text-[18px]'>
                        Availability
                    </h2>
                    {
                        showrange ? <CaretUpOutlined /> : <CaretDownOutlined />
                    }
                </button>
                {
                    showAvailable && <div className="mt-4">
                        <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                            In Stock
                        </Checkbox>
                        <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                            Out of Stock
                        </Checkbox>
                    </div>
                }
            </div>
            <HR className='my-3' />
            <div className="">
                <button className='flex justify-between items-center w-full'
                    onClick={() => setShowrange(!showrange)}
                >
                    <h2 className='font-semibold text-[18px]'>
                        Release date
                    </h2>
                    {
                        showrange ? <CaretUpOutlined /> : <CaretDownOutlined />
                    }
                </button>
                {
                    showAvailable && <div className="mt-4">
                        <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                            2024
                        </Checkbox>
                        <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                            2023
                        </Checkbox>

                        <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                            2022
                        </Checkbox>

                        <Checkbox className='w-full flex items-center text-[16px] text-[#898989]'>
                            2021
                        </Checkbox>
                    </div>
                }
            </div>
            <button className='w-full mt-5 bg-primary py-3 rounded-xl text-white'>
                Reset
            </button>
        </div>
    );
};

export default Filter;

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];