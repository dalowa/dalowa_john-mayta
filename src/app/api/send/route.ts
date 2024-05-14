import { EmailTemplate } from '@/utils/Templates/email-template'
import { NextResponse, type NextRequest } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(response: NextRequest) {
	const requestHeaders = new Headers(response.headers)

	function limpiarCadena(texto: string) {
		// Expresión regular que permite letras (mayúsculas y minúsculas), @, ., ,, _, - y +, y espacios en blanco
		const regex = /[a-zA-Z@.,_+\-\s]+/g
		// Aplica la expresión regular al texto y une los resultados en una cadena limpia
		// texto.match(regex)!.join('');

		return texto
	}

	const email: string = limpiarCadena(requestHeaders.get('email') as string)
	const weddingDate: string = limpiarCadena(requestHeaders.get('weddingDate') as string)
	const weddingLocation: string = limpiarCadena(requestHeaders.get('weddingLocation') as string)
	const whatsapp: string = limpiarCadena(requestHeaders.get('whatsapp') as string)
	const fullName: string = limpiarCadena(requestHeaders.get('fullName') as string)
	const howFoundUs: string = limpiarCadena(requestHeaders.get('howFoundUs') as string)
	const message: string = limpiarCadena(requestHeaders.get('message') as string)

	try {
		const data = await resend.emails.send({
			from: 'SevenServices <onboarding@resend.dev>',
			to: ['david.urbano.mmiii@gmail.com'],
			subject: 'New client',
			react: EmailTemplate({
				email,
				weddingDate,
				weddingLocation,
				whatsapp,
				fullName,
				howFoundUs,
				message
			}),
			text: '',
		})

		return NextResponse.json(data)
	} catch (error) {
		return NextResponse.json({ error })
	}
}
