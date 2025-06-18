import Todo from '../components/NotePicker';
import Notes from '../components/Notes';

export default function Editor() {
    return (
        <main className="min-h-screen w-full bg-slate-950 pb-10">
            <Todo />
            <Notes />
        </main>
    );
}
