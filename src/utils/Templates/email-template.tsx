import * as React from 'react'

interface EmailTemplateProps {
	email: string
	weddingDate: string
	weddingLocation: string
	whatsapp: string
	fullName: string
	howFoundUs: string
}

const stilos = {}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	email,
	weddingDate,
	weddingLocation,
	whatsapp,
	fullName,
	howFoundUs,
}) => (
	<ul>
		<li>{`Email :${email}`}</li>
		<li>{`Wedding date :${weddingDate}`}</li>
		<li>{`Wedding Location :${weddingLocation}`}</li>
		<li>{`Whatsapp number :${whatsapp}`}</li>
		<li>{`Full name :${fullName}`}</li>
		<li>{`How found us :${howFoundUs}`}</li>
	</ul>
)
