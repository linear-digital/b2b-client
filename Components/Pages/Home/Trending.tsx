
import React from 'react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import fetcher, { fetcherSS } from '@/Components/util/axios';
import { ProductType } from '@/Components/util/type';
import TrendingProductContainer from './_UI/TrandingProductContainer';


const Trending = async () => {
   
    const data = await fetcherSS({
        url: `/pages/search`,
        method: 'POST',
        body: {
            name: "Trending Products"
        }
    })

    const response =  await fetcherSS({
        url: `/product?pageSize=20&sortBy=performanceScore&sortDirection=asc`,
        method: 'GET',
    })
   
    
    const products = response?.offers as ProductType[]
  
    return (
        <TrendingProductContainer 
            data={data}
            products={products}
        />
    );
};

export default Trending;