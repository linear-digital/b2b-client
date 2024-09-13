import { PlusOutlined } from '@ant-design/icons';
import { Button, Image } from 'antd';
import React, { useEffect } from 'react';

const Uploadbanner = () => {
    const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
    const [image, setImage] = React.useState<any>(null);

    useEffect(() => {
        if (image) {
            setPreviewUrl(URL.createObjectURL(image));
        }
    }, [image]);

    return (
        <div>
            <div
                className='w-[400px] h-[400px] bg-gray-100 flex justify-center items-center rounded-lg border-dotted border-2 border-gray-400 hover:bg-gray-50 hover:shadow-lg shadow-gray-100'
                style={{
                    backgroundImage: previewUrl ? `url(${previewUrl})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >

                {
                    !previewUrl ?
                        <label htmlFor="upload" className=' flex-col justify-center items-center gap-y-3 cursor-pointer text-xl text-gray-500'
                            style={{
                                width: '100%',
                                height: '100%',
                                display: previewUrl ? 'none' : 'flex',
                            }}
                        >
                            <PlusOutlined />
                            <div className="text-sm font-medium ">Upload</div>
                        </label>
                        :
                        <Image alt='preview' src={previewUrl as string} width={'100%'} height={'100%'} />
                }
                {
                    <input
                        id="upload"
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                            if (e.target.files && e.target.files.length > 0) {
                                setImage(e.target.files[0]);
                            }
                        }}
                        accept='image/*'

                    />
                }
            </div>
            {
                previewUrl && <div className='mt-5 flex justify-start'>
                    <label htmlFor="upload" className=''>
                        <div className='border cursor-pointer border-primary text-primary px-5 py-2 rounded-lg'>
                            Upload Another
                        </div>
                    </label>
                </div>
            }
        </div>
    );
};

export default Uploadbanner;