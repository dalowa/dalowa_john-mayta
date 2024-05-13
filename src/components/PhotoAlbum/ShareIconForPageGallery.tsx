'use client'

import { useZustandStore } from '@/context'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { FaShareAlt } from 'react-icons/fa'


interface Props {
	arrayImages: {
		blurUrl: string
		imageHD: string
	}[]
	currentImage: string
}

export const ShareIconForPageGallery = ({ arrayImages, currentImage }: Props) => {
	const currentPath = usePathname()
	const setIsOpenModal = useZustandStore((state) => state.changeIsOpenShareModal)
	const setCurrentLink = useZustandStore((state) => state.setCurrentShareModalLink)
	const setPageImages = useZustandStore((state) => state.setPageImages)
	const setCurrentScreenImage = useZustandStore((state) => state.setCurrentScreenImageIndex)
	const currentScreenImage = useZustandStore((state) => state.currentScreenImage)
	const pageImages = useZustandStore((state) => state.pageImages)

	const handleClick = () => {
		setCurrentLink(currentPath)
		setIsOpenModal(true)
	}

	useEffect(() => {
		if (
			currentImage !== undefined ||
			Number(currentImage) > pageImages.length ||
			Number(currentImage) < 0
		) {
			setCurrentScreenImage(currentImage)
		}
		/* setCurrentScreenImage(currentImage) */
		setPageImages(arrayImages)
		/* console.log('Este es el valor en SGC', currentScreenImage) */
		/* console.log("Este es el valor en SGC del array", pageImages)   */
		return () => {}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div
				className="flex cursor-pointer items-center justify-center gap-1 group "
				onClick={handleClick}
			>
				<FaShareAlt className="text-xl text-[1.125rem] font-medium group-hover:text-celeste-color" />
				<span className="text-xs font-normal hidden xl:flex tracking-[1px] leading-6">
					{(true ? 'Compartir' : 'Share').toLocaleUpperCase()}
				</span>
			</div>
		</>
	)
}
