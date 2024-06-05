import AdvertRepository from '@/app/_db/repositories/AdvertRepository';

export async function GET(request: Request) {
    const record = await AdvertRepository.getOneRandom({ variant: 'normal' });

    return Response.json({ record });
}
