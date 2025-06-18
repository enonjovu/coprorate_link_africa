'use client';

import { EditorContent, useEditor, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { FaBold, FaItalic, FaListUl, FaQuoteRight, FaHeading, FaUnderline } from 'react-icons/fa';

type EditorButtonProps = {
    editor: Editor | null;
    command: () => void;
    isActive?: boolean;
    icon: React.ReactNode;
    disabled?: boolean;
};

const EditorButton = ({ editor, command, icon, disabled = false }: EditorButtonProps) => (
    <button
        className="inline-flex size-8 items-center justify-center gap-x-2 rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:text-white dark:hover:bg-neutral-700"
        type="button"
        onClick={() => command()}
        disabled={disabled}
    >
        {icon}
    </button>
);

const BoldButton = ({ editor }: { editor: Editor | null }) => (
    <EditorButton
        editor={editor}
        command={() => editor?.chain().focus().toggleBold().run()}
        icon={<FaBold className="size-4 flex-shrink-0" />}
        disabled={!editor?.can().chain().focus().toggleBold().run()}
    />
);

const ItalicButton = ({ editor }: { editor: Editor | null }) => (
    <EditorButton
        editor={editor}
        command={() => editor?.chain().focus().toggleItalic().run()}
        icon={<FaItalic className="size-4 flex-shrink-0" />}
    />
);

const BulletListButton = ({ editor }: { editor: Editor | null }) => (
    <EditorButton
        editor={editor}
        command={() => editor?.chain().focus().toggleBulletList().run()}
        icon={<FaListUl className="size-4 flex-shrink-0" />}
    />
);

const BlockquoteButton = ({ editor }: { editor: Editor | null }) => (
    <EditorButton
        editor={editor}
        command={() => editor?.chain().focus().toggleBlockquote().run()}
        icon={<FaQuoteRight className="size-4 flex-shrink-0" />}
    />
);

const HeadingButton = ({ editor, level }: { editor: Editor | null; level: 1 | 2 | 3 | 4 | 5 | 6 }) => (
    <EditorButton
        editor={editor}
        command={() => editor?.chain().focus().toggleHeading({ level }).run()}
        icon={<span className="text-[18px] font-bold">H{level}</span>}
        disabled={!editor?.can().chain().focus().toggleHeading({ level }).run()}
    />
);

const Toolbar = ({ editor }: { editor: Editor | null }) => (
    <div className="flex gap-x-0.5 border-b border-gray-200 p-2 align-middle dark:border-neutral-700">
        <HeadingButton editor={editor} level={1} />
        <HeadingButton editor={editor} level={2} />
        <BoldButton editor={editor} />
        <ItalicButton editor={editor} />

        <BulletListButton editor={editor} />
        <BlockquoteButton editor={editor} />
    </div>
);

export default function TipTapTextEditor(props: { value?: string; onChange?: (e: string) => void }) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: props.value,
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
        <div className="min-h-[20rem] w-full overflow-hidden rounded-xl border border-gray-200 dark:border-neutral-700">
            <Toolbar editor={editor} />
            <EditorContent className="h-[18rem] w-full bg-white p-2" editor={editor} />
        </div>
    );
}
