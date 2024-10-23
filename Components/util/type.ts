export type UserType = {
    name: string;
    email: string;
    phone: string;
    address: string;
    gender: string;
    profile: string;
    wishlist: any;
    role: string;
    _id: string;
}

export type VoucherType = {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    discount: number;
    _id: string;
    code: string;
    link: string;
    image: string;
    category: string;
}

export interface ProductType {
    offerId: string;
    offerType: string | null;
    title: string;
    lastUpdateDate: string; // Use Date type for actual date handling
    description: string;
    country: string;
    price: number;
    priceWithoutRebate: number;
    monthPrice: number | null;
    rebatePercentage: number;
    rebateEndDate: string | null; // Use Date type for actual date handling
    deliveryCost: number;
    priceDiscountText: string | null;
    totalPrice: number;
    unitPrice: number | null;
    currency: string;
    availabilityStatus: string;
    timeToDeliver: string | null; // Likely a string representation of time
    condition: string;
    warranty: string | null;
    greenLabel: boolean | null;
    ethicalType: string | null;
    flag: {
        offensiveContent: boolean;
        greenProduct: boolean;
        saleEvent: boolean;
    };
    code: {
        ean: string;
        sku: string | null;
        mpn: string;
        gtin: string;
    };
    images: Image[];
    features: string | null; // Likely a string representation of features
    offerUrl: OfferUrl;
    goUrl: string;
    estimatedCpc: number;
    estimatedMobileCpc: number;
    brand: Brand;
    merchant: Merchant;
    merchantProvidedCategory: string;
    category: Category;
    googleProductCategory: {
        id: number;
        name: string | null;
    };
    ecotax: number | null;
    madeIn: string | null;
    efficiencyClass: string | null;
    performanceScore: number;
    product: {
        id: string;
        popularity: number;
    };
    sellerName: string | null;
}

interface Image {
    url: string;
    zoomUrl: string;
}

interface OfferUrl {
    landingUrl: string;
    mobileLandingUrl: string | null;
    trackedUrl: string;
    mobileTrackedUrl: string | null;
}

interface Brand {
    id: number;
    name: string;
}

interface Merchant {
    id: number;
    name: string;
    logoUrl: string;
    websiteId: number;
}

interface Category {
    id: number;
    name: string;
}
export interface ProductMeta {
    request: {
        country: string;
        query: {
            keyword: string | null;
            matchStrength: string | null;
        };
        filterBy: string[];
        filterGreaterThan: string[];
        filterGreaterThanEqual: string[];
        filterLowerThan: string[];
        filterLowerThanEqual: string[];
        filterValueExists: string[];
        fields: {
            alias: string | null;
            additional: string[];
            meta: string[];
        };
        sort: {
            field: string | null;
            direction: string | null;
        };
        pagination: {
            page: number | null;
            pageSize: number;
        };
        facets: string[];
        custom: {
            param1: string | null;
            param2: string | null;
            param3: string | null;
        };
    };
    offers: {
        available: number;
        remaining: number;
        returned: number;
        pageSize: number;
        currentPage: number;
        totalPages: number;
        nextPage: number;
    };
}