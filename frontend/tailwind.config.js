import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				handwritten: ['Caveat'],
				chalkboard: ['"Fredericka the Great"'],
				cursive: ['"League Script"'],
				typewriter: ['"Special Elite"'],
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
