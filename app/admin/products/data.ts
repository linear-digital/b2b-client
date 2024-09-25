export type ProductType = {
    name: string,
    category: string,
    description: string,
    price: number,
    images: string[],
    colors: string[],
    ratings: number,
    reviews: any,
    brand: string,
    stock: number,
    _id: string,
    link: string,
    discount: number
}

export const products: ProductType[] = [
    {
        _id: "111",
        name: "SanDisk Extreme PRO 128GB UHS-I U3 SDXC Memory Card",
        description: "Discover the power and performance of the Extreme PRO 128GB UHS-I U3 SDXC Memory Card, designed to elevate your creativity without boundaries. This top-tier SD UHS-I memory card offers unparalleled shot speeds of up to 90MB/s, coupled with UHS Speed Class 3 (U3) recording. This makes it an ideal choice for capturing high-resolution, seamless 4K UHD video, ensuring you never miss a moment of the action.Experience the convenience of faster post-production workflows, thanks to transfer speeds reaching up to 200MB/s. This is made possible by the SanDisk QuickFlow Technology, which optimizes performance for rapid media offloads. For maximum speed efficiency, pair this card with the SanDisk Professional PRO-READER SD and microSD (sold separately).The Extreme PRO 128GB UHS-I U3 SDXC Memory Card is not just about speed; it's also about reliability. Rated UHS Speed Class 3 (U3) and Video Speed Class 30 (V30), this card allows you to capture sequential burst mode shots without a hitch. Whether you're shooting a fast-paced sports event or a serene landscape, this card ensures you capture every frame in stunning detail.Built to withstand the rigors of professional use, this memory card is temperature-proof, waterproof, shock-proof, and x-ray-proof. Whether you're shooting in the desert heat or the arctic cold, you can trust this card to perform. Additionally, the card includes an offer for RescuePRO Deluxe 2-year data recovery software. This valuable feature allows you to restore images you may have accidentally deleted, providing an extra layer of security for your precious memories and professional work. In summary, the Extreme PRO 128GB UHS-I U3 SDXC Memory Card is more than just a storage device; it's a powerful tool designed to enhance your creative process and improve your workflow efficiency.",
        price: 21.99,
        brand: "Sandisk",
        ratings: 4.5,
        reviews: [],
        stock: 10,
        category: "Electronics",
        images: [
            "https://r.kelkoo.com/resize.php?country=us&merchantId=100532390&categoryId=100291923&trackingId=97015157&width=auto&height=auto&image=https%3A%2F%2Fwww.adorama.com%2Fimages%2Fxlarge%2FIDSXD128G.JPG&sign=_qLyqtcP4HmmUj0Woq1ETLXLPjAuj9_sK0wjKgSJetw-"
        ],
        colors: ["black"],
        link: "https://brilliantsparklers.com/product/sandisk/sandisk-extreme-pro-128gb-uhs-i-u3-sdxc-memory-card",
        discount: 10
    }
]