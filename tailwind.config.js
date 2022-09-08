module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            laptop: '1024px',
        },
        fontSize: {
            base: ['16px', '24px'],
        },
        extend: {
            colors: {
                'accent-1': '#FAFAFA',
                'accent-2': '#EAEAEA',
                'accent-7': '#333',
                success: '#0070f3',
                cyan: '#79FFE1',
                'zgl-orange': '#FF7F00',
                'zgl-orange-content': '#FFF9F0',
                transparent: 'transparent',
                f7: '#F7F7F7',
                b3: '#333333',
                be6: '#E6E6E6',
                be: '#EEEEEE',
                g9: '#999999',
                'zgl-red-new': '#F60A0A',
                'zgl-red-content': '#FFF2F2',
                'zgl-red-price': '#FF3B30',
            },
            spacing: {
                28: '7rem',
            },
            letterSpacing: {
                tighter: '-.04em',
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                '5xl': '2.5rem',
                '6xl': '2.75rem',
                '7xl': '4.5rem',
                '8xl': '6.25rem',
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
            },
            fontFamily: {
                mobileBase: [
                    'PingFangSC-Regular',
                    'PingFang SC',
                    'PingFangSC',
                    'PingFang-SC',
                    'Helvetica',
                    'Arial',
                    'sans-serif',
                ],
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
