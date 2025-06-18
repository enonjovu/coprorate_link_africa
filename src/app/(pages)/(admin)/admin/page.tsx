import Blog from '@/models/Blog';
import Directory from '@/models/Directory';
import Event from '@/models/Event';
import IndividiualProfile from '@/models/IndividiualProfile';
import Tender from '@/models/Tender';
import User from '@/models/User';
import DashboardPageHeading from './_components/DashboardPageHeading';
import dbConnect from '@/lib/db';

export default async function Dashboard() {
    const db = await dbConnect();

    const blogs = await Blog.countDocuments();
    const directories = await Directory.countDocuments();
    const profiles = await IndividiualProfile.countDocuments();
    const tenders = await Tender.countDocuments();
    const events = await Event.countDocuments();
    const users = await User.countDocuments();

    const list = [
        { name: 'Article Count', value: blogs },
        { name: 'Users Count', value: users },
        { name: 'Directories Count', value: directories },
        { name: 'Profile Count', value: profiles },
        { name: 'Tenders Count', value: tenders },
        { name: 'Events Count', value: events },
    ];

    return (
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <DashboardPageHeading title="Analytics" />

            <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
                {list.map((l, index) => (
                    <div key={index} className="flex flex-col items-center justify-center rounded-md border p-4">
                        <h3 className="text-xl font-medium">{l.name}</h3>
                        <p>{l.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
