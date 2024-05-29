'use client';

import { EditorContent, useEditor, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { FaBold } from 'react-icons/fa';

/**
 * 
 * @param param0 
 * @returns 
 * 
 * <!-- Tiptap -->
<div class="border border-gray-200 rounded-xl overflow-hidden dark:border-neutral-700">
  <div id="hs-editor-tiptap">
    <div class="flex align-middle gap-x-0.5 border-b border-gray-200 p-2 dark:border-neutral-700">
      <button class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" type="button" data-hs-editor-bold="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 12a4 4 0 0 0 0-8H6v8"></path>
          <path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path>
        </svg>
      </button>
      <button class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" type="button" data-hs-editor-italic="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" x2="10" y1="4" y2="4"></line>
          <line x1="14" x2="5" y1="20" y2="20"></line>
          <line x1="15" x2="9" y1="4" y2="20"></line>
        </svg>
      </button>
      <button class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" type="button" data-hs-editor-underline="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
          <line x1="4" x2="20" y1="20" y2="20"></line>
        </svg>
      </button>
      <button class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" type="button" data-hs-editor-strike="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
          <path d="M14 12a4 4 0 0 1 0 8H6"></path>
          <line x1="4" x2="20" y1="12" y2="12"></line>
        </svg>
      </button>
      <button class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" type="button" data-hs-editor-link="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      </button>
      <button class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" type="button" data-hs-editor-ol="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" x2="21" y1="6" y2="6"></line>
          <line x1="10" x2="21" y1="12" y2="12"></line>
          <line x1="10" x2="21" y1="18" y2="18"></line>
          <path d="M4 6h1v4"></path>
          <path d="M4 10h2"></path>
          <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
        </svg>
      </button>
      <button class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" type="button" data-hs-editor-ul="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" x2="21" y1="6" y2="6"></line>
          <line x1="8" x2="21" y1="12" y2="12"></line>
          <line x1="8" x2="21" y1="18" y2="18"></line>
          <line x1="3" x2="3.01" y1="6" y2="6"></line>
          <line x1="3" x2="3.01" y1="12" y2="12"></line>
          <line x1="3" x2="3.01" y1="18" y2="18"></line>
        </svg>
      </button>
      <button class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" type="button" data-hs-editor-blockquote="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 6H3"></path>
          <path d="M21 12H8"></path>
          <path d="M21 18H8"></path>
          <path d="M3 12v6"></path>
        </svg>
      </button>
      <button class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700" type="button" data-hs-editor-code="">
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      </button>
    </div>

    <div class="h-[10rem] overflow-auto" data-hs-editor-field=""></div>
  </div>
</div>
<!-- End Tiptap -->


const actions = [
    {
      id: '#hs-editor-tiptap [data-hs-editor-bold]',
      fn: () => editor.chain().focus().toggleBold().run()
    },
    {
      id: '#hs-editor-tiptap [data-hs-editor-italic]',
      fn: () => editor.chain().focus().toggleItalic().run()
    },
    {
      id: '#hs-editor-tiptap [data-hs-editor-underline]',
      fn: () => editor.chain().focus().toggleUnderline().run()
    },
    {
      id: '#hs-editor-tiptap [data-hs-editor-strike]',
      fn: () => editor.chain().focus().toggleStrike().run()
    },
    {
      id: '#hs-editor-tiptap [data-hs-editor-link]',
      fn: () => {
        const url = window.prompt('URL');
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
      }
    },
    {
      id: '#hs-editor-tiptap [data-hs-editor-ol]',
      fn: () => editor.chain().focus().toggleOrderedList().run()
    },
    {
      id: '#hs-editor-tiptap [data-hs-editor-ul]',
      fn: () => editor.chain().focus().toggleBulletList().run()
    },
    {
      id: '#hs-editor-tiptap [data-hs-editor-blockquote]',
      fn: () => editor.chain().focus().toggleBlockquote().run()
    },
    {
      id: '#hs-editor-tiptap [data-hs-editor-code]',
      fn: () => editor.chain().focus().toggleCode().run()
    }
  ];
 */
const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
        return null;
    }

    const isActive = (b: boolean) => {
        return b ? 'bg-gray-800' : 'bg-gray-700';
    };

    return (
        <div className="m-1 flex items-center gap-0.5 rounded-lg">
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`${isActive(editor.isActive('bold'))} rounded-lg p-1 text-xs font-medium uppercase hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            >
                bold
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`${isActive(editor.isActive('paragraph'))} rounded-lg p-1 text-xs font-medium uppercase hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            >
                paragraph
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`${isActive(editor.isActive('heading', { level: 1 }))} rounded-lg p-1 text-xs font-medium uppercase hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            >
                h1
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`${isActive(editor.isActive('heading', { level: 2 }))} rounded-lg p-1 text-xs font-medium uppercase hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            >
                h2
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`${isActive(editor.isActive('heading', { level: 3 }))} rounded-lg p-1 text-xs font-medium uppercase hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            >
                h3
            </button>

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`${isActive(editor.isActive('bulletList'))} rounded-lg p-1 text-xs font-medium uppercase hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            >
                bullet list
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`${isActive(editor.isActive('orderedList'))} rounded-lg p-1 text-xs font-medium uppercase hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            >
                ordered list
            </button>

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`${isActive(editor.isActive('blockquote'))} rounded-lg p-1 text-xs font-medium uppercase hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            >
                blockquote
            </button>

            <button
                type="button"
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().chain().focus().undo().run()}
            >
                undo
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().chain().focus().redo().run()}
            >
                redo
            </button>
        </div>
    );
};

