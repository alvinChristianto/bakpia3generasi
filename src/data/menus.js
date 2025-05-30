export const menuMain = [
    {
        name: "Halaman Depan",
        url: "/",
        highlighted: false,
    },
    {
        name: "Varian Bakpia",
        url: "/menu",
        highlighted: false,
    },
    {
        name: "Kisah Kami",
        url: "/about-us",
        highlighted: false,
    },
    // {
    //     name: "Gallery",
    //     url: "/gallery",
    //     highlighted: false,
    // },
    // {
    //     name: "Contact",
    //     url: "/contact",
    //     highlighted: false,
    // },
    {
        name: "Pesan Bakpia",
        url: "https://wa.me/6282138060002?text=Halo,%20saya%20ingin%20membeli%20bakpia%203%20generasi%20", 
        highlighted: true,
        target:"_blank",
    },
];

export const footerPrimary = [
    {
        title: "Navigatie",
        items: [
            { name: "home", url: "/" },
        ],
    },
];

export const footerSecondary = [
    {
        title: "support",
        items: [
            { name: "pricing", url: "/pricing" },
        ],
    },
];

export const footerTertiary = [
    {
        title: "Links",
        items: [
            { name: "privacybeleid", url: '/privacy-policy' },
            { name: "api status", url: "/api-status" },
        ],
    },
];
