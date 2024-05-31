import dbConnect from '@/lib/db';
import Directory from '@/models/Directory';

export default async function ExtraDirectoriesSection({ id }: { id: string }) {
    await dbConnect();

    const directories = await Directory.find({}).where('id').ne(id).limit(5).sort({ date: -1 });

    if (!directories) {
        return <></>;
    }

    return (
        <>
            <h2 className="text-xl font-bold text-black">See Other Directories</h2>
            <ul className="space-y-4 ">
                {directories.map((dir) => (
                    <li key={dir.id}>
                        <a
                            href={`/directory/${dir.id}`}
                            className="inline-flex w-full items-center rounded-md border border-gray-200 bg-gray-100 p-2  text-black shadow-md"
                        >
                            <div className="shrink-0">
                                <img src={dir.logo[0].url} alt={dir.name} className="size-16 rounded-md" />
                            </div>
                            <div className="ml-2 flex w-full flex-col items-start text-black">
                                <h3 className="text-lg font-semibold">{dir.name}</h3>
                                <p className="text-sm">{dir.email}</p>
                                <p className="text-sm">{dir.address}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}
