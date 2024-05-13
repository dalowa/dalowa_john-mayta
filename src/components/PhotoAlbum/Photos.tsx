'use client'

import { useEffect, useState } from 'react'
import { useScreenWidth } from '@/hooks/useScreenWidth'
import { x } from '@/utils/Functions/divideArrayBetweenX'
import { SinglePhoto } from './SinglePhoto'

interface Props {
	oneColumn: x[][]
	twoColumn: x[][]
	threeColumn: x[][]
	fourColumn: x[][]
	fiveColumn: x[][]
}

export const Photos = ({ oneColumn, fiveColumn, fourColumn, threeColumn, twoColumn }: Props) => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])
	const currentScreenWidth = useScreenWidth()

	/* console.log('HOLA DESDE EL CLIENTE', currentScreenWidth)
	console.log(oneColumn) */

	if (!isClient) return null

	function renderComponentBasedOnScreenWidth() {
		switch (true) {
			case currentScreenWidth <= 768:
				/* console.log('HOLA DESDE EL 768') */
				return (
					<div className="w-[100%] flex-wrap flex justify-center text-base gap-[1.5vw] sm:gap-[1.25vw] md:gap-[0.75vw]">
						<div className="basis-[44%] sm:basis-[45%] md:basis-[47%] flex flex-col gap-[1.5vw] sm:gap-[1.25vw] md:gap-[0.75vw]">
							{twoColumn[0].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
						<div className="basis-[44%] sm:basis-[45%] md:basis-[47%] flex flex-col gap-[1.5vw] sm:gap-[1.25vw] md:gap-[0.75vw]">
							{twoColumn[1].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
					</div>
				)
			case currentScreenWidth <= 1200:
				/* console.log('HOLA DESDE EL 1200') */
				return (
					<div className="w-[100%] flex-wrap flex justify-center text-base gap-[1.5vw]">
						<div className="basis-[30%] flex flex-col gap-[1.5vw]">
							{threeColumn[0].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
						<div className="basis-[30%] flex flex-col gap-[1.5vw]">
							{threeColumn[1].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
						<div className="basis-[30%] flex flex-col gap-[1.5vw]">
							{threeColumn[2].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
					</div>
				)
			case currentScreenWidth <= 1600:
				/* console.log('HOLA DESDE EL 1600') */
				return (
					<div className="w-[100%] flex-wrap flex justify-center text-base gap-[1.5vw]">
						<div className="basis-[22.5%] flex flex-col gap-[1.5vw]">
							{fourColumn[0].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
						<div className="basis-[22.5%] flex flex-col gap-[1.5vw]">
							{fourColumn[1].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
						<div className="basis-[22.5%] flex flex-col gap-[1.5vw]">
							{fourColumn[2].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
						<div className="basis-[22.5%] flex flex-col gap-[1.5vw]">
							{fourColumn[3].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
					</div>
				)
			default:
				return (
					<div className="w-[100%] flex-wrap flex justify-center text-base gap-[1.15vw]">
						<div className="basis-[18.35%] flex flex-col gap-[1.15vw]">
							{fiveColumn[0].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
						<div className="basis-[18.35%] flex flex-col gap-[1.15vw]">
							{fiveColumn[1].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
						<div className="basis-[18.35%] flex flex-col gap-[1.15vw]">
							{fiveColumn[2].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
						<div className="basis-[18.35%] flex flex-col gap-[1.15vw]">
							{fiveColumn[3].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
						<div className="basis-[18.35%] flex flex-col gap-[1.15vw]">
							{fiveColumn[4].map((e, i) => (
								<SinglePhoto path={e.url} key={i} blur={e.blurUrl} imgId={e.imageId} />
							))}
						</div>
					</div>
				)
		}
	}

	return <>{renderComponentBasedOnScreenWidth()}</>
}
