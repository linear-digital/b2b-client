import { Card } from 'antd';
import Image from 'next/image';
import React from 'react';
import DeleteImg from '../delete.png';
import { ProductType } from '@/Components/util/type';
import fetcher from '@/Components/util/axios';
import toast from 'react-hot-toast';
import { errorDisplay } from '@/Components/util/readError';
import Link from 'next/link';
const WishListCard = ({ product, refetch }: { product: any, refetch: any }) => {
    const deleteProduct = async () => {
        try {
            const response = await fetcher({
                url: `/wishlist/${product?._id}`,
                method: 'DELETE'
            })
            refetch()
            toast.success('Item deleted successfully')
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    return (
        <Card className='border-0  relative'>
            <div className="flex lg:flex-row flex-col gap-x-5">
                <Image src={product?.images[0]?.url} alt="Product" width={190} height={190}
                    className='min-w-[190px] object-contain max-h-[200px] '
                />
                <div className='w-full mt-4 lg:mt-0'>
                    <div className="flex items-center justify-between">
                        <h2 className='messiri text-[18px] font-semibold'>
                            {product?.title}
                        </h2>
                        <Image
                            onClick={deleteProduct}
                            src={DeleteImg}
                            width={44}
                            height={44}
                            alt='delete'
                            className='absolute lg:relative top-[30px] right-[30px] cursor-pointer'
                        />
                    </div>
                    <p className='max-w-[485px] text-[#898989] text-[14px] min-h-[50px]'>
                        {product?.description?.slice(0, 250)}
                    </p>
                    <div className="lg:flex items-center justify-between mt-4">
                        <h3 className='text-[28px] font-medium '>
                            ${product?.price}
                        </h3>
                        <div className="flex items-center gap-x-3 lg:mt-0 mt-4">
                            <Link href={`/products/${product?.offerId}`}>
                                <button className='btn-primary active'>
                                    View Deals
                                </button>
                            </Link>
                            <a href={product.goUrl}>
                                <button className='btn-primary-active'>
                                    Go to store
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default WishListCard;