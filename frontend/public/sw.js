if (!self.define) {
    const e = e => {
            'require' !== e && (e += '.js');
            let c = Promise.resolve();
            return (
                i[e] ||
                    (c = new Promise(async c => {
                        if ('document' in self) {
                            const i = document.createElement('script');
                            (i.src = e), document.head.appendChild(i), (i.onload = c);
                        } else importScripts(e), c();
                    })),
                c.then(() => {
                    if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
                    return i[e];
                })
            );
        },
        c = (c, i) => {
            Promise.all(c.map(e)).then(e => i(1 === e.length ? e[0] : e));
        },
        i = { require: Promise.resolve(c) };
    self.define = (c, a, r) => {
        i[c] ||
            (i[c] = Promise.resolve().then(() => {
                let i = {};
                const n = { uri: location.origin + c.slice(1) };
                return Promise.all(
                    a.map(c => {
                        switch (c) {
                            case 'exports':
                                return i;
                            case 'module':
                                return n;
                            default:
                                return e(c);
                        }
                    }),
                ).then(e => {
                    const c = r(...e);
                    return i.default || (i.default = c), i;
                });
            }));
    };
}
define('./sw.js', ['./workbox-030153e1'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/_next/static/4nBQobIcfNzrHj5Jy64IG/_buildManifest.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/4nBQobIcfNzrHj5Jy64IG/_ssgManifest.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                {
                    url: '/_next/static/chunks/0babfe14cec9cf267470891c09691d24240d913a.abd9e60a57af0fe33190.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/18653b1fa6f0923f25ca27bbcb99b60856300057.836218e6b5fefb5d5155.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/26a111edf4ae71e54d2741955c76fed8ab7ea82b.78d320b78f0e0bdee4f4.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/2d9452e8f692296a8d7d72781ee80d49d3682fb3.5b0d2e1472e2fb951f9d.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/3ff18d740699d44931e5cdfbb388f76f0aba15f9.e1b2809f22647c8f4b43.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/426435d0584197542dff5483205ffa952b2803d6.14179b8ca5611d186879.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/429d8193e78f2ea7c3c0bb339282942b4107a070.90fc4cacb42ef37a2c19.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/783ca3d787f55b6af948c9e808d17b1916129b94.35ddb462fec6cc3d189c.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/93fff2beffa33d526706050583da502cef1c1801.d8c8e64cb2ab06f64ea9.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/a4d41f647cd2886c422a59c4911f8d0204097f27.e350588fc9926f3fdd75.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/a96f0c2a021ea7d9868f83b7ff9d8b28c57d4b11.ff53698cc135d02d4045.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/ae613e39e654f21507f9557652502877c1337196.04ca58b8378642e16ca8.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/b527f44e493d0c3ca3d4a00fc8732c90379d5c28.eccfe2abb00f6ceced00.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                { url: '/_next/static/chunks/commons.10813adb1f710ac29e02.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                {
                    url: '/_next/static/chunks/e5fc3613cd410a6654b9da34e091cfe682499fa1.131c9e21564c289ab3c9.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                { url: '/_next/static/chunks/framework.29f9e2f3d4a33bafbaa5.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/chunks/main-fb33dc49916d84156dad.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/chunks/pages/_app-4333ac8beb14ae7e5dc9.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/chunks/pages/_error-8a1b5c954625c6382bce.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/chunks/pages/auth/forgot-pass-f720510bacefd83c522c.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/chunks/pages/auth/join-3dad3624352abc949d27.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/chunks/pages/auth/login-10dec6c934549fa84a84.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/chunks/pages/favorite-8d47b97d940a7fbecd63.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/chunks/pages/index-b81831f6e0a5b0554330.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                {
                    url: '/_next/static/chunks/pages/new-offer/%5Bstep%5D-f5f8cea461b3be30579d.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                { url: '/_next/static/chunks/pages/offers-420020681a33028bafb7.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                {
                    url: '/_next/static/chunks/pages/offers/%5BofferId%5D-484aa2c56ddb762af739.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/pages/profile/private/analytics-b7c0f2076103c73c9a6d.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/pages/profile/private/messages-33939cac9f64d780d320.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/pages/profile/private/messages/%5Bchat%5D-abc10c867ad942b76fc3.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/pages/profile/private/my-offers/%5BofferStatus%5D-a8527b88df3470b15160.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/pages/profile/private/referral-cf4ad21044270c29aab7.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/pages/profile/private/reviews-bb3cf6e3a6e8ad9e4958.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/pages/profile/private/settings/%5Btab%5D-4ce8caa0e99cb1f4553c.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/chunks/pages/profile/public/%5BprofileId%5D-fdad4eb62cd47dedfd9b.js',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                { url: '/_next/static/chunks/polyfills-7ee9047ae65ef697530c.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/chunks/webpack-245f049e565ebf942e09.js', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/css/b5137272c09b4c700208.css', revision: '4nBQobIcfNzrHj5Jy64IG' },
                { url: '/_next/static/css/c3cba07770811c259c71.css', revision: '4nBQobIcfNzrHj5Jy64IG' },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-200.14d81a205d0bf9eb95c55ef7b0e9b9ef.woff2',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-200.1f5c3c0d0b06612749ab3aa2e8fc3c5c.woff',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-200.3d508a80c30ad1cffaddfe429df6616b.svg',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-200.3f62ad9b414b465fdde90aa111c13fca.eot',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-200.833d605d1c26b0712ab05b8a73098ede.ttf',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-300.0c3783781c48cfcea845562c50927569.svg',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-300.3cc071d85ea3f7f6819a6c14a7acfad5.woff',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-300.7793baee5328006f31250ec9f2b3b38e.eot',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-300.a5933808c4564a3f4095f1029be6cb4e.woff2',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-300.f0e26ef9e9e87a9320d65a08a782f0d5.ttf',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-500.057bc00d3ab1fcfca0683ce3c68e7a12.woff2',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-500.13dd0ad41fb370ace5aaaf70c9b6300e.eot',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-500.6e1f7d3787594a69ed456275d2debff0.woff',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-500.7ac059171ee59fbe8b33565ba138d089.ttf',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-500.ebf71ddd0fe3ca70ddd346e7c300fc48.svg',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-600.160f4d63e15ce27241b6e8f006b77c5a.svg',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-600.22d22edc51b42df22dbc86e486778bde.eot',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-600.257ff2ade74c135ac41efff0e99519f5.ttf',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-600.76f41669c841bc25d1b71f4e34e831fe.woff',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-600.eb4735b30729893f823d0cd355a377f1.woff2',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-700.082762b455a3f227e8ac329c283f8ad6.woff',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-700.6cbb516e629a7542e7a823790091e885.ttf',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-700.d7874418aba069eb92e8aa36e97004ad.eot',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-700.e9dea54ec59e29a6913f2b5829d766b9.woff2',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-700.fac85a3030008d30b0b8faaaa0edf48d.svg',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-800.0546360978b1d8330d96f4423876795b.svg',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-800.69621f66b7245737a408a0ba9b869b27.woff',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-800.6e45a402530262bfae047451d493fa76.ttf',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-800.b87367c681e6c4a5a8c41e6369fc7757.eot',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-800.c77eb21b0e700dc73f10492fbb18924d.woff2',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-900.0cad49203d23028cdc51ee2763e91ec8.eot',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-900.3caa960f166517a4a9f70be47e24b7ce.svg',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-900.66d2367570bd7a14558b6552cc4b2348.woff',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-900.d04e4634eb8b566e1bd0b81d92eaae70.woff2',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-900.ecc6ec3f6771ae3135e0c4008b4e97cf.ttf',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-regular.22d8566c41c8d731931b58ae64f72170.svg',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-regular.4ff99841b08686bda3f7921d91044afb.ttf',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-regular.c1ba4359982fe0cc48ec8d1ad403fdeb.woff',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-regular.dc9c0830fb34ea831853f6b5c49dd0fa.eot',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                {
                    url: '/_next/static/media/montserrat-v15-latin_cyrillic-regular.f263cfd0a6fa311229a6321b6f901d03.woff2',
                    revision: '4nBQobIcfNzrHj5Jy64IG',
                },
                { url: '/about.jpg', revision: 'f690d61d93efd2d62d26cd238d9ea879' },
                { url: '/about/bicycle.jpeg', revision: '990f1228dc07c81ec3911d2a76ca5102' },
                { url: '/about/bicycle1280.jpeg', revision: '600ec24c4740f16bd3291baeb6b84955' },
                { url: '/about/bicycle1920.jpeg', revision: 'f84d889c665d49e98f3a94f11e2a2c58' },
                { url: '/about/bicycle640.jpeg', revision: '5728dd958616439089cde4d0572d3097' },
                { url: '/about/camera.jpeg', revision: '4248c78139a24bd1bd37f6f1225f483d' },
                { url: '/about/camera1280.jpeg', revision: '7a9638efdbe4180f1789b267285c961b' },
                { url: '/about/camera1920.jpeg', revision: '0a1d88db0206b095ba369066842a3d31' },
                { url: '/about/camera640.jpeg', revision: '5210d866025ec8cf3ca54c31cecd0c41' },
                { url: '/about/console.jpeg', revision: '4fddd023912d6fc81a8bf0cb040127ce' },
                { url: '/about/console1280.jpeg', revision: 'a9f968e721a2cecb444ed912f04fdbb7' },
                { url: '/about/console1920.jpeg', revision: '2c73c87303aff91f5d027ed1a28a0a52' },
                { url: '/about/console640.jpeg', revision: '82c6ed3d0ce93aeef8b59ffd3de0efd4' },
                { url: '/about/drone.jpeg', revision: 'f9e45d7ab1ddd6fd96a0c474b2f7e635' },
                { url: '/about/drone1280.jpeg', revision: '85bdb8543319b423b7ce9147436955ac' },
                { url: '/about/drone1920.jpeg', revision: 'd36b246507988e2b724e7c42ad72d77b' },
                { url: '/about/drone640.jpeg', revision: '0ee172d2418092dae3b768c0239ce388' },
                { url: '/about/laptop.jpeg', revision: 'c518a98a084406fcd03fe539da1d55b2' },
                { url: '/about/laptop1280.jpeg', revision: '5c3d87ae75d5002e02d7a490484e5b2f' },
                { url: '/about/laptop1920.jpeg', revision: '14e5c4ef1ef8f7b16a89944af5092762' },
                { url: '/about/laptop640.jpeg', revision: '79a4f6b406c48c43016bbcf3b73e40fd' },
                { url: '/about/vr.jpeg', revision: 'cbcfb5fd66ebf8065af0ac87a2ed1cd3' },
                { url: '/about/vr1280.jpeg', revision: 'b976ac36a33399caf6e8de227e533828' },
                { url: '/about/vr1920.jpeg', revision: '62f43297e4a2ebddd3d6b45be5c7c492' },
                { url: '/about/vr640.jpeg', revision: 'c3a38e0ef8009610492d9e06cef432e0' },
                { url: '/emoji/delivery.png', revision: '3d303ee0a2c6f0d7f4b3402ca84f9e1b' },
                { url: '/emoji/documents.png', revision: '5959eecb47ceabd0ebb1bb7b1f1151ff' },
                { url: '/emoji/empty.png', revision: '33c650305a7cbc2f22608b5ba1874209' },
                { url: '/emoji/error.png', revision: '1669a7d6224ab1e8bf2b6086d1750e09' },
                { url: '/emoji/gift.png', revision: '11fcef3ad6b6fa0986ed4af4c4e81cb2' },
                { url: '/emoji/map.png', revision: '9c489914d0fe5201f7d2da8038e424da' },
                { url: '/emoji/monay.png', revision: '94f8e0a9fe8a9179ea77b4fda5dede55' },
                { url: '/emoji/success.png', revision: 'ea3f8ead7ef00e1457c7e3014c16850f' },
                { url: '/emoji/thinking.png', revision: 'd2a381e492ca9483876ecca2747a3be7' },
                { url: '/emoji/top.png', revision: 'bdf9cba561a764c65458148edb628b37' },
                { url: '/favicon.ico', revision: '53976d1ec1df3c5ad89be2b11ac5de6d' },
                { url: '/forgot_pass.jpg', revision: '6678c008a4be4ce84f20446079bd9e6c' },
                { url: '/icons/icon-128.png', revision: '6c3eaa83941835b95ba71bb6a24e32f0' },
                { url: '/icons/icon-144.png', revision: 'ddc9072358a8d945735e03c34f066c3f' },
                { url: '/icons/icon-152.png', revision: 'f061b4fad2bdd258ccc6c3035074c28b' },
                { url: '/icons/icon-192.png', revision: 'a085c635ea9fbfd2922976fc2ca5c2a9' },
                { url: '/icons/icon-384.png', revision: 'a6af2117e19ccc8351db766ce832ed3d' },
                { url: '/icons/icon-512.png', revision: '4649b89b7d29f165d077e732341950bc' },
                { url: '/icons/icon-72.png', revision: '97c080db43448d07b425cedc2f4f6b32' },
                { url: '/icons/icon-96.png', revision: '6bca22d1975f31533244bb544adac17f' },
                { url: '/join.jpg', revision: 'b97f373755a109f389d8290c26e0ad1a' },
                { url: '/login.jpg', revision: '52554b9a6bc557230f13d182cc199c42' },
                { url: '/logo.png', revision: 'c9c9c26add524b3552608af75de96da8' },
                { url: '/manifest.json', revision: '6fe5d9bf31df269dcbed0374d4c245d9' },
                { url: '/no_img.png', revision: '210272344c90c2d6545f192936eb7b4f' },
                { url: '/spinner.gif', revision: '7fc09f7a20685bfbdccd4d80c9acab59' },
            ],
            { ignoreURLParametersMatching: [] },
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            '/',
            new e.NetworkFirst({
                cacheName: 'start-url',
                plugins: [new e.ExpirationPlugin({ maxEntries: 1, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })],
            }),
            'GET',
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts',
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0 })],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-font-assets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 })],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-image-assets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-js-assets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({
                cacheName: 'static-style-assets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({
                cacheName: 'static-data-assets',
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })],
            }),
            'GET',
        ),
        e.registerRoute(
            /\/api\/.*$/i,
            new e.NetworkFirst({
                cacheName: 'apis',
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })],
            }),
            'GET',
        ),
        e.registerRoute(
            /.*/i,
            new e.NetworkFirst({
                cacheName: 'others',
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 })],
            }),
            'GET',
        );
});
