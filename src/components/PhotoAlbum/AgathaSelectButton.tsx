'use client'

import { useZustandStore } from '@/context'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

interface Props {
	imageId: string
}

export const AgathaSelectButton = ({ imageId }: Props) => {
	const setCurrentScreenImageIndex = useZustandStore((state) => state.setCurrentScreenImageIndex)
	const pageImages = useZustandStore((state) => state.pageImages)
	const currentScreenImage = useZustandStore((state) => state.currentScreenImage)

	const handleClick = () => {
		setCurrentScreenImageIndex(`${imageId}`)
		/* console.log("Este es el imgID", imageId)
		console.log('reacciono click')
		console.log('las imagenes son', pageImages) */
	}
	return (
		<div
			className="cursor-pointer absolute opacity-0 bg-agatha-gray/85 w-full h-full md:w-[80%] md:h-[80%] group-hover:opacity-100 transition-opacity duration-700 flex justify-center items-center"
			onClick={handleClick}
		>
			<FaSearch className="text-xl" />
		</div>
	)
}
