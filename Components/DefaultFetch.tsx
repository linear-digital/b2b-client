'use client'
import React, { useEffect } from 'react';
import fetcher from './util/axios';
import Cookie from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '@/Redux/user/userSlice';
const DefaultFetch = () => {
    const token = Cookie.get('auth-token')
    const dispatch = useDispatch()
    useEffect(() => {
        (
            async () => {
                if (token) {
                    try {
                        const user = await fetcher({
                            url: '/users/current',
                            method: 'GET',
                            headers: {
                                "Authorization": token
                            }
                        })
                        dispatch(setCurrentUser(user))
                    } catch (error) {
                        console.error(error)
                    }
                }
            }
        )()
    }, [token, dispatch])
    return (
        <div>

        </div>
    );
};

export default DefaultFetch;