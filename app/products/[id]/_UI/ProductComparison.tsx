import Image from 'next/image';
import React from 'react';

const ProductComparison = () => {
    return (
        <div className='bg-black min-h-[400px] w-full mt-16 text-white py-10' >
            <div className="container mx-auto">
                <h1 className='sec-title'>
                    Product Comparison
                </h1>
                <p className='text-[18px] text-[#898989] w-[749px] mt-4'>
                    Easily compare features, prices, and reviews of your favorite products. Multiple items to see how they stack up against each other and make an informed decision before purchasing.
                </p>
                <div className='mt-16'>
                    <table className="table-auto border-collapse w-full text-left">
                        <thead>
                            <tr>
                                <th className="px-4 py-2" >
                                    <h2 className='text-[#FFFFFF] text-[36px]'>
                                        Features
                                    </h2>
                                </th> {/* Empty column for titles */}
                                <th className="px-4 py-2 text-center">
                                    <div className='flex flex-col items-center gap-y-2'>
                                        <Image
                                            src={'/products/watch-1.png'}
                                            width={121}
                                            height={146}
                                            alt="login"
                                        />
                                        <h2 >
                                            Product A
                                        </h2>
                                    </div>
                                </th>
                                <th className="px-4 py-2 text-center">
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
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Price</td>
                                <td className="border px-4 py-2 text-center">$2,499.00</td>
                                <td className="border px-4 py-2 text-center">$2,499.00</td>

                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Brand</td>
                                <td className="border px-4 py-2 text-center">Brand A</td>
                                <td className="border px-4 py-2 text-center">Brand A</td>

                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Ratings</td>
                                <td className="border px-4 py-2 text-center">4.5/5 From 1,200 reviews</td>
                                <td className="border px-4 py-2 text-center">4.5/5 From 1,200 reviews</td>

                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Battery Life</td>
                                <td className="border px-4 py-2 text-center">10 hours</td>
                                <td className="border px-4 py-2 text-center">10 hours</td>

                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Weight</td>
                                <td className="border px-4 py-2 text-center">1.2 kg</td>
                                <td className="border px-4 py-2 text-center">1.2 kg</td>

                            </tr>
                            <tr>
                                <td className="border px-4 py-2 font-bold">Availability</td>
                                <td className="border px-4 py-2 text-center text-green-500">In Stock</td>
                                <td className="border px-4 py-2 text-center text-green-500">In Stock</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className="flex justify-center mt-2">
                                        <button className='border text-white px-4 py-2 rounded-lg'>Add to wishlist</button>
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