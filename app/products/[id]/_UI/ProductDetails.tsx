import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { colors } from '@/Components/Pages/Products/Filter';
import { ProductType } from '@/app/admin/products/data';
import { PType } from '../../_UI/ProductContainer';
const ProductDetails = ({product}: {product: PType}) => {
    return (
        <div>
            <h2 className='messiri lg:text-[36px] text-[25px]'>
               {product?.title}
            </h2>
            <h3 className='text-[28px] font-semibold mt-4'>
                ${product?.price}
            </h3>
            <div className="flex items-center gap-2 mt-2">
                <StarIcon className='text-yellow-500' />
                <h4 className='text-[14px] text-[#898989]'>
                    ({product?.rating}/5 from {product?.reviews.length} reviews)
                </h4>
            </div>
            <h2 className='text-[18px] font-semibold mt-4'>
                Color
            </h2>
            <div className='mt-2  flex  gap-x-2 gap-y-1 items-center'
            >
                {
                    colors.map((color, index) => {
                        return <div key={index} className={`p-[3px] border-2 w-[27px] h-[27px] rounded-full ${color === "black" ? 'border-gray-300' : 'border-transparent'}`}>
                            <div
                                className={`text-2xl rounded-full cursor-pointer`}
                                style={{
                                    backgroundColor: color,
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                    })

                }

            </div>
            <h2 className='text-[18px] mt-3'>
                <span className='text-[#898989]'>
                    Availability:
                </span>
                <span className='ml-2'>
                    In Stock
                </span>
            </h2>
            <h2 className='text-[27px] font-semibold mt-3'>
                Product details
            </h2>
            <p className='text-[14px] text-[#898989] mt-1'>
               {product?.description}
            </p>
            <div className="flex mt-6 gap-5">
                <button className='border border-primary rounded-lg px-4 py-[14px] hover:bg-primary text-primary hover:text-white text-sm'>
                    Add to wishlist
                </button>
                <button className='border border-primary rounded-lg px-5 py-[14px] bg-primary text-white text-sm'>
                    Buy now
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;