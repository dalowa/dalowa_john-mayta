'use client'

import { useZustandStore } from '@/context'
import React from 'react'

export const IconBurger = () => {
	const isOpenMainMenu = useZustandStore((state) => state.isOpenMainMenu)
	const setIsOpenMainMenu = useZustandStore((state) => state.changeIsOpenMainMenu)
	return (
		<div
			className="w-7 h-7 justify-center items-center flex flex-col gap-1"
			onClick={() => setIsOpenMainMenu(!isOpenMainMenu)}
		>
			<div className="w-7 h-1 bg-agatha-text-a rounded-lg"></div>
			<div className="w-7 h-1 bg-agatha-text-a rounded-lg"></div>
			<div className="w-7 h-1 bg-agatha-text-a rounded-lg"></div>
		</div>
	)
}
