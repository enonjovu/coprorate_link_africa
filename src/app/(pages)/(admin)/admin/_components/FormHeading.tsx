export default function FormHeading(prop: React.PropsWithChildren) {
    return (
        <h1 className="w-full text-center text-xl font-bold capitalize text-gray-800 dark:text-white">
            {prop.children}
        </h1>
    );
}
