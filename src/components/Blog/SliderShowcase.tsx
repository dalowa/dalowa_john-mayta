'use client'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
	urls: string[]
}

export const SliderShowcase = ({ urls }: Props) => {
	const [currentIndexSlide, setCurrentIndexSlide] = useState(0)

	const handleNextSlide = () => {
		if (currentIndexSlide === urls.length - 1) {
			setCurrentIndexSlide(0)
		} else {
			setCurrentIndexSlide(currentIndexSlide + 1)
		}
	}

	const handlePrevSlide = () => {
		if (currentIndexSlide === 0) {
			setCurrentIndexSlide(urls.length - 1)
		} else {
			setCurrentIndexSlide(currentIndexSlide - 1)
		}
	}

	return (
		<>
			<div className="w-full relative bg-amber-300 aspect-video mb-[2.125rem] flex items-center">
				{urls.map((url, index) => (
					<Image
						key={index}
						src={url}
						alt="Showcase image"
						fill
						className={`${index === currentIndexSlide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-[1s] object-cover object-center`}
					/>
				))}
				<button
					onClick={handleNextSlide}
					type="button"
					title="next"
					className="right-[-1.25rem] w-[2.5rem] flex justify-center items-center aspect-square absolute bg-agatha-black text-agatha-text-c leading-10 rounded-[50px] z-50"
				>
					<FaChevronRight />
				</button>
				<button
					onClick={handlePrevSlide}
					type="button"
					title="prev"
					className="left-[-1.25rem] w-[2.5rem] flex justify-center items-center aspect-square absolute bg-agatha-black text-agatha-text-c leading-10 rounded-[50px] z-50"
				>
					<FaChevronLeft />
				</button>
			</div>
		</>
	)
}
