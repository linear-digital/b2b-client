'use client'
import store from '@/Redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import DefaultFetch from './DefaultFetch';
const queryClient = new QueryClient();
const MainLayout = ({ children }: { children: React.ReactNode }) => {
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