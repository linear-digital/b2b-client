import { Suspense } from "react";
import ProductPageContent from "./Content";
import { Spin } from "antd";

export const generateMetadata = () => {
    return {
        title: "Shoppanorma - Redirecting...",
        description: "Shoppanorma - Redirect page",
        openGraph: {
            title: "Redirecting...",
            url: `https://www.shoppanorma.com/redirect`, // Set specific URL for the product
        },
        twitter: {
            card: "summary_large_image",
            title: "Redirect page",
        }
    };
}

const Page = () => (
    <Suspense fallback={<Spin size="large" fullscreen/>}>
        <ProductPageContent />
    </Suspense>
);

export default Page;