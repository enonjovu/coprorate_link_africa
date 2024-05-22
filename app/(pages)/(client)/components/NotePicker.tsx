'use client';

import React, { useState } from 'react';
import Tiptap from './Tiptap';
// import { v4 as uuidv4 } from 'uuid'

const Todo = () => {
    const [content, setContent] = useState<string>('');
    const handleContentChange = (reason: any) => {
        setContent(reason);
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = {
            id: Math.random(),
            content: content,
        };
        console.log(data);
        const existingDataString = localStorage.getItem('myData');
        const existingData = existingDataString ? JSON.parse(existingDataString) : [];
        const updatedData = [...existingData, data];
        localStorage.setItem('myData', JSON.stringify(updatedData));
        setContent('');
    };
    return (
        <form onSubmit={handleSubmit} className="mx-auto mb-10 grid w-full max-w-3xl place-items-center pt-10">
            <div className="mb-10 text-center text-3xl text-sky-300">Notes Picker</div>
            <Tiptap content={content} onChange={(newContent: string) => handleContentChange(newContent)} />
        </form>
    );
};

export default Todo;
