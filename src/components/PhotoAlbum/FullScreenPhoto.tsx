'use client'

import { useZustandStore } from '@/context'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaArrowLeftLong, FaArrowRightLong, FaRegCirclePlay } from 'react-icons/fa6'
import { IoShareSocialSharp } from 'react-icons/io5'
import { LuArrowDownUp, LuArrowLeftRight } from 'react-icons/lu'
import { MdOutlineRotateLeft, MdOutlineRotateRight } from 'react-icons/md'

interface Props {}

export const FullScreenPhoto = () => {
	const cupa = usePathname()

	const currentScreenImage = useZustandStore((state) => state.currentScreenImage)
	const setCurrentScreenImage = useZustandStore((state) => state.setCurrentScreenImageIndex)
	const imagesArray = useZustandStore((state) => state.pageImages)
	const setIsOpenModal = useZustandStore((state) => state.changeIsOpenShareModal)
	const setCurrentLink = useZustandStore((state) => state.setCurrentShareModalLink)
	const isModalOpen = useZustandStore((state) => state.isOpenShareModal)

	const [isRendered, setIsRendered] = useState(false)

	const handleClick = () => {
		setCurrentScreenImage('')
	}

	const handleCopy = () => {
		setIsOpenModal(true)
		setCurrentLink(`${cupa}?image=${currentScreenImage}`)
		console.log(isModalOpen)
	}

	const handleIncrease = () => {
		const n = Number(currentScreenImage)
		if (n < imagesArray.length - 1) {
			setCurrentScreenImage(`${n + 1}`)
		}
	}

	const handleDecrease = () => {
		const n = Number(currentScreenImage)
		if (n > 0) {
			setCurrentScreenImage(`${n - 1}`)
		}
	}

	useEffect(() => {
		setIsRendered(true)
		return () => {
			setCurrentScreenImage('')
		}
	}, [setCurrentScreenImage])

	/* if(!isRendered){
		return null
	} */

	if (
		currentScreenImage == undefined ||
		currentScreenImage == '' ||
		Number(currentScreenImage) > imagesArray.length ||
		Number(currentScreenImage) < 0
	) {
		return null
	}
	return (
		<>
			<div className="fixed top-0 left-0 z-[200] bg-black w-screen h-screen text-words-color">
				<div className="relative w-full h-full flex justify-center items-center ">
					<div className="absolute top-0 w-full bg-[#1b1b1b]/50 z-[250]">
						<div className="w-full py-[0.25rem]">
							<ul className="flex text-xl justify-end py-3">
								<li className="px-4">
									<IoShareSocialSharp className="cursor-pointer" onClick={handleCopy} />
								</li>
								{/* <li className="px-4">
                                        <FaRegCirclePlay />
                                    </li> */}
								<li className="px-4 ">
									<AiOutlineClose className="cursor-pointer" onClick={handleClick} />
								</li>
							</ul>
						</div>
						<div className="w-full py-[0.5rem] flex justify-between">
							<div>
								<span className="font-light px-5 text-base">{` ${currentScreenImage} /${imagesArray.length - 1}`}</span>
							</div>
							<div>
								<ul className=" text-xl py-1 hidden">
									<li className="px-4">
										<MdOutlineRotateRight />
									</li>
									<li className="px-4">
										<MdOutlineRotateLeft />
									</li>
									<li className="px-4">
										<LuArrowLeftRight />
									</li>
									<li className="px-4">
										<LuArrowDownUp />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="w-screen h-screen relative flex items-center justify-center flex-col">
						<div className="w-screen h-screen max-w-[2250px] relative  flex flex-col items-center justify-center">
							<Image
								src={imagesArray[Number(currentScreenImage)].imageHD || ''}
								alt=""
								className="object-contain"
								fill
								placeholder="blur"
								blurDataURL={imagesArray[Number(currentScreenImage)].imageHD || ''}
								sizes=""
							/>
						</div>
						<div
							className="absolute left-2  p-2 text-2xl text-words-color bg-black/50"
							onClick={handleDecrease}
						>
							<FaArrowLeftLong />
						</div>
						<div
							className="absolute right-2 p-2 text-2xl text-words-color bg-black/50"
							onClick={handleIncrease}
						>
							<FaArrowRightLong />
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</>
	)
}

/* currentScreenImage == "" || currentScreenImage == undefined? */
