/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	safelist: [
		{
			pattern: /bg-.+/
		},
		'mocha',
		'macchiato',
		'frappe',
		'latte'
	],
	plugins: [
		require('@tailwindcss/forms'),
		require('@catppuccin/tailwindcss')({
			prefix: false,
			defaultFlavour: 'frappe'
		}),
		require('daisyui')
	]
};
