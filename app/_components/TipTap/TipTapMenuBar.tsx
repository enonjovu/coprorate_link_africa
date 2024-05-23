import { useCurrentEditor } from '@tiptap/react';

export default function TipTapMenuBar() {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return <></>;
}
