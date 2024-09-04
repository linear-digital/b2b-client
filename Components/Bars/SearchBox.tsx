import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';

const SearchBox = () => {
    return (
        <div>
            <Input
                className='search-input pl-2 border-primary outline-none'
                prefix={<SearchOutlined className='text-lg bg-transparent' />}
                size="middle"
                placeholder='Search for products, brands and more'
            />
        </div>
    );
};

export default SearchBox;