/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#e8dab2",
                secondary: "#dd6e42",
                accent: "#4f6d7a",
                dark: "#333333"
            },
            fontFamily: {
            }
        },
    },
    plugins: [],
}

