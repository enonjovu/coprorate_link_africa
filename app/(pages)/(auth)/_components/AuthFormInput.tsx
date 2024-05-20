export default function AuthFormInput() {
    return (
        <input
            type="text"
            id="name"
            name="name"
            className="block w-full rounded-lg border-gray-200 px-4 py-3 text-sm focus:border-red-500 focus:ring-red-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
            required
        />
    );
}
