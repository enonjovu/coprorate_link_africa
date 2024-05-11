import Event from '@/models/Event';
import Tender from '@/models/Tender';

const EveTend = async () => {
    const envents = await Event.find({}).sort({ createdAt: -1 }).limit(5).find();
    const tenders = await Tender.find({}).sort({ createdAt: -1 }).limit(5).find();

    return (
        <div className="w-full bg-white">
            <div className="mb-6">
                <div className="bg-gray-100 p-4">
                    <h2 className="text-lg font-bold text-black">Events & Tenders</h2>
                </div>
                <ul className="post-number">
                    {envents.map((event) => (
                        <li className="border-b border-gray-100 hover:bg-gray-50">
                            <a className="flex flex-row items-center px-6 py-3 text-lg font-bold text-black" href="#">
                                {event.title}
                            </a>
                        </li>
                    ))}

                    {tenders.map((tender) => (
                        <li className="border-b border-gray-100 hover:bg-gray-50">
                            <a className="flex flex-row items-center px-6 py-3 text-lg font-bold text-black" href="#">
                                {tender.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EveTend;
