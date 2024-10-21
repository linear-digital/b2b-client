'use client'
import React, { useState, useRef, useMemo, useEffect } from 'react';

import fetcher from '@/Components/util/axios';
import { useQuery } from '@tanstack/react-query';
import { Button, Spin } from 'antd';
import toast from 'react-hot-toast';
import { errorDisplay } from '@/Components/util/readError';
import dynamic from 'next/dynamic';
// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const Editor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['privacy-policy'],
        queryFn: () => {
            return fetcher({
                url: `/pages/search`,
                method: 'POST',
                body: {
                    name: "privacy-policy"
                }
            })
        },
    })
    useEffect(() => {
        if (data) {
            setContent(data?.desc)
        }
    }, [data])
    const config = useMemo(
        () => ({
            readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        }),
        []
    );
    const updatehandler = async (content: string) => {
        try {
            const res = await fetcher({
                method: 'PUT',
                url: `/pages/${data?._id}`,
                body: {
                    desc: content
                }
            })
            refetch()
            toast.success("Data updated successfully")
        } catch (error) {
            toast.error(errorDisplay(error))
        }
    }
    if (isLoading) {
        return <Spin size='large'/>
    }
    return (
        <div>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={newContent => setContent(newContent)}
                onChange={newContent => { }}
            />
            <Button type='primary' size='large' className='mt-5'
            onClick={() => updatehandler(content)}
            >Update</Button>
        </div>
    );
};

export default Editor;