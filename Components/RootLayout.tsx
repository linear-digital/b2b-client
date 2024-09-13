'use client'
import store from '@/Redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import DefaultFetch from './DefaultFetch';
import { Spin } from 'antd';
const queryClient = new QueryClient();
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <Spin size='large' fullscreen={true} />;
    }
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <DefaultFetch />
                {children}
            </QueryClientProvider>
        </Provider>
    );
};

export default MainLayout;