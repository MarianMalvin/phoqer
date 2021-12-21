const withPWA = require('next-pwa');

const config = {
    async redirects() {
        return [
            {
                source: '/new',
                destination: '/new/1',
                permanent: true,
            },
            {
                source: '/profile',
                destination: '/profile/private',
                permanent: true,
            },
            {
                source: '/profile/private/my-offers',
                destination: '/profile/private/my-offers/all',
                permanent: true,
            },
            {
                source: '/profile/private/settings/',
                destination: '/profile/private/settings/general',
                permanent: true,
            },
        ];
    },
    i18n: {
        locales: ['en', 'ru', 'ua'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['phoqer.com'],
    },
};

module.exports = process.env.NODE_ENV === 'production' ? withPWA(config) : config;
