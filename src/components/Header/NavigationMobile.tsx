'use client'

import { useZustandStore } from '@/context'
import Link from 'next/link'
import React from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { MenuOption } from './MenuOption'

interface Props {
	mainMenuOptions: { name: string; pathForLink: string | undefined; id: string }[]
	secondMenuOptions: { name: string; pathForLink: string | undefined; id: string }[]
}

export const NavigationMobile = ({ mainMenuOptions, secondMenuOptions }: Props) => {
	const MainMenuOptions = mainMenuOptions
	const SecondMenuOptions = secondMenuOptions
	const isOpenMainMenu = useZustandStore((state) => state.isOpenMainMenu)
	const isOpenSecondMenu = useZustandStore((state) => state.isOpenSecondMenu)
	const setIsOpenSecondMenu = useZustandStore((state) => state.changeIsOpenSecondMenu)

	return (
		<>
			<nav
				className={`md:hidden font-mono bg-agatha-black z-[90] transition-all  px-4 pb-5 gap-4 flex flex-col min-h-[4.5rem] top-0 left-0 fixed w-full duration-1000 
                ${isOpenMainMenu ? 'translate-y-16' : '-translate-y-full'}`}
			>
				<div className="w-full h-[9px] bg-agatha-text-c/25 transition-none "></div>
				<ul className="flex flex-col gap-[1.3rem] text-[0.85rem] font-medium">
					{MainMenuOptions.map((e) => {
						if (e.pathForLink == undefined) {
							return (
								<div
									key={e.name}
									className={`flex flex-col group text-agatha-text-c gap-5`}
									onClick={() => setIsOpenSecondMenu(!isOpenSecondMenu)}
								>
									<li className="flex items-center gap-2">
										<Link
											className="uppercase"
											href={e.pathForLink == undefined ? '' : (e.pathForLink as string)}
										>
											{e.name}
										</Link>
										<span>
											{isOpenSecondMenu ? (
												<RiArrowUpSLine className="text-lg" />
											) : (
												<RiArrowDownSLine className="text-lg" />
											)}
										</span>
									</li>

									{SecondMenuOptions.map((j) => (
										<li
											key={e.name}
											className={` pl-5 ${isOpenSecondMenu ? 'flex' : 'hidden'} text-agatha-gray/75 items-center gap-2`}
										>
											<MenuOption path={j.pathForLink} text={j.name} />
										</li>
									))}
								</div>
							)
						}
						return (
							<li key={e.name}>
								<MenuOption path={e.pathForLink} text={e.name as string} />
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}
