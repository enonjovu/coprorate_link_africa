import DirectoryCategory from '@/models/DirectoryCategory';
import Link from 'next/link';

export default async function DirectoryCategoryList() {
    const categories = await DirectoryCategory.find({}).limit(5);

    console.log(categories);

    return (
        <>
            {categories && (
                <div className="flex w-full justify-center overflow-hidden">
                    <div className="mb-4 flex w-full flex-wrap justify-between md:mt-4 md:w-1/2">
                        {categories.map((link) => (
                            <Link
                                href={`/directory/category/${link._id}`}
                                key={link.name}
                                className="scale-75 rounded-md bg-red-700 p-3 text-white hover:text-white md:scale-100"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
