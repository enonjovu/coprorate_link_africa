import type { Config } from 'tailwindcss';
import { withUt } from 'uploadthing/tw';

import flowbitePlugin from 'flowbite-react/tailwind';

const config: Config = withUt({
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/preline/preline.js',
        flowbitePlugin.content(),
    ],
    theme: {
        extend: {},
    },
    plugins: [require('preline/plugin'), require('@tailwindcss/typography'), flowbitePlugin.plugin()],
});

export default config;