export default function TipTapTextEditor(props: { value?: string; onChange?: (e: string) => void }) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: props.value ?? '',
        onUpdate(e) {
            if (props.onChange) {
                props.onChange(e.editor.getHTML());
            }
        },
        editorProps: {
            attributes: {
                class: 'h-full whitespace-pre-wrap focus:outline-none overflow-auto px-4 py-2 prose w-full bg-white text-black w-full',
            },
        },
    });

    return (
        <div className="min-h-[18rem] w-full  overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-700">
            <div className="flex gap-x-0.5 border-b border-gray-200 p-2 align-middle dark:border-neutral-700">
                <button
                    className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
                    type="button"
                    onClick={() => editor?.chain().focus().toggleBold().toggleHeading({ level: 3 }).run()}
                    disabled={!editor?.can().chain().focus().toggleBold().run()}
                >
                    <svg
                        className="size-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M14 12a4 4 0 0 0 0-8H6v8"></path>
                        <path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path>
                    </svg>
                </button>
                <button
                    className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
                    type="button"
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                    <svg
                        className="size-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="19" x2="10" y1="4" y2="4"></line>
                        <line x1="14" x2="5" y1="20" y2="20"></line>
                        <line x1="15" x2="9" y1="4" y2="20"></line>
                    </svg>
                </button>

                <button
                    className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
                    type="button"
                    onClick={() => editor?.chain().focus().toggleBulletList().run()}
                >
                    <svg
                        className="size-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="8" x2="21" y1="6" y2="6"></line>
                        <line x1="8" x2="21" y1="12" y2="12"></line>
                        <line x1="8" x2="21" y1="18" y2="18"></line>
                        <line x1="3" x2="3.01" y1="6" y2="6"></line>
                        <line x1="3" x2="3.01" y1="12" y2="12"></line>
                        <line x1="3" x2="3.01" y1="18" y2="18"></line>
                    </svg>
                </button>
                <button
                    className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
                    type="button"
                    onClick={() => editor?.chain().focus().toggleBlockquote().run()}
                >
                    <svg
                        className="size-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M17 6H3"></path>
                        <path d="M21 12H8"></path>
                        <path d="M21 18H8"></path>
                        <path d="M3 12v6"></path>
                    </svg>
                </button>
            </div>

            <EditorContent className="h-[16rem] w-full bg-white p-2" editor={editor} />
        </div>
    );
}
