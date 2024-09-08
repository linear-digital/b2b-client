import { Container } from '@/Components/Shared/Global';
import { Card } from 'antd';
import Image from 'next/image';
import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <Container className='py-16 lg:px-0 px-4'>
            <div className="grid lg:grid-cols-2 gap-x-10">
                {/* Information  */}
                <div>
                    <h1 className='sec-title'>
                        Contact Information
                    </h1>
                    <p className='max-w-[609px] text-[#898989] lg:text-[18px] text-sm  mt-3'>
                        We’re here to assist you with any inquiries, support needs, or feedback. Reach out to us via email, phone, or the contact form below. Connect with us on social media to stay informed about the latest updates. Your satisfaction is our priority
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
                                123 Web Lane, Richmond, VA, 23220
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
                                info@richmondwebdesigns.com
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
                                (123) 456-7890
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