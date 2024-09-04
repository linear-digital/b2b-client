import Link from 'next/link';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ShopCategory = () => {
    return (
        <div className='container '>
            <h2 className='messiri text-3xl mt-4'>
                Shop by Category
            </h2>
            <div className="flex items-center justify-between mt-8">
                <ul className='flex items-center gap-x-4 text-[#898989]'>
                    <li>
                        <button className='text-primary'>
                            All
                        </button>
                    </li>
                    <li>
                        <button>
                            Fashion
                        </button>
                    </li>
                    <li>
                        <button>
                            Home Appliances
                        </button>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button>
                        <ArrowBackIosIcon />
                    </button>
                    <button>
                        <ArrowForwardIosIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopCategory;