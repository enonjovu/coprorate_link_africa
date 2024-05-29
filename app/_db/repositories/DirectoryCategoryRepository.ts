import DirectoryCategory from '@/models/DirectoryCategory';
import connectToDatabase from '@/lib/db';

export default class DirectoryCategoryRepository {
    static async fistOrCreate(name: string) {
        await connectToDatabase();

        const date = Date.now();

        const label = name.trim();

        let category = await DirectoryCategory.findOne({ name: label });

        if (!category) {
            category = await DirectoryCategory.create({
                name: label,
                date,
            });
        }

        return category;
    }
}
