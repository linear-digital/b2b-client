import fetcher from '@/Components/util/axios';
import { errorDisplay } from '@/Components/util/readError';
import { Button, Card, Input, Spin } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { isExpired, decodeToken } from "react-jwt";
const TokenForm = ({ token }: { token: string }) => {
    const decode: any = decodeToken(token)
    const router = useRouter()
    const [isValid, setIsValid] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        (
            async () => {
                try {
                    if (decode.email) {
                        const res = await fetcher({
                            url: `/users/verify-token`,
                            method: 'POST',
                            body: {
                                email: decode.email,
                                token
                            }
                        })
                    }
                    setIsValid(true)
                } catch (error) {
                    setIsValid(false)
                }
            }
        )()
    }, [token, decode.email])
    const [code, setCode] = useState('')
    const changePassword = async () => {
        if (code.length < 6) {
            return toast.error('Code must be 6 digits')
        }
        try {
            setIsLoading(true)
            const res = await fetcher({
                url: `/users/verify`,
                method: 'PATCH',
                body: {
                    code,
                    email: decode.email
                }
            })
            toast.success(res?.message)
            router.push(`/auth/change-password?token=${res?.token}`)
        } catch (error) {
            toast.error(errorDisplay(error))
            setIsLoading(false)
        }
    }
    if (!isValid) {
        return <h1 className='text-center text-red-500'>Invalid Token</h1>
    }
    if (isExpired(token)) {
        return <h1>Token Expired</h1>
    }
   
    return (
        <div>
            {
                isLoading && <Spin size='large' fullscreen/>
            }
            <Card className='lg:w-[500px] w-full min-h-[400px] border-none lg:p-5'>
                <Image src={'/icons/forgot.png'} alt="forgot" width={50} height={50} />
                <h1 className='text-[32px] messiri mt-4'>
                    Verify email
                </h1>
                <p className='text-[16px] text-[#898989]'>
                    A verification code has been sent to you. Enter the code below
                </p>
                <div className='w-full mt-5'>
                    <Input.OTP value={code} onChange={setCode} />
                </div>
                <Button
                    type='primary'
                    size='large'
                    onClick={changePassword}
                    className='w-full mt-5 bg-primary py-3 '>
                    Reset Password
                </Button>
            </Card>
        </div>
    );
};

export default TokenForm;