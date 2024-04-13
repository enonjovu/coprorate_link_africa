import Todo from "../components/NotePicker";
import Notes from "../components/Notes";


export default function Editor() {
    return (
        <main className="bg-slate-950 w-full min-h-screen pb-10">
            <Todo />
            <Notes />
        </main>
    )
}
