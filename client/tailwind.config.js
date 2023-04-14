/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// 'primary': '#9067C6',
				// 'secondary': '#8D86C9',
				// 'bg-primary': '#0b0c12',
				// 'bg-secondary': '#110F1A',
				// 'text-primary': '#F7ECE1',
				// 'text-secondary': '#CAC4CE'
				'primary': '#848FA5',
				'accent': '#C14953',
				'bg-primary': '#2D2D2A',
				'bg-secondary': '#4C4C47',
				'text-primary': '#E5DCC5',
				'text-secondary': '#E6DCC7'
				// 'text-accent': ''
			},
			fontFamily: {
				main: ['Rubik', 'monospace']
			}
		}
	},
	plugins: []
}
