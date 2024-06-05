import AdvertRepository from '@/app/_db/repositories/AdvertRepository';

export async function GET(request: Request) {
    const record = await AdvertRepository.getOneRandom({ variant: 'top' });

    return Response.json({ record });
}
