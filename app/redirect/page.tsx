'use client'
import fetcher from '@/Components/util/axios';
import React, { useEffect } from 'react';
import ErrorPage from './ErrorPage';
import Details from './Details';
import { ProductType } from '@/Components/util/type';

const Page = () => {
    const params = new URLSearchParams(window.location.search);
    const pid = params.get('pid') as string;
    const [product, setProduct] = React.useState<ProductType | null>(null)
    const [isError, setIsError] = React.useState(false)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data: ProductType = await fetcher({
                    url: `/product/single/${pid}`,
                    method: 'GET',
                })
                setProduct(data)
                window.location.href = data.goUrl
            } catch (error) {
                setIsError(true)
            }
        }
        fetchProduct()
    }, [pid])


    if (isError) {
        return <ErrorPage />
    }
    if (!product) {
        return (
            <Details  />
        )
    }

};

export default Page;