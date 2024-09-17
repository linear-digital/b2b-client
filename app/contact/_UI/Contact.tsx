import { Container } from '@/Components/Shared/Global';
import { Card } from 'antd';
import Image from 'next/image';
import React from 'react';
import ContactForm from './ContactForm';
import { useQuery } from '@tanstack/react-query';
import fetcher from '@/Components/util/axios';

const Contact = () => {
    const { data } = useQuery({
        queryKey: ['Contact Details'],
        queryFn: () => {
            const res: any = fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "information"
                }
            })
            return res
        }
    })
    return (
        <Container className='py-16 lg:px-0 px-4'>
            <div className="grid lg:grid-cols-2 gap-x-10">
                {/* Information  */}
                <div>
                    <h1 className='sec-title'>
                       {data?.title}
                    </h1>
                    <p className='max-w-[609px] text-[#898989] lg:text-[18px] text-sm  mt-3'>
                        {data?.desc}
                    </p>
                    <div className="grid lg:grid-cols-2 gap-5 mt-10">
                        <Card className='border-0'>
                            <Image
                                src={'/images/contact/image-1.png'}
                                alt="contact"
                                width={32}
                                height={32}
                                className='w-[64px] h-[64px] p-5 bg-[#f4f6f3] rounded-full'
                            />
                            <h3 className='text-[18px] text-black font-medium mt-5'>
                                Address
                            </h3>
                            <p className='text-[16px] mt-3 text-[#898989]'>
                               {data?.others?.address}
                            </p>
                        </Card>
                        <Card className='border-0'>
                            <Image
                                src={'/images/contact/sms.png'}
                                alt="Email"
                                width={32}
                                height={32}
                                className='w-[64px] h-[64px] p-5 bg-[#f4f6f3] rounded-full'
                            />
                            <h3 className='text-[18px] text-black font-medium mt-5'>
                                Email
                            </h3>
                            <p className='text-[16px] mt-3 text-[#898989]'>
                                {data?.others?.email}
                            </p>
                        </Card>
                        <Card className='border-0'>
                            <Image
                                src={'/images/contact/phone.png'}
                                alt="Email"
                                width={32}
                                height={32}
                                className='w-[64px] h-[64px] p-5 bg-[#f4f6f3] rounded-full'
                            />
                            <h3 className='text-[18px] text-black font-medium mt-5'>
                                Phone
                            </h3>
                            <p className='text-[16px] mt-3 text-[#898989]'>
                                {data?.others?.phone}
                            </p>
                        </Card>
                    </div>
                </div>
                <ContactForm />
            </div>
        </Container>
    );
};

export default Contact;