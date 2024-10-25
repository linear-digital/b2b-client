import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.shoppanorma.com/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://www.shoppanorma.com/products',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }, {
            url: 'https://www.shoppanorma.com/voucher',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }, {
            url: 'https://www.shoppanorma.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }, {
            url: 'https://www.shoppanorma.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }, {
            url: 'https://www.shoppanorma.com/wishlist',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }, {
            url: 'https://www.shoppanorma.com/auth/login',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        }, 
        
        {
            url: 'https://www.shoppanorma.com/auth/signup',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        {
            url: 'https://www.shoppanorma.com/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://www.shoppanorma.com/terms-conditions',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },

    ]
}