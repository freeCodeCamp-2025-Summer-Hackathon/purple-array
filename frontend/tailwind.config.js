import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {},
		},
	},
	plugins: [typography, daisyui],
	daisyui: {
		themes: [
			'light',
			'dark',
			'cupcake',
			'aqua',
			'wireframe',
			'coffee',
			'night',
			'pastel',
			'nord',
			'sunset',
			'cyberpunk',
		],
	},
};
