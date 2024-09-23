import axios from 'axios';
import Cookie from 'js-cookie'
import { decrypt, encrypt } from './security';
const server = 'https://server.shoppanorma.com/api'
const local = 'http://localhost:4000/api'

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

export default fetcher