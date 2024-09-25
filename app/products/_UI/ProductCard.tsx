import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';
import { PType } from './ProductContainer';
import { useRouter } from 'next/navigation';
const ProductCard = ({ data }: { data: PType }) => {
    const router = useRouter();
    return (
        <div className='w-full relative'>
            <div className='max-h-[400px] h-[400px] w-full bg-white flex justify-center items-center rounded-lg p-5'>
                <Image src={data?.image} alt="Product" width={300} height={300} className={' rounded-lg h-full object-contain cursor-pointer'} 
                onClick={() => router.push(`/products/${data?.slug}`)}
                />
            </div>
            <Link href={`/products/${data?.slug}`} className='mt-3 px-2'>
                <h3 className='text-[18px] font-semibold'>
                    {data?.name}
                </h3>
                <div className="flex mt-1 items-center gap-x-2">
                    <StarIcon className='text-[#FDCC0D]' />
                    <span className='text-[#898989]'>
                        {5}
                    </span>
                </div>
                {/* <h3 className='text-[18px] font-semibold text-black'>
                    ${data?.price}
                </h3> */}
            </Link>
            {/* <div className="absolute top-4 left-4 bg-primary text-white rounded px-2 text-sm">
                {data?.discountPercentage}%
            </div> */}
            <button className='absolute top-4 right-5 hover:text-red-500'>
                <FavoriteBorderIcon />
            </button>
        </div>
    );
};

export default ProductCard;