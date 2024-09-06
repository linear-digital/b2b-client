import React from 'react';
import Icon1 from '../_Ui/icon-1.png';
import Icon2 from '../_Ui/icon-2.png';
import Icon3 from '../_Ui/icon-3.png';
import Image from 'next/image';
import { Switch } from 'antd';
const page = () => {
    return (
        <div className='w-full'>
            <h2 className='text-[28px] font-medium font-elMessiri'>
                Notification Preferences
            </h2>
            <div className="flex flex-col gap-y-4 w-[610px] mt-10">
                <div className='p-3 bg-white rounded-lg flex  items-center justify-between pr-5'>
                    <div className="flex items-center gap-x-4">
                        <Image width={80} height={80} src={Icon1} alt="Order Updates" />
                        <div>
                            <h2 className='text-[18px] font-medium'>
                                Order Updates
                            </h2>
                            <p className='text-[#898989] text-[16px] mt-2'>
                                Notifications about order status
                            </p>
                        </div>
                    </div>
                    <Switch defaultChecked />
                </div>
                <div className='p-3 bg-white rounded-lg flex  items-center justify-between pr-5'>
                    <div className="flex items-center gap-x-4">
                        <Image width={80} height={80} src={Icon2} alt="Order Updates" />
                        <div>
                            <h2 className='text-[18px] font-medium'>
                                Promotions and Offers
                            </h2>
                            <p className='text-[#898989] text-[16px] mt-2'>
                                Alerts for special deals and discounts
                            </p>
                        </div>
                    </div>
                    <Switch  />
                </div>
                <div className='p-3 bg-white rounded-lg flex  items-center justify-between pr-5'>
                    <div className="flex items-center gap-x-4">
                        <Image width={80} height={80} src={Icon3} alt="Order Updates" />
                        <div>
                            <h2 className='text-[18px] font-medium'>
                                News and Updates
                            </h2>
                            <p className='text-[#898989] text-[16px] mt-2'>
                                Updates about new features or site changes
                            </p>
                        </div>
                    </div>
                    <Switch  />
                </div>
            </div>
        </div>
    );
};

export default page;
