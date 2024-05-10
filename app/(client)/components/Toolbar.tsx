'use client';

import React from 'react';
import { type Editor } from '@tiptap/react';
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2,
    Underline,
    Quote,
    Undo,
    Redo,
    Code,
} from 'lucide-react';

type Props = {
    editor: Editor | null;
    content: string;
};

const Toolbar = ({ editor, content }: Props) => {
    if (!editor) {
        return null;
    }
    return (
        <div
            className="flex w-full flex-wrap items-start justify-between gap-5 rounded-tl-md
    rounded-tr-md border border-gray-700 px-4 py-3"
        >
            <div className="flex w-full flex-wrap items-center justify-start gap-5 lg:w-10/12 ">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBold().run();
                    }}
                    className={editor.isActive('bold') ? 'rounded-lg bg-sky-700 p-2 text-white' : 'text-sky-400'}
                >
                    <Bold className="h-5 w-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleItalic().run();
                    }}
                    className={editor.isActive('italic') ? 'rounded-lg bg-sky-700 p-2 text-white' : 'text-sky-400'}
                >
                    <Italic className="h-5 w-5" />
                </button>
                {/* <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-sky-400"
          }
        >
          <Underline className="w-5 h-5" />
        </button> */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleStrike().run();
                    }}
                    className={editor.isActive('strike') ? 'rounded-lg bg-sky-700 p-2 text-white' : 'text-sky-400'}
                >
                    <Strikethrough className="h-5 w-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleHeading({ level: 2 }).run();
                    }}
                    className={
                        editor.isActive('heading', { level: 2 })
                            ? 'rounded-lg bg-sky-700 p-2 text-white'
                            : 'text-sky-400'
                    }
                >
                    <Heading2 className="h-5 w-5" />
                </button>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBulletList().run();
                    }}
                    className={editor.isActive('bulletList') ? 'rounded-lg bg-sky-700 p-2 text-white' : 'text-sky-400'}
                >
                    <List className="h-5 w-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleOrderedList().run();
                    }}
                    className={editor.isActive('orderedList') ? 'rounded-lg bg-sky-700 p-2 text-white' : 'text-sky-400'}
                >
                    <ListOrdered className="h-5 w-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().toggleBlockquote().run();
                    }}
                    className={editor.isActive('blockquote') ? 'rounded-lg bg-sky-700 p-2 text-white' : 'text-sky-400'}
                >
                    <Quote className="h-5 w-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().setCode().run();
                    }}
                    className={editor.isActive('code') ? 'rounded-lg bg-sky-700 p-2 text-white' : 'text-sky-400'}
                >
                    <Code className="h-5 w-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().undo().run();
                    }}
                    className={
                        editor.isActive('undo')
                            ? 'rounded-lg bg-sky-700 p-2 text-white'
                            : 'p-1 text-sky-400 hover:rounded-lg hover:bg-sky-700 hover:text-white'
                    }
                >
                    <Undo className="h-5 w-5" />
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        editor.chain().focus().redo().run();
                    }}
                    className={
                        editor.isActive('redo')
                            ? 'rounded-lg bg-sky-700 p-2 text-white'
                            : 'p-1 text-sky-400 hover:rounded-lg hover:bg-sky-700 hover:text-white'
                    }
                >
                    <Redo className="h-5 w-5" />
                </button>
            </div>
            {content && (
                <button type="submit" className="rounded-md bg-sky-700 px-4 py-2 text-white">
                    Add
                </button>
            )}
        </div>
    );
};

export default Toolbar;
