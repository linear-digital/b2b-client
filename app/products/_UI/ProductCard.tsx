import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const ProductCard = () => {
    return (
        <div className='w-full relative'>
            <Image src={'/products/apple.png'} alt="login" width={290} height={300} className={'object-cover max-h-[300px] rounded-lg'} />
            <div className='mt-3 px-2'>
                <h3 className='text-[18px] font-semibold'>
                    Apple iPhone 14 Pro
                </h3>
                <div className="flex mt-1 items-center gap-x-2">
                    <StarIcon className='text-[#FDCC0D]' />
                    <span className='text-[#898989]'>
                        4.9
                    </span>
                </div>
                <h3 className='text-[18px] font-semibold text-black'>
                    $999.00
                </h3>
            </div>
            <div className="absolute top-4 left-4 bg-primary text-white rounded px-2 text-sm">70%</div>
            <button className='absolute top-4 right-5 hover:text-red-500'>
                <FavoriteBorderIcon />
            </button>
        </div>
    );
};

export default ProductCard;