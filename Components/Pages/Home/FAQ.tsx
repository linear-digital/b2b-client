'use client'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import TypeIt from "typeit-react";
const FAQ = () => {
    const list = [
        "What is a comparison-shopping site?",
        "Do I buy products directly from your website?",
        "Are the prices on your site accurate?",
        "Can I trust the reviews on your site?",
        "How do I use filters to find products?",
        "Can I save products to view later?"
    ]
    const [active, setActive] = React.useState(0);
    return (
        <section className='bg-white py-10 mt-20'>
            <div className='container mx-auto '>
            <h1 className='sec-title'>
                Frequently Asked Questions (FAQ)
            </h1>
            <p className='max-w-[700px] text-[#898989] mt-3'>
                Find quick answers to your questions about how our site works, using features, and more. Get the information you need to shop with confidence.
            </p>
            <div className="mt-10">
                {list.map((item, index) => (
                    <FAQCard
                        title={item}
                        key={index}
                        onClick={() => setActive(index === active ? -1 : index)}
                        active={active === index}
                    />
                ))}
            </div>
        </div>
        </section>
    );
};

export default FAQ;

const FAQCard = ({ title, desc, onClick, active }: { title: string, desc?: string, onClick?: () => void, active?: boolean }) => {
    return (
        <div className={`flex flex-col gap-y-3 mb-2 ${active && "bg-gray-50"} p-2 rounded-lg`}>
            <div className="flex justify-between"
                onClick={onClick}
            >
                <h1 className='text-[18px] font-semibold'>
                    {title}
                </h1>
                <button>
                    {
                        active ? <MinusOutlined className='text-red-500 text-xl' /> : <PlusOutlined className='text-xl'/>
                    }
                </button>
            </div>
            <hr />
            {
                active && <p className='text-[#898989] pr-10 pb-2 animation-fade-in'>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur laudantium voluptates earum amet repellendus fuga quisquam odio? Recusandae, illum commodi. Nemo velit aliquam veritatis accusamus perferendis expedita commodi perspiciatis sunt.
                </p>
            }
        </div>
    );
}