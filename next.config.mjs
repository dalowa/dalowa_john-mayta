/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'photos.smugmug.com',
				port: '',
				pathname: '/**/**/**/**/**/**/*',
			},
			{
				protocol: 'https',
				hostname: 'cdn.alboompro.com',
				port: '',
				pathname: '/**/**/**/**/**/**/*',
			},
			{
				protocol: 'https',
				hostname: 'demo.themetorium.net',
				port: '',
				pathname: '/**/**/**/**/**/**/*',
			},
		],
		unoptimized: true,
	},
	staticPageGenerationTimeout: 1800,
}

export default nextConfig
