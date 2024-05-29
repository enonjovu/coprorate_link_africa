import IndividiualProfileRepository, {
    IndividiualProfileParamters,
} from '@/app/_db/repositories/IndividiualProfileRepository';

export async function POST(req: Request) {
    const data = await req.json();
    try {
        const result = await IndividiualProfileRepository.create(data);

        return Response.json({ data: result, success: true, error: null });
    } catch (error: any) {
        console.error({
            message: 'could not create directory',
            error,
        });

        return Response.json({ data: null, success: false, error: error.message ?? null });
    }
}
