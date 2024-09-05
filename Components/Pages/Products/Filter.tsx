'use client'
import { HR } from '@/Components/Shared/Global';
import { CaretDownOutlined, CaretUpOutlined, CheckCircleOutlined, CheckOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { Checkbox, Radio, Rate, Switch } from 'antd';
import React from 'react';

const Filter = () => {
    const [showrange, setShowrange] = React.useState(true);
    const [showBrands, setShowBrands] = React.useState(false);
    const [showColor, setShowColor] = React.useState(false);
    const [showAvailable, setShowAvailable] = React.useState(true);
    const colors = ["black", "red", "blue", "green", "yellow", "orange"];
    const [filter, setFilter] = React.useState({
        color: "",
        rate: 0
    })
    return (
        <div className='min-w-[295px] max-w-[300px]  bg-white rounded-lg p-5'>
            <h1 className='messiri text-[28px]'>
                Filter
            </h1>
            <select
                className='w-full mt-8 outline-none border-none bg-transparent font-semibold text-[16px] text-black'
            >
                <option value="">Category</option>
                <option value="all">All Products</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home</option>
                <option value="sports">Sports</option>
                <option value="beauty">Beauty</option>
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