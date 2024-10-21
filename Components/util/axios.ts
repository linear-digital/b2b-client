import axios from 'axios';
import Cookie from 'js-cookie'
import { decrypt, encrypt } from './security';
const server = 'https://server.shoppanorma.com/api'
const local = 'https://server.shoppanorma.com/api'

export const api = axios.create({
    baseURL: server,
    headers: {
        'Content-Type': 'application/json',
        "Authorization": Cookie.get("auth-token")
    }
})



const fetcher = async (
    { url, method, headers, body }:
        {
            url: string,
            method?: string,
            headers?: any,
            body?: any
        }
) => {
    try {
        const res = await api({
            url,
            method: method ? method : 'GET',
            headers,
            data: body && encrypt(body)
        })
        return decrypt(res.data)
    } catch (error) {
        throw error
    }
}



export const fetcherSS = async (
    { url, method, headers, body }:
        {
            url: string,
            method?: string,
            headers?: any,
            body?: any
        }
) => {

    try {
        const res = await fetch(server + url, {
            method,
            body: body ? JSON.stringify(encrypt(body)) : undefined, // Only include body for non-GET requests
            headers: {
                "Authorization": Cookie.get("auth-token"),
                'Content-Type': 'application/json',
                ...headers,
            },
            cache: "no-cache",
            next: { tags: [url] },
        });

        if (!res.ok) {
            console.log(res);
            // Optional: Handle different status codes
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const parsed = await res.json();
        return decrypt(parsed);
    } catch (error) {
        throw error;
    }
};


export default fetcher