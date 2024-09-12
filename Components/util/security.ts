import crypto from 'crypto';

const secret = "d2c52a31d5c0fe18d3cf6ed02c907b3fcd93cd00540414b3d52bc8aec4c7186f"  // Make sure this is 32 bytes
const iv = crypto.randomBytes(16); // 16 bytes for AES-256-CBC

export const encrypt = (data: any): any => {
    const key = crypto.createHash('sha256')
        .update(String(secret))
        .digest('base64')
        .substr(0, 32);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    const jsonData = JSON.stringify(data); 

    let encrypted = cipher.update(jsonData, 'utf8', 'hex');

    encrypted += cipher.final('hex');
    
    return {
        iv: iv.toString('hex'),
        data: encrypted
    };
}


export const decrypt = (data: any): any => {
    const key = crypto.createHash('sha256').update(String(secret)).digest('base64').substr(0, 32);
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(data.iv, 'hex'));
    let decrypted = decipher.update(data.data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return JSON.parse(decrypted); // Convert the JSON string back to an object/array
}
