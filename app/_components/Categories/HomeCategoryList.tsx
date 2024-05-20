export default function HomeCategoryList() {
    const categories = [
        { name: 'Agriculture', link: '/news/category/agriculture' },
        { name: 'Business', link: '/news/category/business' },
        { name: 'Tech', link: '/news/category/tech' },
        { name: 'Environment', link: '/news/category/environment' },
    ];

    return (
        <div className="flex w-full justify-center overflow-hidden">
            <div className="mb-4 flex w-full flex-wrap justify-between md:mt-4 md:w-1/2">
                {categories.map((link) => (
                    <a
                        href={link.link}
                        key={link.name}
                        className="scale-75 rounded-md bg-red-700 p-3 text-white hover:text-white md:scale-100"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}
