/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},

				apper: {
					"0%": {
						transform: "translateY(-50vh)",
					},
					"100%": {
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out",

				apper: "apper 1s ease-in-out",
			},
		},
	},
	plugins: [],
};
