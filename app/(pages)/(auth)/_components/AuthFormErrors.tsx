export default function AuthFormErrors(props: { errors: string[] }) {
    return (
        <>
            {props.errors.map((error, index) => (
                <p key={`id-${index}`} className="mt-2  text-xs text-red-600" id="email-error">
                    {error}
                </p>
            ))}
        </>
    );
}
