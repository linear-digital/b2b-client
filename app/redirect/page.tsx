import { Suspense } from "react";
import ProductPageContent from "./Content";
import { Spin } from "antd";

export const generateMetadata = () => {
    return {
        title: "Shoppanorma - Redirecting page...",
        description: "Shoppanorma - Redirect page",
        openGraph: {
            title: "Redirecting page...",
            url: `https://www.shoppanorma.com/redirect`, // Set specific URL for the product
        },
        twitter: {
            card: "summary_large_image",
            title: "Shoppanorma - Redirecting page...",
        }
    };
}

const Page = () => (
    <Suspense fallback={<Spin size="large" fullscreen/>}>
        <ProductPageContent />
    </Suspense>
);

export default Page;