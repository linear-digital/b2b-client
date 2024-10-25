
import PageTop from '../_UI/PageTop';

import Footer from '@/Components/Bars/Footer/Footer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Navbar from '@/Components/Bars/Navbar';
import { Suspense } from 'react';
import ProductDetails from './_UI/ProductDetails';
import ProductComparison from './_UI/ProductComparison';
import CustomerReview from './_UI/CustomerReview';

import FeaturedProduct from './_UI/FeaturedProduct';
import { fetcherSS } from '@/Components/util/axios';

import { Spin } from 'antd';

import { ProductType } from '@/Components/util/type';
import ProductImage from './_UI/ProductImage';
const getProduct = async (id: string) => {
    const data = await fetcherSS({
        url: `/product/single/${id}`,
        method: 'GET',
    })
    return data
}
const Page = async ({ params }: { params: { id: string } }) => {

    const product: ProductType = await getProduct(params.id)

    return (
        <Suspense fallback={<Spin size='large' />}>
            <div className='bg-[#F7F7F7]'>
                <Navbar />
                <PageTop title='Products details' />
                <div className="container mx-auto mt-8 px-4 lg:p-0">
                    <section className='flex gap-6 items-start'>
                        <ProductImage
                            product={product}
                        />
                        <div className="hidden lg:block">
                            <ProductDetails
                                details={product}
                                price={product?.price} product={product} />
                        </div>
                    </section>
                    <div className="lg:hidden mt-8">
                        <ProductDetails price={product?.price} product={product} details={product} />
                    </div>
                </div>
                <ProductComparison product={product} price={product?.price} />
                <CustomerReview data={product} />
                {/* <AllReviews data={product} /> */}
                <FeaturedProduct data={product} />
                <Footer />
            </div>
        </Suspense>
    );
};

export default Page;