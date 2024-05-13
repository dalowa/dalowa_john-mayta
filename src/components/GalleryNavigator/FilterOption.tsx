'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
	path: string
	text: string
}

export const FilterOption = ({ path, text }: Props) => {
	const currentPath = usePathname()

	return (
		<>
			<Link
				className={`${currentPath === path ? 'text-agatha-text-a font-bold border-b-[2px] border-agatext-agatha-text-a' : ''} pb-[1px]`}
				href={path}
			>
				{text}
			</Link>
		</>
	)
}
