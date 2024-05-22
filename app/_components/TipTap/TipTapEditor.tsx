'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TipTapMenuBar from './TipTapMenuBar';

const extensions = [StarterKit.configure()];

export default function TipTapEditor(props: { value?: string; onChange?: (text: string) => void }) {
    const editor = useEditor({
        extensions,
        content: props.value ?? '',
        editorProps: {
            attributes: {
                class: 'block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 min-h-[150px]',
            },
        },

        onUpdate({ editor }) {
            if (!!props.onChange) {
                props.onChange(editor.getHTML());
            }
        },
    });
    return <EditorContent editor={editor} />;
}
