import Link from 'next/link'
import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { MenuOptionDetectCurrentPath } from './MenuOptionDetectCurrentPath'
import { MenuOption } from './MenuOption'

interface Props {
	mainMenuOptions: { name: string; pathForLink: string | undefined; id: string }[]
	secondMenuOptions: { name: string; pathForLink: string | undefined; id: string }[]
}

export const NavigationDesktop = ({ mainMenuOptions, secondMenuOptions }: Props) => {
	function eliminarDuplicados(
		array: { name: string; pathForLink: string | undefined; id: string }[],
	) {
		const objetosUnicos: { [key: string]: boolean } = {} // Add index signature
		const newData = array.filter((objeto) => {
			if (!objetosUnicos[objeto.name]) {
				objetosUnicos[objeto.name] = true
				return true
			}
			return false
		})
		return newData
	}

	return (
		<>
			<nav
				className={`justify-center items-center transition-all bg-agatha-black hidden md:flex min-h-[4.5rem] top-0 z-[50] duration-1000 `}
			>
				<ul className="flex gap-5 text-xs lg:text-[0.815rem] font-mono font-medium h-[4.5rem] items-center">
					{eliminarDuplicados(mainMenuOptions).map((e, i) => {
						if (e.pathForLink == undefined) {
							return (
								<div
									key={e.id}
									className="h-full text-agatha-text-c cursor-default hover:text-agatha-text-b "
								>
									<li
										className={`flex flex-col h-full justify-center items-end w-44 group/menu lg:w-52  relative`}
									>
										<div className="flex gap-1 items-center justify-end ">
											<Link
												className="uppercase cursor-default"
												href={e.pathForLink == undefined ? '' : e.pathForLink}
												prefetch
											>
												{e.name}
											</Link>
											<span>
												<RiArrowDownSLine className="text-lg" />
											</span>
										</div>
										<ul className="top-[4.5rem] w-44 lg:w-52 hidden group-hover/menu:flex-col group-hover/menu:flex h-auto text-words-color fixed bg-agatha-black/95 transition-all duration-1000">
											{eliminarDuplicados(secondMenuOptions).map((j, i) => (
												<MenuOptionDetectCurrentPath
													key={e.id}
													path={j?.pathForLink?.toLowerCase()}
													text={j.name}
												/>
											))}
										</ul>
									</li>
								</div>
							)
						}
						return (
							<li key={e.id}>
								{
									<MenuOption
										path={e?.pathForLink?.toLowerCase()}
										text={e.name as string}
									/>
								}
							</li>
						)
					})}
				</ul>
			</nav>
		</>
	)
}
