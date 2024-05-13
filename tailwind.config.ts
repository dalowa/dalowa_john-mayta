import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'agatha-black': '#0B0B0B',
				'agatha-gray': '#131313',
				'agatha-text-a': '#DDDDDD',
				'agatha-text-b': '#CECECE',
				'agatha-text-c': '#999999',
				'agatha-button-bg-a': '#2F2F2F',
				'agatha-button-bg-b': '#1E1E1F',
				'agatha-button-bg-c': '#363636',
				'agatha-button-bg-d': '#282828',
			},
			backgroundImage: {},
			width: {
				halfscreen: '50vw',
				'75vw': '75vw',
				'33vw': '33.33vw',
				'25vw': '25vw',
				'20vw': '20vw',
			},
			height: {
				almostscreen: 'calc(100vh - 6rem)',
			},
			screens: {
				sm: '480px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
				'2xl': '1550px',
				'3xl': '2050px',
				'4xl': '2600px',
				'5xl': '3050px',
			},
			translate: {
				'200': '',
			},
			fontFamily: {
				mono: ['var(--robot_mono)', 'monospace'],
				sans: ['var(--monserrat)', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
export default config
