'use client'
import React from 'react';
import HeroArea from './_UI/HeroArea';
import Voucher_Discount from './_UI/Voucher&Discount';
import ShopByCategory from './shop-category/page';
import TrendingProducts from './_UI/TrendingProducts';

const page = () => {
    return (
        <div>
            <HeroArea />
            <div className="mt-20"></div>
            <ShopByCategory />
            
            <Voucher_Discount />
            <TrendingProducts />
        </div>
    );
};

export default page;