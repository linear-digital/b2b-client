import { Suspense } from "react";
import ProductPageContent from "./Content";
import { Spin } from "antd";

export const generateMetadata = () => {
    return {
        title: "Redirecting...",
        description: "Redirect page",
    };
}

const Page = () => (
    <Suspense fallback={<Spin size="large" fullscreen/>}>
        <ProductPageContent />
    </Suspense>
);

export default Page;