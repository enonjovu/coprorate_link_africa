'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type TextEditorProps = {
    onChange?: () => void;
    content?: string;
};

export default function TextEditor({ onChange, content }: TextEditorProps) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '',
    });

    return <EditorContent editor={editor} />;
}
