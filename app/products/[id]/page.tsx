
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
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const getProduct = async (id: string) => {
    const data = await fetcherSS({
        url: `/product/single/${id}`,
        method: 'GET',
    })
    return data
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = (await params).id

    // fetch data
    let product: ProductType | null = null;
    try {
        product = await getProduct(id);
    } catch (error) {
        console.error("Error fetching product:", error);
    }

    // Return default metadata if product data is unavailable
    if (!product) {
        return {
            title: "Product Not Found",
            description: "The requested product could not be found.",
        };
    }

    // optionally access and extend (rather than replace) parent metadata
 
    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: "Shoppanorma - Your Go-To B2B E-commerce Platform",
            description: "Discover and compare products from diverse merchants on Shoppanorma's comprehensive B2B platform. Real-time data ensures accuracy in price, features, and reviews.",
            url: "https://www.shoppanorma.com",
            type: "website",
            images: product.images.map((image) => {
                return {
                    url: image.url,
                    alt: product.title,
                    width: 1200,
                    height: 630,
                }
            }),
          },
    }
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