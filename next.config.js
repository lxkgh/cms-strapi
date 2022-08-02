/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['antd-mobile']);

module.exports = withTM({
    images: {
        domains: ['localhost'],
    },
    reactStrictMode: true,
});
