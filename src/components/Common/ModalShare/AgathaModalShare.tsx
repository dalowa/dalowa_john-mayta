'use client'

import { useZustandStore } from '@/context'
import React from 'react'
import { MdClose } from 'react-icons/md'
import { FaSquareFacebook, FaSquareWhatsapp, FaSquareXTwitter } from 'react-icons/fa6'

interface Props {
	isSpanish: boolean
}

export default function AgathaModalShare({ isSpanish }: Props) {
	const isModalOpen = useZustandStore((state) => state.isOpenShareModal)
	const currentUrl = useZustandStore((state) => state.currentShareModalLink)

	const handleSendToWhatsapp = () => {
		const urlWhatsapp = `https://api.whatsapp.com/send?text=Mira%20esto!%20https%3A%2F%2Fseven-website.vercel.app${currentUrl.replace(/\//g, '%2F')}`
		window.open(urlWhatsapp, '_blank')
	}

	const handleSendToFacebook = () => {
		const urlFacebook = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fseven-website.vercel.app${currentUrl.replace(/\//g, '%2F')}`
		window.open(urlFacebook, '_blank')
	}

	const handleSendToTwitter = () => {
		const urlTwitter = `https://twitter.com/intent/post?url=https%3A%2F%2Fseven-website.vercel.app${currentUrl.replace(/\//g, '%2F')}`
		window.open(urlTwitter, '_blank')
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(`https://seven-website.vercel.app${currentUrl}`)
	}
	const setIsOpenModal = useZustandStore((state) => state.changeIsOpenShareModal)
	return (
		<>
			{isModalOpen && (
				<div className="fixed modalfondo top-0 left-0 w-[100vw] h-screen bg-color-secondary/75 z-[400] flex justify-center">
					<div className="w-[95%] max-w-[500px] h-[17rem] mt-3 text-words-color font-normal">
						<div className="bg-[#363636] flex items-center px-2 justify-between h-[20%] border-gray-500 border-b-[1px]">
							<span className="text-lg">{isSpanish ? 'COMPARTIR EN' : 'SHARE TO'}</span>
							<MdClose
								onClick={() => setIsOpenModal(false)}
								className="text-white text-2xl cursor-pointer"
							/>
						</div>
						<div className="bg-[#222222] h-[80%] flex flex-col gap-4 justify-center items-center">
							<ul className="flex gap-5">
								<li>
									<FaSquareXTwitter
										className="text-white text-5xl"
										onClick={handleSendToTwitter}
									/>
								</li>
								<li>
									<FaSquareFacebook
										className="text-blue-400 text-5xl"
										onClick={handleSendToFacebook}
									/>
								</li>
								<li>
									<FaSquareWhatsapp
										className="text-green-400 text-5xl"
										onClick={handleSendToWhatsapp}
									/>
								</li>
							</ul>
							<div className="bg-[#363636] w-10/12 px-2 py-3">
								<span className="select-text w-full overflow-hidden h-5 block">
									<p className="select-text text-sm bg-transparent max-w-none block overflow-hidden h-5 w-[37rem]">{`https://seven-website.vercel.app${currentUrl}`}</p>
								</span>
							</div>
							<button
								onClick={handleCopy}
								className="text-sm text-black font-semibold bg-slate-200 p-2 rounded-xl"
							>
								Copiar enlace
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
