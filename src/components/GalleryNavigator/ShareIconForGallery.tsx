'use client'

import { useZustandStore } from '@/context'
import React, { useState } from 'react'
import { FaShareAlt } from 'react-icons/fa'

interface Props {
	path: string
}

export const ShareIconForGallery = ({ path }: Props) => {
	const setIsOpenModal = useZustandStore((state) => state.changeIsOpenShareModal)

	const changeCurrentLink = useZustandStore((state) => state.setCurrentShareModalLink)

	const handleClick = () => {
		changeCurrentLink(`${path}`)
		setIsOpenModal(true)
	}

	return (
		<>
			<button
				onClick={handleClick}
				className="md:hidden group-hover:inline transition-all bg-[#000]/15 rounded-full z-[30] p-2 absolute right-2 top-2"
				title="Share"
			>
				<FaShareAlt className=" text-wnite" />
			</button>
		</>
	)
}
