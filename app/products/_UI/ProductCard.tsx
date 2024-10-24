import Image from 'next/image';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';
import { PType } from './ProductContainer';
import { useRouter } from 'next/navigation';
import { ProductType } from '@/Components/util/type';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/store';
import toast from 'react-hot-toast';
import { errorDisplay } from '@/Components/util/readError';
import fetcher from '@/Components/util/axios';
const ProductCard = ({ data }: { data: ProductType }) => {
    const router = useRouter();
    const { currentUser } = useSelector((state: RootState) => state.user)

    const addWIshList = async () => {
        if (!currentUser) {
            return toast.error('Please login first')
        }
        try {
            const res = await fetcher({
                url: `/wishlist`,
                method: 'POST',
                body: {
                    ...data,
                    user: currentUser?._id
                }
            })
            toast.success('Product added to wishlist')
        } catch (error: any) {
            toast.error(errorDisplay(error))
        }
    }
    return (
        <div className='w-full relative'>
            <div className='max-h-[400px] h-[400px] w-full bg-white flex justify-center items-center rounded-lg p-5'>
                <Image
                    src={data?.images[0]?.url || '/placeholder.png'} alt="Product Image" width={1000} height={1000}
                    quality={100}
                    loading='lazy'
                    className={' rounded-lg h-[300px] w-[300px] object-contain cursor-pointer '}
                    onClick={() => router.push(`/products/${data?.offerId}`)}
                />
            </div>
            <Link href={`/products/${data?.offerId}`} className='mt-3 px-2'>
                <h3 className='text-[18px] font-semibold'>
                    {data?.title}
                </h3>
                {/* <div className="flex mt-1 items-center gap-x-2">
                    <StarIcon className='text-[#FDCC0D]' />
                    <span className='text-[#898989]'>
                        {5}
                    </span>
                </div> */}
                <h3 className='text-[18px] font-semibold text-black'>
                    ${data?.price}
                </h3>
            </Link>
            {
                !!data?.rebatePercentage &&
                <div className="absolute top-4 left-4 bg-primary text-white rounded px-2 text-sm">
                    {data?.rebatePercentage}%
                </div>
            }

            <button
                onClick={addWIshList}
                className='absolute top-4 right-5 hover:text-red-500'>
                <FavoriteBorderIcon />
            </button>
        </div>
    );
};

export default ProductCard;