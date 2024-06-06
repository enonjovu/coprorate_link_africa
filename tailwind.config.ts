import type { Config } from 'tailwindcss';
import { withUt } from 'uploadthing/tw';

import flowbitePlugin from 'flowbite-react/tailwind';

const config: Config = withUt({
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/preline/preline.js',
        flowbitePlugin.content(),
    ],
    theme: {
        extend: {},
    },
    plugins: [require('preline/plugin'), require('@tailwindcss/typography'), flowbitePlugin.plugin()],
});

export default config;
