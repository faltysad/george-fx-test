module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            gridTemplateRows: {
                table: "100px 100px 1fr",
            },
            gridTemplateColumns: {
                table: "300px 1fr 150px",
                tableSmall: "3fr 1fr 1fr",
                flagWrapper: "70px 1fr",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
