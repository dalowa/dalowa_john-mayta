'use client'

import { useZustandStore } from '@/context'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
	path: string | undefined
	text: string
}

export const MenuOption = ({ path, text }: Props) => {
	const currentpath = usePathname()
	const isOpenMainMenu = useZustandStore((state) => state.isOpenMainMenu)
	const isOpenSecondMenu = useZustandStore((state) => state.isOpenSecondMenu)
	const setIsOpenSecondMenu = useZustandStore((state) => state.changeIsOpenSecondMenu)
	const setIsOpenMainMenu = useZustandStore((state) => state.changeIsOpenMainMenu)

	const handleSelectSecondMenuOption = () => {
		setIsOpenSecondMenu(!isOpenSecondMenu)
		setIsOpenMainMenu(!isOpenMainMenu)
	}
	return (
		<Link
			onClick={handleSelectSecondMenuOption}
			className={`uppercase  ${currentpath == path ? 'text-agatha-text-b font-bold' : 'text-agatha-text-c hover:text-agatha-text-b'}`}
			href={path == undefined ? '' : path}
		>
			{text}
		</Link>
	)
}
