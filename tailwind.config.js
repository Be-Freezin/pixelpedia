/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
      colors: {
        'primary-surface': 'var(--purple-800)',
        'secondary-surface': 'var(--purple-600)',
        'primary-text': 'var(--white)',
        'box-shadow': 'var(--black)',

        'primary-input': 'var(--primary-cyan)',
        'primary-btn': 'var(--primary-green)',

      }
    },
	},
	plugins: [],
}

