import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const UpdateImage = ({ data: section, url , refetch}: {
    data: any,
    url: string,
    refetch: () => void
}) => {
    const [image, setImage] = useState<any>(null)
    const [previewImage, setPreviewImage] = useState('');
    useEffect(() => {
        if (image) {
            setPreviewImage(URL.createObjectURL(image))
        }
    }, [image, url])
    const handleUpdate = async (file: any) => {
        try {
            if (!image) {
                return
            }
            const formdata = new FormData();
            formdata.append('profile', image as any);
            const resImage = await fetch('https://server.shoppanorma.com/upload', {
                method: 'POST',
                body: formdata
            })
            const data = await resImage.json()

            const newImages = section.images.map((item: any) => {
                if (item === url) {
                    return data?.url
                }
                return item
            })

            const res = await fetcher({
                method: 'PUT',
                url: `/pages/${section._id}`,
                body: {
                    images: newImages
                }
            })
            toast.success("Image updated successfully")
            refetch()
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    return (
        <div className='w-[300px] h-[300px]'>
            {
                previewImage &&
                <Image src={previewImage} alt="login" height={200} className={'h-full w-full'} />
            }
            <label htmlFor="uploadFile1" className={`bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 ${previewImage ? 'hidden' : 'flex'} flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                    <path d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z" data-original="#000000" />
                    <path d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z" data-original="#000000" />
                </svg>
                Upload file
                <input onChange={(e: any) => setImage(e.target.files[0])} type="file" id="uploadFile1" className="hidden" />
                <p className="text-xs font-medium text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
            </label>

            <div className="flex mt-4 gap-x-4 items-center">
                <Button type='primary' onClick={handleUpdate}>
                    Update
                </Button>
                <label htmlFor="uploadFile1" className=" font-semibold text-sm cursor-pointer">
                    Upload again
                </label>

            </div>
        </div>
    );
};

export default UpdateImage;