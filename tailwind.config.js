module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                shortenbg: 'url("/assets/bg-shorten-mobile.svg")',
                desshortenbg: 'url("/assets/bg-shorten-desktop.svg")',
            },
        },
    },
    plugins: [],
};
