// import { Card } from 'antd';
// import Image from 'next/image';
// import React from 'react';
import DeleteImg from './delete.png';
import WishImg from '../../wishlist/image.png';
// const WishListCard = () => {
//     return (
//         <Card className='border-0 bg-[#F7F7F7]'>
//             <div className="flex gap-x-5">
//                 <Image src={WishImg} alt="login" width={140} height={140} />
//                 <div className='w-full'>
//                     <div className="flex items-center justify-between">
//                         <h2 className='messiri text-[18px] font-semibold'>
//                             Apple MacBook Pro 16-inch
//                         </h2>
//                         <Image
//                             src={DeleteImg}
//                             width={44}
//                             height={44}
//                             alt='delete'
//                         />
//                     </div>
//                     <h3 className='text-[28px] font-medium'>
//                         $2,499.00
//                     </h3>
//                     <div className="flex items-center justify-between mt-4">

//                         <div className="flex items-center gap-x-3">
//                             <button className='btn-primary active'>
//                                 View Deals
//                             </button>
//                             <button className='btn-primary-active'>
//                                 Go to store
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Card>
//     );
// };

// export default WishListCard;

import { Card } from 'antd';
import Image from 'next/image';
import React from 'react';
import { ProductType } from '@/Components/util/type';
import fetcher from '@/Components/util/axios';
import toast from 'react-hot-toast';
import { errorDisplay } from '@/Components/util/readError';
import Link from 'next/link';

const WishListCard = ({ data, refetch }: { data: any, refetch: any }) => {
    const deleteProduct = async () => {
        try {
            const response = await fetcher({
                url: `/wishlist/${data?._id}`,
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
            <div className="flex lg:flex-row flex-col lg:items-start gap-x-5">
                <Image src={data?.images[0].url} alt="Product" width={140} height={140}
                    className='w-full lg:max-w-[140px] h-auto lg:w-auto'
                />
                <div className='w-full mt-4 lg:mt-0'>
                    <div className="flex items-center justify-between">
                        <h2 className='messiri text-[18px] font-semibold'>
                            {data.title}
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
                    <div className="">
                        <h3 className='text-[28px] font-medium'>
                            ${data.price}
                        </h3>
                        <div className="flex items-center gap-x-3 lg:mt-0 mt-4">
                            <Link href={`/products/${data?.offerId}`}>
                                <button className='btn-primary active'>
                                    View Deals
                                </button>
                            </Link>
                            <a href={data.goUrl}>
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