'use client'
import fetcher from '@/Components/util/axios';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
const FAQ = () => {
    const { data } = useQuery({
        queryKey: ['faq'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "faq"
                }
            })
            return res
        },
    })
    const [active, setActive] = React.useState(0);
    return (
        <section className='bg-white py-10 mt-20 px-5 lg:px-0'>
            <div className='container mx-auto '>
                <h1 className='sec-title'>
                    {data?.title}
                </h1>
                <p className='max-w-[700px] text-[#898989] mt-3'>
                    {data?.desc}
                </p>
                <div className="mt-10">
                    {data?.others?.questions.map((item: any, index: number) => (
                        <FAQCard
                            title={item.q}
                            desc={item.a}
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
                <h1 className='lg:text-[18px] text-[14px] font-semibold'>
                    {title}
                </h1>
                <button>
                    {
                        active ? <MinusOutlined className='text-red-500 text-xl' /> : <PlusOutlined className='text-xl' />
                    }
                </button>
            </div>
            <hr />
            {
                active && <p className='text-[#898989] pr-10 pb-2 animation-fade-in lg:text-base text-sm'>
                   {desc}
                </p>
            }
        </div>
    );
}