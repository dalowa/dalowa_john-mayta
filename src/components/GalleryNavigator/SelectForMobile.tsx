'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

interface Props {
	options: {
		ID: string
		path: string | undefined
		title: string
	}[]
}

export const SelectForMobile = ({ options }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<div className="w-full md:hidden font-normal tracking-wider flex items-center flex-col h-full pb-[0.5rem]">
				<div
					className="w-[87%] sm:w-[90%] h-[2.75rem] text-xs flex items-center justify-center bg-agatha-button-bg-a"
					onClick={handleClick}
				>
					<span className="w-auto flex justify-center items-center">
						<p className="w-full text-[0.75rem]">FILTROS</p>
						<MdKeyboardArrowDown className="text-3xl" />
					</span>
				</div>
				<ul
					className={` ${isOpen ? 'flex' : 'hidden'} text-agatha-text-c  pt-[0.25rem] w-[88%] sm:w-[93%] text-xs gap-[0.15rem] flex-wrap flex-col duration-1000 transition-all overflow-hidden`}
				>
					{options.map((e) => (
						<li
							className="h-[3rem] flex items-center justify-center bg-agatha-button-bg-b"
							key={e.ID}
						>
							<Link className="p-[1.5rem] font-mono" href={e?.path as string}>
								{e.title.toUpperCase()}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
