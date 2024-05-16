import Image from 'next/image'
import { SliderShowcase } from './SliderShowcase'

export type tipoSc = 'image' | 'youtube' | 'carousel' | 'vimeo'

interface Props {
	type: tipoSc
	srcUrls: string | string[]
}

export const ShowCase = ({ type, srcUrls }: Props) => {
	switch (type) {
		case 'image':
			return (
				<div className="w-full bg-amber-300 relative aspect-video mb-[2.125rem]">
					<Image
						src={srcUrls as string}
						alt="Showcase image"
						layout="fill"
						className="object-cover object-center"
					/>
				</div>
			)
		case 'youtube':
			return (
				<div className="w-full bg-green-300 aspect-video mb-[2.125rem]">
					<iframe
						className="w-full aspect-video"
						src={srcUrls as string}
						title="YouTube video player"
					/>
				</div>
			)
		case 'carousel':
			return <SliderShowcase urls={srcUrls as string[]} />
		case 'vimeo':
			return (
				<div className="w-full bg-blue-300 aspect-video mb-[2.125rem]">
					<iframe
						src={srcUrls as string}
						frameBorder="0"
						className="w-[100%] bg-secondary-color aspect-[16/9] mx-auto"
						title={`Vimeo video`}
					/>
				</div>
			)
		default:
			return (
				<div className="w-full relative bg-red-300 aspect-video mb-[2.125rem]">
					<Image
						src={srcUrls as string}
						alt="Showcase image"
						layout="fill"
						objectFit="cover"
						objectPosition="center"
					/>
				</div>
			)
	}

	return <></>
}
