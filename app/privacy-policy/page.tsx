import Footer from '@/Components/Bars/Footer/Footer';
import Navbar from '@/Components/Bars/Navbar';
import { fetcherSS } from '@/Components/util/axios';
import React from 'react';
const getData = async () => {
    const res = await fetcherSS({
        url: "/pages/search",
        method: "POST",
        body: {
            name: "privacy-policy"
        }
    })
    return res
}

const page = async () => {
    const data = await getData()
    return (
        <section>
            <Navbar />
            <div
                dangerouslySetInnerHTML={
                    { __html: data?.desc }}
                className='container mx-auto p-4 mt-10'
            >

            </div>
        </section>
    );
};

export default page;