import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Flex, Input, Tag, theme, Tooltip } from 'antd';

const tagInputStyle: React.CSSProperties = {
    width: 100,
    height: 32,
    marginInlineEnd: 8,
    verticalAlign: 'top',
};

const App: React.FC<{ tags: string[], setTags: any }> = ({ tags, setTags }) => {
    const { token } = theme.useToken();

    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current?.focus();
    }, [editInputValue]);

    const handleClose = (removedTag: string) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && !tags.includes(inputValue)) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };

    const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setEditInputValue('');
    };

    const tagPlusStyle: React.CSSProperties = {
        height: 32,
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        background: token.colorBgContainer,
        borderStyle: 'dashed',
    };

    return (
        <Flex gap="4px 0" wrap>
            {tags.map<React.ReactNode>((tag, index) => {
                if (editInputIndex === index) {
                    return (
                        <Input
                            ref={editInputRef}
                            key={tag}
                            size="small"
                            style={tagInputStyle}
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                }
                const isLongTag = tag.length > 20;
                const tagElem = (
                    <Tag
                        key={tag}
                        closable={true}
                        style={{ userSelect: 'none' }}
                        onClose={() => handleClose(tag)}
                        className='text-[15px] font-medium flex items-center'
                    >
                        <span
                            onDoubleClick={(e) => {
                                if (index !== 0) {
                                    setEditInputIndex(index);
                                    setEditInputValue(tag);
                                    e.preventDefault();
                                }
                            }}
                        >
                            {tag}
                        </span>
                    </Tag>
                );
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                    tagElem
                );
            })}
            {inputVisible ? (
                <Input
                    ref={inputRef}
                    type="text"
                    size="large"
                    style={tagInputStyle}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            ) : (
                <Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput} >
                    New Category
                </Tag>
            )}
        </Flex>
    );
};

export default App;