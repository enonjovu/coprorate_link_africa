import { Analytics } from '@vercel/analytics/react';
import { checkApplicationInProduction } from '@/lib/helpers';

export default function InjectAnalyticsScripts() {
    const production = checkApplicationInProduction();

    return <>{production ? <Analytics /> : null}</>;
}
