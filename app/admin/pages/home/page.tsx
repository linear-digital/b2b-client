'use client'
import React from 'react';
import HeroArea from './_UI/HeroArea';
import Voucher_Discount from './_UI/Voucher&Discount';
import ShopByCategory from './shop-category/page';
import TrendingProducts from './_UI/TrendingProducts';
import WhyShopWithUs from './_UI/WhyShopWithUs';
import FeaturedBrands from './_UI/FeaturedBrands';
import Newsletter from './_UI/Newsletter';

const page = () => {
    return (
        <div>
            <HeroArea />
            <div className="mt-20"></div>
            <ShopByCategory />
            
            <Voucher_Discount />
            <TrendingProducts />
            <WhyShopWithUs />
            <div className="mt-20"></div>
            <FeaturedBrands />
            <div className="mt-20"></div>
            <Newsletter />
        </div>
    );
};

export default page;