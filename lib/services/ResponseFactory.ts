export default function createOutputObject<Tdata>(params: {
    data?: Tdata;
    errors?: string | string[] | Record<string, string> | Record<string, string[]> | Record<string, any>;
    ok?: Boolean;
}) {
    const res = params;

    if (!res.ok) {
        res.ok = !res.errors;
    }

    return res;
}

export function createErrorObject<TErrorData extends Object>(errors: TErrorData) {
    return {
        errors,
        data: null,
        ok: false,
    };
}
