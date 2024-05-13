'use client'

import { useZustandStore } from '@/context'
import React from 'react'
import { MdClose } from 'react-icons/md'
import { FaSquareFacebook, FaSquareWhatsapp, FaSquareXTwitter } from 'react-icons/fa6'
import { deployUrl } from '@/data/website-information'

interface Props {
	isSpanish: boolean
}

export default function AgathaModalShare({ isSpanish }: Props) {
	const isModalOpen = useZustandStore((state) => state.isOpenShareModal)
	const currentUrl = useZustandStore((state) => state.currentShareModalLink)

	const handleSendToWhatsapp = () => {
		const urlWhatsapp = `https://api.whatsapp.com/send?text=Mira%20esto!%20https%3A%2F%2F${deployUrl}${currentUrl.replace(/\//g, '%2F')}`
		window.open(urlWhatsapp, '_blank')
	}

	const handleSendToFacebook = () => {
		const urlFacebook = `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F${deployUrl}${currentUrl.replace(/\//g, '%2F')}`
		window.open(urlFacebook, '_blank')
	}

	const handleSendToTwitter = () => {
		const urlTwitter = `https://twitter.com/intent/post?url=https%3A%2F%2F${deployUrl}${currentUrl.replace(/\//g, '%2F')}`
		window.open(urlTwitter, '_blank')
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(`https://${deployUrl}${currentUrl}`)
	}
	const setIsOpenModal = useZustandStore((state) => state.changeIsOpenShareModal)
	return (
		<>
			{isModalOpen && (
				<div className="fixed modalfondo text-agatha-text-b font-normal top-0  left-0 w-[100vw] font-mono h-screen bg-agatha-black/90 z-[400] flex justify-center">
					<div className="w-[95%] md:w-[80%] lg:w-[60%] xl:w-[55%] xl:max-w-[700px] h-[17rem] mt-[3vw] sm:mt-[3vw] md:mt-[30vw] lg:mt-[12.5vw] xl:mt-[17.5vw]">
						<div className="bg-agatha-button-bg-c md:px-[1rem] flex items-center px-2 justify-between h-[20%] border-agatha-button-bg-a border-b-[1px]">
							<span className="text-sm ">{'COMPARTIR EN'}</span>
							<MdClose
								onClick={() => setIsOpenModal(false)}
								className="text-white text-2xl cursor-pointer"
							/>
						</div>
						<div className="bg-agatha-button-bg-d h-[80%] flex flex-col gap-4 justify-center items-center">
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
							<div className="bg-agatha-button-bg-c w-10/12 px-2 py-3">
								<span className="select-text w-full overflow-hidden h-5 block">
									<p className="select-text text-sm bg-transparent max-w-none block overflow-hidden h-5 w-[37rem]">{`https://${deployUrl}${currentUrl}`}</p>
								</span>
							</div>
							<button
								onClick={handleCopy}
								className="text-xs text-agatha-text-a border border-agatha-text-a bg-agatha-button-bg-a p-[1rem] rounded-xl"
							>
								COPIAR ENLACE
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
