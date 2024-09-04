import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
const ProductCard = () => {
    return (
        <div>
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
        </div>
    );
};

export default ProductCard;