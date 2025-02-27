/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--foreground)",
                secondary: "var(--foreground)",
                darkBlack: "#000",
            },
            fontSize: {
                huge: "18rem"
            },
            height: {
                // screen:"100dvh"
            },
            keyframes: {
                hero: {
                    "0": {
                        transform: "translateX(100rem) rotate(360deg)",
                        opacity: 0
                    },
                    "100": {
                        transform: "translateX(0) ",
                        opacity: 1
                    }
                },
                fadeIn: {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(10px)", // Start from below
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)", // End at normal position
                    },
                },
                "design-1": {
                    "0%": {width: "0%"},
                    "100%": {width: "80%"}
                }
            },
            animation: {
                hero: "hero 2s ease-out",
                fadeIn: "fadeIn 1s ease-out",
                "design-1":"design-1 4s infinite cubic-bezier(1,0,0,1)"

            }

        },
    },
    plugins: [],
};
