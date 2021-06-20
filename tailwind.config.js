module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
        },
        extend: {
            colors: {
                primary: {
                    100: '#F2F2F2',
                    200: '#20f7c4',
                    300: '#1ee3b4',
                    400: '#1ad6aa',
                    500: '#16BC94',
                    600: '#139c7b',
                    700: '#118a6d',
                    800: '#0f735b',
                    900: '#1E2025',
                },
                gray: {
                    base: '#C4C4C4',
                    100: '#F2F2F2',
                    200: '#edf2f7',
                    300: '#e2e8f0',
                    400: '#cbd5e0',
                    500: '#a0aec0',
                    600: '#718096',
                    700: '#4a5568',
                    800: '#6A6B6B',
                    900: '#1E2025',
                },
                twitter: '#1DA1F2',
                discord: '#7289DA',
            },
            borderColor: {
                gray: '#C4C4C4',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            lineHeight: {
                hero: '4.5rem',
            },
        },
        screens: {
            xs: '480px',
            // => @media (min-width: 480px) { ... }

            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

            '3xl': '1920px',
            // => @media (min-width: 1920px) { ... }
        },
    },
    variants: {},
    plugins: [],
};
