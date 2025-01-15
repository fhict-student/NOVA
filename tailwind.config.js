import typography from '@tailwindcss/typography';
import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			screens: {
				desktop: '1024px',
				laptop: '880px',
				tablet: '640px',
				mobile: '576px'
			}
		},
		colors: {
			primary: {
				dark: '#92a8d9',
				light: '#263d6d'
			},
			secondary: {
				dark: '#243f75',
				light: '#8aa5db'
			},
			accent: {
				dark: '#4474d5',
				light: '#2a5bbb'
			},
			background: {
				dark: '#11111a',
				light: '#f0f0f0'
			},
			text: {
				dark: '#dbdbdb',
				light: '#242424'
			}
		}
	},

	// darkMode: 'class',

	plugins: [typography, flowbitePlugin]
};
