'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
	path: string | undefined
	text: string
}

export const MenuOptionDetectCurrentPath = ({ path, text }: Props) => {
	const currentpath = usePathname()
	return (
		<Link
			className={`uppercase  px-3 py-3  ${currentpath == path ? 'text-agatha-text-a cursor-default font-medium' : 'text-agatha-text-c hover:text-agatha-text-b hover:bg-agatha-button-bg-a/20 cursor-pointer'}`}
			href={path == undefined ? '' : path}
		>
			{text}
		</Link>
	)
}
