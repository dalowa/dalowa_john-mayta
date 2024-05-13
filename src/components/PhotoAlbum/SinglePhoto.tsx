'use client'

import Image from 'next/image'
import React from 'react'

import { getPlaiceholder } from 'plaiceholder'
import { AgathaSelectButton } from './AgathaSelectButton'

interface Props {
	path: string
	blur?: string
	imgId: string
}

export const SinglePhoto = ({ path, blur, imgId }: Props) => {
	/* const   buffer = await fetch(path).then(async(res) =>{
    return Buffer.from(await res.arrayBuffer())
  })
  
  const { base64 } = await getPlaiceholder(buffer) */
	const obj = {
		blurUrl: blur,
		imageHD: path,
	}
	return (
		<div className="w-[100%] group flex justify-center items-center relative transition-all">
			<Image
				src={path}
				alt="imagen"
				width={1700}
				height={0o0}
				className="transition-all"
				loading="lazy"
				placeholder="blur"
				blurDataURL={blur}
			/>

			<div className="absolute w-full h-full bg-transparent">
				{/* Para que no lo descarguen */}
			</div>
			<AgathaSelectButton imageId={imgId} />
		</div>
	)
}
