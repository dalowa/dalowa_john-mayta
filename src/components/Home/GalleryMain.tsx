'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import Link from 'next/link'
import { TypeHomeMainAlbumsData } from '@/utils/Generator/GenerateHomeMainAlbumsData'

interface Props {
	data: TypeHomeMainAlbumsData
}

export default function GalleryMain({ data }: Props) {
	const [armado, setArmado] = useState(false)
	const [currentMovement, setCurrentMovement] = useState<number>(0)
	const [maxCM, setMaxCM] = useState(0) // Estado para el valor máximo de currentMovement

	useEffect(() => {
		setArmado(true)
		const handleResize = () => {
			setCurrentMovement(0)
			setMaxCM(calculateMaxCM(window.innerWidth))
			// Restablecer currentMovement a 0
		}

		handleResize()
		// Agregar un event listener para el evento resize
		window.addEventListener('resize', handleResize)

		// Calcular maxCM sin utilizar el estado del componente
		const newMaxCM = calculateMaxCM(window.innerWidth)
		setMaxCM(newMaxCM)

		// Limpiar el event listener cuando el componente se desmonte
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, []) // Ejecutar el useEffect solo una vez al montar el componente

	const handleIncrease = () => {
		if (currentMovement === maxCM) {
			return setCurrentMovement(0)
		}
		setCurrentMovement((i) => i + 1)
	}

	const handleDecrease = () => {
		if (currentMovement === 0) {
			return setCurrentMovement(maxCM)
		}
		setCurrentMovement((i) => i - 1)
	}

	// Función para calcular maxCM en función del ancho de la pantalla
	const calculateMaxCM = (width: number) => {
		if (width > 1200) {
			return 6
		} else if (width > 992) {
			return 6
		} else if (width > 768) {
			return 7
		} else if (width > 640) {
			return 8
		} else if (width >= 480) {
			return 9
		}
		return 10
	}
	return (
		/* COntenedor de carrusel */
		<>
			{armado ? (
				<>
					<div className="relative flex items-center h-full">
						<div className="flex peer bg-agatha-black w-screen relative h-full items-center overflow-x-hidden overflow-y-hidden">
							{/* Contenedor de imagen */}
							{data.slice(0, 11).map((e, index) => (
								<Link
									href={e.pathForLink}
									prefetch
									key={index}
									className={`-translate-x-[${currentMovement}00%] relative h-full w-full select-none transition-all group duration-500`}
								>
									<div className="h-full w-screen select-none relative sm:w-halfscreen md:w-33vw lg:w-25vw xl:w-20vw overflow-hidden">
										<Image
											className="max-w-none object-cover group-hover:scale-110 transition-transform duration-[3s]"
											src={e.imageObject.background}
											alt="a"
											placeholder="blur"
											blurDataURL={e.imageObject.blur}
											fill
											priority
											sizes="100vw"
										/>
										<div className=" w-full h-full z-20"></div>
									</div>
									<div className="agatha-home-blur font-mono absolute w-full text-white pb-[1.25rem] pl-[1.5rem] sm:pl-[0.9rem] sm:pb-[1rem] 2xl:pl-[1.15rem] 2xl:pb-[1.1rem] left-0 bottom-0 pt-[1rem]">
										<div className="inline-block font-normal">
											<h2 className="pl-[1.5px]   tracking-wide leading-6 text-[0.9rem] inline">
												{e.title}
											</h2>
											<div className="w-[1.15rem] mt-[0.3rem] bg-white h-[2px] group-hover:w-full transition-all duration-400"></div>
										</div>

										<div className="pl-[1.5px] mt-[0.3rem] leading-6 tracking-widest text-xs">
											<span>
												{Number(e.amountOfPhotos) >= 100
													? `MÁS DE ${e.amountOfPhotos} FOTOS`
													: `${e.amountOfPhotos} FOTOS`}
											</span>
										</div>
									</div>
								</Link>
							))}
						</div>
						<div
							className="absolute left-2 bg-black/20 p-[0.4rem] hover:opacity-100  hover:bg-gray-500/50 transition-all rounded-full lga:opacity-0 peer-hover:opacity-100 duration-500 cursor-pointer"
							onClick={handleDecrease}
						>
							<FaAngleLeft className=" text-white text-2xl" />
						</div>

						<div
							className="absolute right-2 bg-black/20 p-[0.4rem] hover:opacity-100  hover:bg-gray-500/50 transition-all rounded-full lga:opacity-0 peer-hover:opacity-100 duration-500 cursor-pointer"
							onClick={handleIncrease}
						>
							<FaAngleRight className=" text-white text-2xl" />
						</div>
					</div>
				</>
			) : (
				<>{/* <Loader /> */}</>
			)}
		</>
	)
}
