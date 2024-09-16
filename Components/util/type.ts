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