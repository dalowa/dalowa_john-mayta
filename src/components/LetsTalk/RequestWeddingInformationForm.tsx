'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

interface Props {}

const RequestWeddingInformationForm = ({}: Props) => {
	const [email, setEmail] = useState('')
	const [weddingDate, setWeddingDate] = useState('')
	const [weddingLocation, setWeddingLocation] = useState('¿Dónde es la boda?')
	const [whatsapp, setWhatsapp] = useState('')
	const [fullName, setFullName] = useState('')
	const [howFoundUs, setHowFoundUs] = useState('¿Cómo se enteró de nosotros?')
   const [message, setMessage] = useState("")

	const formReady = () => {
		const v =
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
			weddingDate !== '' &&
			weddingLocation !== '' &&
			/^[0-9+ ]{7,}$/.test(whatsapp) &&
			/^(?=.*[a-zA-Z])[\w\s]{2,40}$/.test(fullName) &&
			howFoundUs !== '¿Cómo se enteró de nosotros?' && message !== ''
		console.log(v)
		return v
	}

   const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value)
   }

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		/* if(emailRegex.test(e.target.value)){
            setEmail(e.target.value);
        } */
		setEmail(e.target.value)
	}

	const handleWeddingDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWeddingDate(e.target.value)
	}

	const handleWeddingLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setWeddingLocation(e.target.value)
	}

	const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const wspRegex = /^[0-9+ ]{7,}$/

		setWhatsapp(e.target.value)
	}

	const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fullNameRegex = /^(?=.*[a-zA-Z])[\w\s]{2,40}$/

		setFullName(e.target.value)
	}

	const handleHowFoundUsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setHowFoundUs(e.target.value)
	}

	const handleSend = async (e: FormEvent) => {
		if (formReady()) {
			const res = await fetch('/api/send', {
				method: 'POST',
				headers: {
					email,
					weddingDate,
					weddingLocation,
					whatsapp,
					fullName,
					howFoundUs,
					message
				},
			})
			const data = await res.json()
			console.log(data)
		} else {
			e.preventDefault()
		}
	}

	return (
		<>
			<form className="flex flex-col w-full items-center py-[1.5rem] backdrop:font-mono font-light text-xs xl:flex-row xl:flex-wrap xl:justify-between">
				<div className="flex flex-col w-full gap-[0.5rem] py-[0.5rem] basis-[32%]">
					<input
						onChange={handleEmailChange}
						required
						className={`${/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'border-[1px] border-green-400 text-agatha-text-a' : email == '' ? 'border-[1px] border-agatha-text-c/20 text-agatha-text-c/20 uppercase' : 'border-[1px] text-agatha-text-b border-red-500 '} bg-agatha-button-bg-f px-[0.75rem] py-[0.5rem] outline-none  rounded-3xl w-full `}
						type="email"
						placeholder="Su correo electrónico"
						title="email"
					/>
				</div>
				<div className="flex flex-col w-full gap-[0.5rem] py-[0.5rem] basis-[32%]">
					<input
						required
						onChange={handleWeddingDateChange}
						className={`${weddingDate !== '' ? 'border-[1px] border-green-400 text-agatha-text-a' : weddingDate == '' ? 'border-[1px] border-agatha-text-c/20 text-agatha-text-c uppercase' : 'border-[1px] text-agatha-text-b border-red-500'} bg-agatha-button-bg-f px-[0.75rem] py-[0.5rem] outline-none  rounded-3xl w-full`}
						type="date"
						placeholder=""
						title="email"
					/>
				</div>
				<div className="flex flex-col w-full gap-[0.5rem] py-[0.5rem] basis-[32%]">
					<select
						value={weddingLocation}
						onChange={handleWeddingLocationChange}
						className={`${weddingLocation !== '¿Dónde es la boda?' ? 'border-[1px] border-green-400 text-agatha-text-a' : weddingLocation == '¿Dónde es la boda?' ? 'border-[1px] border-agatha-text-c/20 text-agatha-text-c uppercase' : 'border-[1px] border-red-500 ' } bg-agatha-button-bg-f px-[0.75rem] py-[0.5rem] outline-none rounded-3xl uppercase `}
						title="¿Dónde es la boda?"
						name="¿Dónde es la boda?"
						id="wedding"
					>
						<option disabled>¿Dónde es la boda?</option>
						<option value="Lima">Lima</option>
						<option value="Cusco">Cusco</option>
						<option value="Arequipa">Arequipa</option>
						<option value="Trujillo">Trujillo</option>
						<option value="Huancayo">Huancayo</option>
						<option value="Piura">Piura</option>
						<option value="Tumbes">Tumbes</option>
						<option value="Tacna">Tacna</option>
						<option value="Boda Destino, fuera Perú">Boda Destino, fuera Perú</option>
					</select>
				</div>

				<div className="flex flex-col w-full gap-[0.5rem] py-[0.5rem] basis-[32%]">
					<input
						onChange={handleWhatsappChange}
						className={`${/^[0-9+ ]{7,25}$/.test(whatsapp) ? 'border-[1px] border-green-400 text-agatha-text-a' : whatsapp == '' ? 'border-[1px] border-agatha-text-c/20 text-agatha-text-c/20' : 'border-[1px] text-agatha-text-b border-red-500'} bg-agatha-button-bg-f px-[0.75rem] py-[0.5rem] outline-none  rounded-3xl w-full uppercase`}
						type="text"
						placeholder="Whatsapp"
						title="email"
					/>
				</div>

				<div className="flex flex-col w-full gap-[0.5rem] py-[0.5rem] basis-[32%]">
					<input
						onChange={handleFullNameChange}
						className={`${/^(?=.*[a-zA-Z])[\w\s]{2,40}$/.test(fullName) ? 'border-[1px] border-green-400 text-agatha-text-a' : fullName == '' ? 'text-agatha-text-c/20 border-[1px] border-agatha-text-c/20' : 'border-[1px] text-agatha-text-c border-red-500'} bg-agatha-button-bg-f px-[0.75rem] py-[0.5rem] outline-none  rounded-3xl w-full uppercase`}
						type="text"
						placeholder="Nombre completo"
						title="email"
					/>
				</div>

				<div className="flex flex-col w-full gap-[0.5rem] py-[0.5rem] basis-[32%]">
					<select
						value={howFoundUs}
						onChange={handleHowFoundUsChange}
						className={`${howFoundUs !== '¿Cómo se enteró de nosotros?' ? 'border-[1px] border-green-400 text-agatha-text-a' : howFoundUs == '¿Cómo se enteró de nosotros?' ? 'border-[1px] border-agatha-text-c/20 text-agatha-text-c uppercase' : 'border-[1px] border-red-500'} bg-agatha-button-bg-f px-[0.75rem] py-[0.5rem] outline-none rounded-3xl uppercase`}
						title="¿Cómo se enteró de nosotros?"
						name="¿Cómo se enteró de nosotros?"
						id="how"
					>
						<option disabled>¿Cómo se enteró de nosotros?</option>
						<option value="Instagram">Instagram</option>
						<option value="Tik Tok">Tik Tok</option>
						<option value="Facebook">Facebook</option>
						<option value="Correo">Correo</option>
						<option value="Recomendación amigos">Recomendación amigos</option>
						<option value="Recomendación proveedor">Recomendación proveedor</option>
						<option value="Otros">Otros</option>
					</select>
				</div>
            <div className="flex flex-col w-full gap-[0.5rem] py-[0.5rem]">
					<textarea
						onChange={handleMessageChange}
                  /* value={message} */
						className={`${/^(?=.*[a-zA-Z])[\w\s]{2,40}$/.test(message) ? 'border-[1px] border-green-400 text-agatha-text-a' : message == "" ? 'text-agatha-text-c border-[1px] border-agatha-text-c/20' : 'border-[1px] text-agatha-text-b border-red-500'} bg-agatha-button-bg-f outline-none text-agatha-text-a  rounded-3xl w-full h-[9rem] px-[1rem] py-[1.125rem]`}
						placeholder="DEJANOS UN MENSAJE"
						title="mensaje"
					/>
				</div>

				<Link
					onClick={handleSend}
					href={'/precios'}
					className={`${!formReady() ? 'text-gray-700 opacity-50 ' : 'bg-agatha-button-bg-e'} bg-agatha-button-bg-c w-full text-center transition-all text-white text-sm px-[1rem] py-[0.75rem] rounded-3xl my-[1rem]`}
					type="submit"
				>
					VERIFICAR Y VER PRECIOS
				</Link>
			</form>
		</>
	)
}

export default RequestWeddingInformationForm