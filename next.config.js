/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['antd-mobile']);

module.exports = withTM({
    images: {
        domains: ['localhost', 'static2.zugeliang01.com', 'static2.zugeliang.com'],
    },
    reactStrictMode: true,
    trailingSlash: true,
    async rewrites() {
        return [
            {
                source: '/homeData',
                destination: 'https://m.zugeliang.com/api/enterprise/homeData',
            },
            {
                source: '/pcmall/:path*/',
                destination: 'https://appserver.zugeliang.com/pcmall/:path*/',
            },
        ];
    },
});
