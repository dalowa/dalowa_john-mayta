import type { Metadata } from 'next'
import { DM_Sans, Inter, Montserrat, Roboto_Mono } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { GenerateMainLayoutMetaData } from '@/utils/Generator'
import { GeneralInfoEndpoint } from '@/data/website-information'

const monserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--monserrat',
})

const roboto_mono = Roboto_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	variable: '--robot_mono',
})

export const generateMetadata = async (): Promise<Metadata> => {
	const data = await GenerateMainLayoutMetaData(GeneralInfoEndpoint)

	const metadata: Metadata = {
		title: {
			default: data.Name as string,
			template: `%s - ${data.Name}`,
		},
		description: data.Description,
		openGraph: {
			images: data.HighlightImageURL,
			description: data.Description,
			title: data.Name,
			emails: data.Contact.Email,
			phoneNumbers: data.Contact.Phone,
		},
		twitter: {
			images: data.HighlightImageURL,
			description: data.Description,
			title: data.Name,
		},
	}
	return metadata
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${monserrat.variable} ${roboto_mono.variable} bg-agatha-gray w-screen overflow-x-hidden `}
			>
				<SpeedInsights />
				{children}
				<Analytics />
			</body>
		</html>
	)
}
