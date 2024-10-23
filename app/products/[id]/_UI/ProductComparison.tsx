import Image from 'next/image';
import React from 'react';
import { PType } from '../../_UI/ProductContainer';
import { ProductType } from '@/Components/util/type';

const ProductComparison = ({ product, price }: { product: ProductType, price: number }) => {
    return (
        <div className='bg-black min-h-[400px] w-full mt-16 text-white py-10 lg:px-0 px-4' >
            <div className="container mx-auto">
                <h1 className='sec-title'>
                    Product Comparison
                </h1>
                <p className='lg:text-[18px] text-[14px] text-[#898989] max-w-[749px] mt-4'>
                    Easily compare features, prices, and reviews of your favorite products. Multiple items to see how they stack up against each other and make an informed decision before purchasing.
                </p>
                <div className='mt-16 overflow-x-auto '>
                    <table className="table-auto border-collapse w-full text-left ">
                        <thead >
                            <tr className='lg:table-row flex flex-col'>
                                <th className="px-4 py-2" >
                                    <h2 className='text-[#FFFFFF] text-[36px]'>
                                        Features
                                    </h2>
                                </th> {/* Empty column for titles */}
                                <th className="px-4 py-2 text-center">
                                    <div className='flex flex-col items-center gap-y-2'>
                                        <Image
                                            src={product?.images[0]?.url}
                                            width={151}
                                            height={160}
                                            alt="Product Image "
                                            className='bg-white rounded-lg overflow-hidden p-2'
                                        />
                                        <h2 >
                                            {product?.title}
                                        </h2>
                                    </div>
                                </th>
                                {/* <th className="px-4 py-2 text-center">
                                    <div className='flex flex-col items-center gap-y-2'>
                                        <Image
                                            src={'/products/text-2.png'}
                                            width={121}
                                            height={146}
                                            alt="login"
                                        />
                                        <h2 >
                                            Product B
                                        </h2>
                                    </div>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Price</td>
                                <td className="border px-4 py-2 text-center">${price}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Brand</td>
                                <td className="border px-4 py-2 text-center">
                                    {product?.brand.name}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Ratings</td>
                                <td className="border px-4 py-2 text-center">
                                    {/* {4}/5 From {10} reviews */}
                                    N/A
                                </td>


                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Condition</td>
                                <td className="border px-4 capitalize py-2 text-center">{product?.condition}</td>


                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Dimensions</td>
                                <td className="border px-4 py-2 text-center">{0}x{0}x{0}</td>


                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Availability</td>
                                <td className="border px-4 py-2 text-center text-green-500">
                                    {product?.availabilityStatus}
                                </td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Warranty</td>
                                <td className="border px-4 py-2 text-center text-green-500">
                                    {product?.warranty || "N/A"}
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <div className="flex justify-center mt-2">
                                        <button className='border text-white px-4 py-2 rounded-lg lg:text-base text-sm '>Add to wishlist</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductComparison;