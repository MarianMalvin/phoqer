if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return c[e]||(i=new Promise((async i=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},i=(i,c)=>{Promise.all(i.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(i)};self.define=(i,a,s)=>{c[i]||(c[i]=Promise.resolve().then((()=>{let c={};const r={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return c;case"module":return r;default:return e(i)}}))).then((e=>{const i=s(...e);return c.default||(c.default=i),c}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Nycz_6uoFQmPl6pesKgCz/_buildManifest.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/Nycz_6uoFQmPl6pesKgCz/_ssgManifest.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/1755-97e94c2155b978c0a1f4.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/2575-55fbd796e65494e848d7.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/2796-cc2e98331efbb3363ceb.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/2935-0449c8bb4488d3cae3de.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/3018-4e7040a20ccb2d4129fc.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/4607-1e7e611b900429f4d517.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/4632-2a4d61c97c4bf064d0b7.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/5418-3e5e4148f55c2d7b826a.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/6066-331efa2b005461627802.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/6077-9fd7a9d1e2960d3a91f2.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/628-91b440eef3449a818bfc.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/6569-19d9b9c0ecfd8c6912bb.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/7472-05e2daa6a0d325e95174.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/7516-d7d47b3f86dbc4babe86.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/8030-20d16fa062c82826822b.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/9005-092e203af8c496f65e54.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/9121-43565afc2a27134fc4bd.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/9167-5e9041d437ac4c2ae97d.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/925-43eba75b91f15e9d851f.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/9f542e2b.5f8628caa10c788f5462.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/framework-336caa3f6419768205fe.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/main-85f79af7552b5c3cd41b.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/404-9535ab9f9f42fafbc575.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/_app-2d85933f6240aee70647.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/_error-cd3a4dcc303cc09fa80f.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/auth/confirmation-e65bbed5465440ab1e2d.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/auth/forgot-pass-0c1620c0366345d6ec32.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/auth/join-f548ff97a91eedcd3189.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/auth/login-dcbf6229bb591904c541.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/favorite-48b2ff13b13074922fc7.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/index-2d2c71db56778145ce34.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/offers-f6de9a6a22f033e0e010.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/offers/%5BofferId%5D-db63444e4c7df18810cf.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/offers/edit/%5BofferId%5D-58e785fe2fee60d6a08b.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/offers/new/%5Bstep%5D-bb74b7287219da7df0b4.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/profile/%5BprofileId%5D-bcda54b5a163cbbc416d.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/profile/private-cff43015e6e864a5baa6.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/profile/private/analytics-9814750ab8c3bd4571d6.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/profile/private/chat-71b67c0ae19556aef83e.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/profile/private/chat/%5Bchat%5D-e6be41ca6817aa9635db.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/profile/private/chat/new/%5BofferId%5D-4e6c5c76b8677ef400e3.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/profile/private/my-offers/%5BofferStatus%5D-44c979487904fd28eae5.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/profile/private/referral-c924de5583e5cd17b5c7.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/profile/private/reviews-ce5ce1de6a3a5a06dde0.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/profile/private/settings/%5BactiveTab%5D-2a141c4308ec74d88f53.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/static/business-d27ad2a7d5a458c3a61c.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/static/faq-0a289d9cd2c530047f6a.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/static/help-14f6066dba0dfb7d1bc7.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/static/map-ae1b0ead5e568d4fced3.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/static/politic-4b1d0aedd5db374a3bbc.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/static/rules-681b43d4a0f5523588c0.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/pages/static/safety-a4b63393b87b483eb0e9.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/polyfills-b69b38e0e606287ba003.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/chunks/webpack-83cf675e2ad1cb628c53.js",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/css/be86071692faaf407409.css",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-200.14d81a205d0bf9eb95c55ef7b0e9b9ef.woff2",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-200.1f5c3c0d0b06612749ab3aa2e8fc3c5c.woff",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-200.3d508a80c30ad1cffaddfe429df6616b.svg",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-200.3f62ad9b414b465fdde90aa111c13fca.eot",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-200.833d605d1c26b0712ab05b8a73098ede.ttf",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-300.0c3783781c48cfcea845562c50927569.svg",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-300.3cc071d85ea3f7f6819a6c14a7acfad5.woff",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-300.7793baee5328006f31250ec9f2b3b38e.eot",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-300.a5933808c4564a3f4095f1029be6cb4e.woff2",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-300.f0e26ef9e9e87a9320d65a08a782f0d5.ttf",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-500.057bc00d3ab1fcfca0683ce3c68e7a12.woff2",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-500.13dd0ad41fb370ace5aaaf70c9b6300e.eot",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-500.6e1f7d3787594a69ed456275d2debff0.woff",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-500.7ac059171ee59fbe8b33565ba138d089.ttf",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-500.ebf71ddd0fe3ca70ddd346e7c300fc48.svg",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-600.160f4d63e15ce27241b6e8f006b77c5a.svg",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-600.22d22edc51b42df22dbc86e486778bde.eot",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-600.257ff2ade74c135ac41efff0e99519f5.ttf",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-600.76f41669c841bc25d1b71f4e34e831fe.woff",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-600.eb4735b30729893f823d0cd355a377f1.woff2",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-700.082762b455a3f227e8ac329c283f8ad6.woff",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-700.6cbb516e629a7542e7a823790091e885.ttf",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-700.d7874418aba069eb92e8aa36e97004ad.eot",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-700.e9dea54ec59e29a6913f2b5829d766b9.woff2",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-700.fac85a3030008d30b0b8faaaa0edf48d.svg",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-800.0546360978b1d8330d96f4423876795b.svg",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-800.69621f66b7245737a408a0ba9b869b27.woff",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-800.6e45a402530262bfae047451d493fa76.ttf",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-800.b87367c681e6c4a5a8c41e6369fc7757.eot",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-800.c77eb21b0e700dc73f10492fbb18924d.woff2",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-900.0cad49203d23028cdc51ee2763e91ec8.eot",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-900.3caa960f166517a4a9f70be47e24b7ce.svg",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-900.66d2367570bd7a14558b6552cc4b2348.woff",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-900.d04e4634eb8b566e1bd0b81d92eaae70.woff2",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-900.ecc6ec3f6771ae3135e0c4008b4e97cf.ttf",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-regular.22d8566c41c8d731931b58ae64f72170.svg",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-regular.4ff99841b08686bda3f7921d91044afb.ttf",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-regular.c1ba4359982fe0cc48ec8d1ad403fdeb.woff",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-regular.dc9c0830fb34ea831853f6b5c49dd0fa.eot",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/_next/static/media/montserrat-v15-latin_cyrillic-regular.f263cfd0a6fa311229a6321b6f901d03.woff2",revision:"Nycz_6uoFQmPl6pesKgCz"},{url:"/about.jpeg",revision:"e2cd43f642c8a95fb7544a4b079f307d"},{url:"/about.jpg",revision:"e2cd43f642c8a95fb7544a4b079f307d"},{url:"/about/bg_confirmation.jpg",revision:"faf1c5e6863ce4f94fe9f0261995e3ba"},{url:"/about/bicycle.jpeg",revision:"990f1228dc07c81ec3911d2a76ca5102"},{url:"/about/bicycle1280.jpeg",revision:"600ec24c4740f16bd3291baeb6b84955"},{url:"/about/bicycle1920.jpeg",revision:"f84d889c665d49e98f3a94f11e2a2c58"},{url:"/about/bicycle640.jpeg",revision:"5728dd958616439089cde4d0572d3097"},{url:"/about/camera.jpeg",revision:"4248c78139a24bd1bd37f6f1225f483d"},{url:"/about/camera1280.jpeg",revision:"7a9638efdbe4180f1789b267285c961b"},{url:"/about/camera1920.jpeg",revision:"0a1d88db0206b095ba369066842a3d31"},{url:"/about/camera640.jpeg",revision:"5210d866025ec8cf3ca54c31cecd0c41"},{url:"/about/console.jpeg",revision:"4fddd023912d6fc81a8bf0cb040127ce"},{url:"/about/console1280.jpeg",revision:"a9f968e721a2cecb444ed912f04fdbb7"},{url:"/about/console1920.jpeg",revision:"2c73c87303aff91f5d027ed1a28a0a52"},{url:"/about/console640.jpeg",revision:"82c6ed3d0ce93aeef8b59ffd3de0efd4"},{url:"/about/drone.jpeg",revision:"f9e45d7ab1ddd6fd96a0c474b2f7e635"},{url:"/about/drone1280.jpeg",revision:"85bdb8543319b423b7ce9147436955ac"},{url:"/about/drone1920.jpeg",revision:"d36b246507988e2b724e7c42ad72d77b"},{url:"/about/drone640.jpeg",revision:"0ee172d2418092dae3b768c0239ce388"},{url:"/about/laptop.jpeg",revision:"c518a98a084406fcd03fe539da1d55b2"},{url:"/about/laptop1280.jpeg",revision:"5c3d87ae75d5002e02d7a490484e5b2f"},{url:"/about/laptop1920.jpeg",revision:"14e5c4ef1ef8f7b16a89944af5092762"},{url:"/about/laptop640.jpeg",revision:"79a4f6b406c48c43016bbcf3b73e40fd"},{url:"/about/vr.jpeg",revision:"cbcfb5fd66ebf8065af0ac87a2ed1cd3"},{url:"/about/vr1280.jpeg",revision:"b976ac36a33399caf6e8de227e533828"},{url:"/about/vr1920.jpeg",revision:"62f43297e4a2ebddd3d6b45be5c7c492"},{url:"/about/vr640.jpeg",revision:"c3a38e0ef8009610492d9e06cef432e0"},{url:"/backdrop/0.jpeg",revision:"9b19e98a6907d4febb06276973618eb9"},{url:"/backdrop/1.jpeg",revision:"1599fb5ba45f5389ed988be545a08084"},{url:"/backdrop/10.jpeg",revision:"87896cef510ce690dc3ec87cc8ab1246"},{url:"/backdrop/2.jpeg",revision:"5c98c561b8929ced8cc1412c7a4fcfc9"},{url:"/backdrop/3.jpeg",revision:"fb815ebdeb4616ebd5ef1b49afabfe86"},{url:"/backdrop/4.jpeg",revision:"53bd519199d6cd4e8447301f711cca42"},{url:"/backdrop/5.jpeg",revision:"84a87caf33000e61a3d820e835e258a2"},{url:"/backdrop/6.jpeg",revision:"510034b4784570204d2e570163ff8445"},{url:"/backdrop/7.jpeg",revision:"031c896b774bdebe9e037a32cc8be1af"},{url:"/backdrop/8.jpeg",revision:"824121fdd4db28502e243a031a3cb033"},{url:"/backdrop/9.jpeg",revision:"001a6d2a942cdfe294822f931a5ce0aa"},{url:"/construction/0.gif",revision:"e5401a0b53960601b4c09116dac88eff"},{url:"/construction/1.gif",revision:"425870347c08de0dc98a197cd2545025"},{url:"/construction/10.gif",revision:"e5401a0b53960601b4c09116dac88eff"},{url:"/construction/2.gif",revision:"255f214363e4d06b77e1a65d6f8ba568"},{url:"/construction/3.gif",revision:"ad635524e2cd327ef21d6c65ed435aed"},{url:"/construction/4.gif",revision:"e5401a0b53960601b4c09116dac88eff"},{url:"/construction/5.gif",revision:"425870347c08de0dc98a197cd2545025"},{url:"/construction/6.gif",revision:"255f214363e4d06b77e1a65d6f8ba568"},{url:"/construction/7.gif",revision:"ad635524e2cd327ef21d6c65ed435aed"},{url:"/construction/8.gif",revision:"e5401a0b53960601b4c09116dac88eff"},{url:"/construction/9.gif",revision:"255f214363e4d06b77e1a65d6f8ba568"},{url:"/emoji/chat.png",revision:"95bfd9a5201aadb915908a6fd0e8f009"},{url:"/emoji/delivery.png",revision:"3d303ee0a2c6f0d7f4b3402ca84f9e1b"},{url:"/emoji/documents.png",revision:"5959eecb47ceabd0ebb1bb7b1f1151ff"},{url:"/emoji/empty.png",revision:"33c650305a7cbc2f22608b5ba1874209"},{url:"/emoji/error.png",revision:"1669a7d6224ab1e8bf2b6086d1750e09"},{url:"/emoji/gift.png",revision:"11fcef3ad6b6fa0986ed4af4c4e81cb2"},{url:"/emoji/map.png",revision:"9c489914d0fe5201f7d2da8038e424da"},{url:"/emoji/monay.png",revision:"94f8e0a9fe8a9179ea77b4fda5dede55"},{url:"/emoji/party.png",revision:"2289bc62c631e2f2fee94a0a4ae3cb3e"},{url:"/emoji/success.png",revision:"ea3f8ead7ef00e1457c7e3014c16850f"},{url:"/emoji/thinking.png",revision:"d2a381e492ca9483876ecca2747a3be7"},{url:"/favicon.ico",revision:"6ebd6c1b6d02fb0cf3d34ccdb9cd23d6"},{url:"/forgot_pass.jpg",revision:"6678c008a4be4ce84f20446079bd9e6c"},{url:"/icons/icon-128.png",revision:"aca1248ef53f78dbabd3cf36e8e6e0b7"},{url:"/icons/icon-144.png",revision:"0f5470cb4f8ce7e37d3c158caaa6a0ce"},{url:"/icons/icon-152.png",revision:"4724afb6a7ea787c262c882a7b662e93"},{url:"/icons/icon-192.png",revision:"a9209456c0ab1d10486f4b1e97ecd314"},{url:"/icons/icon-384.png",revision:"a9209456c0ab1d10486f4b1e97ecd314"},{url:"/icons/icon-512.png",revision:"a9209456c0ab1d10486f4b1e97ecd314"},{url:"/icons/icon-72.png",revision:"5ae4b4cf1fd556d0f882eb8d7d14364a"},{url:"/icons/icon-96.png",revision:"6cf546ebea332dbe68a324945f179396"},{url:"/icons/mask-icon.png",revision:"a9209456c0ab1d10486f4b1e97ecd314"},{url:"/join.jpg",revision:"b97f373755a109f389d8290c26e0ad1a"},{url:"/login.jpg",revision:"52554b9a6bc557230f13d182cc199c42"},{url:"/logo.svg",revision:"ece6c9dee16b82eab90eae772d08364f"},{url:"/manifest.json",revision:"6fe5d9bf31df269dcbed0374d4c245d9"},{url:"/no_data.gif",revision:"24f1671b0f3f6c2418db36a9270b1506"},{url:"/no_img.png",revision:"210272344c90c2d6545f192936eb7b4f"},{url:"/robots.txt",revision:"2069ca9139d827d77b8acd72ddf2f803"},{url:"/sitemap.xml",revision:"badabf4322443167e85e91409b8b36fe"},{url:"/spinner.gif",revision:"7fc09f7a20685bfbdccd4d80c9acab59"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:c,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
