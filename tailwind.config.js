/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-surface': 'var(--purple-800)',
				'secondary-surface': 'var(--purple-600)',
				'primary-text': 'var(--primary-white)',
				'alternate-text': 'var(--purple-50)',
				'score-text': 'var(--purple-800)',
				'box-shadow': 'var(--primary-black)',
				'primary-border': 'var(--primary-black)',


				'primary-input': 'var(--primary-cyan)',
				'primary-btn': 'var(--primary-green)',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

