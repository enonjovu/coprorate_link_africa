import dbConnect from '@/lib/db';
import { DirectoryCategoryDocument } from '@/lib/document-types';
import DirectoryCategory from '@/models/DirectoryCategory';
import Link from 'next/link';

export default async function DirectoryCategoryList(props: { active?: DirectoryCategoryDocument }) {
    await dbConnect();

    const query: any = {};

    if (props.active) {
        query['name'] = {
            $ne: props.active.id,
        };
    }

    const categories = await DirectoryCategory.find(query).limit(5);

    return (
        <>
            {categories && (
                <div className="flex w-full justify-center overflow-hidden">
                    <div className="mb-4 flex w-full flex-wrap justify-between md:mt-4 md:w-1/2">
                        {categories.map((link) => (
                            <Link
                                href={`/directory/category/${link.id}`}
                                key={link.name}
                                className="scale-75 rounded-md bg-red-700 p-3 text-white hover:text-white md:scale-100"
                            >
                                {link.name.toLowerCase()}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
