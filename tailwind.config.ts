import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
        './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
        './src/partials/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            poppins: ['var(--font-poopins)'],
        },
        extend: {},
    },
    plugins: [],
}
export default config
