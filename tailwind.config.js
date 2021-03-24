module.exports = {
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            //为textColor开启visited变体
            textColor: ["visited"],
            borderWidth: ["hover"],
            borderRadius: ["hover"],
        },
    },
    plugins: [],
};
