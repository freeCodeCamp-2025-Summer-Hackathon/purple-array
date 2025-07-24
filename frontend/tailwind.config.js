import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	important: true,
	theme: {
		extend: {
			fontFamily: {
				caveat: ['Caveat'], //handwritten
				fre: ['"Fredericka the Great"'], //chalk
				league: ['"League Script"'], // cursive
				type: ['"Special Elite"'], // typewriter
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			},
		},
	},
	plugins: [typography, daisyui],
	daisyui: {
		themes: [
			'cupcake',
			'wireframe',
			'valentine',
			'garden',
			'pastel',
			'dracula',
			'night',
			'coffee',
			'winter',
			'sunset',
			{
				writeLight: {
					primary: '#463aa2',
					secondary: '#4b4b4b',
					accent: '#8f97ff',
					neutral: '221551',
					'base-100': '#ffffff',
					info: '#8fd6ff',
					success: '#96f2b9',
					warning: '#fdff8f',
					error: '#ff7a7a',
				},
			},
		],
	},
};
