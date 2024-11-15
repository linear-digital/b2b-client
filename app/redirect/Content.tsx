'use client'
import fetcher from '@/Components/util/axios';
import React, { useEffect, Suspense } from 'react';
import ErrorPage from './ErrorPage';
import Details from './Details';
import { ProductType } from '@/Components/util/type';
import { useSearchParams } from 'next/navigation';

const ProductPageContent = () => {
    const allParams = useSearchParams();
    const pid = allParams.get('pid') as string;
    const url = allParams.get('url') as string;
    const [product, setProduct] = React.useState<ProductType | null>(null);
    const [isError, setIsError] = React.useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (url) {
                window.location.href = url;
            }
            else {
                const fetchProduct = async () => {
                    try {
                        const data: ProductType = await fetcher({
                            url: `/product/single/${pid}`,
                            method: 'GET',
                        });
                        setProduct(data);
                        window.location.href = data.goUrl;
                    } catch (error) {
                        setIsError(true);
                    }
                };
                fetchProduct();
            }
        }
    }, [pid, url]);

    if (isError) {
        return <ErrorPage />;
    }

    if (!product && !url) {
        return <Details />;
    }

    return null; // No content here since we redirect
};

export default ProductPageContent;