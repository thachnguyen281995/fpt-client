/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Roboto","sans-serif"],
            mont: ["Montserrat","sans-serif"],
            nunito: ["Nunito Sans","sans-serif"],
            poppin: ["Poppins","sans-serif"],
            ibm: ['IBM Plex Sans', 'sans-serif'],
            merri : ['Merriweather']
        },
        extend: {
            colors: {
                primary: "#131921",
                secondary: "#3b4149",
                main: "#1d1d1f",
                grayf5: "#6e6e73",
                whitelight: "#f5f5f7",
                gray23: "#232f3e",
                ededed:"#ededed",
                blue16:"#1677ff",
                text1d:'#1d1d1f',
                price91:'#919191',
                redcb:"#cb1c22",
                blogsingle:'#fcfaf6',
                textInfo:"#444b52"
            },
            margin:{
                '26':'10rem'
            },
            
        },
    },
    plugins: [],
};
