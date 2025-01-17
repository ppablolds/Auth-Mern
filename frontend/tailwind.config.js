/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"P-Federal-blue": "#03045E",
				"P-Marian-blue": "#023E8A",
				"P-Honolulu-Blue": "#0077B6",
				"P-Blue-Green": "#0096C7",
				"P-Pacific-cyan": "#00B4D8",
				"P-Vivid-sky-blue": "#48CAE4",
				"P-Non-Photo-blue-Dark": "#90E0EF",
				"P-Non-Photo-blue-Light": "#ADE8F4",
				"P-Light-cyan": "#CAF0F8",
			}
		},
	},
	plugins: [],
};
