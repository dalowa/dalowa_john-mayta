'use client'

import { useScreenWidth } from '@/hooks/useScreenWidth'
import { TypeGenerateAlbumsInFolder } from '@/utils/Generator'
import Image from 'next/image'
import Link from 'next/link'
import { ShareIconForGallery } from './ShareIconForGallery'

interface Props {
	info: TypeGenerateAlbumsInFolder
}

interface PropsImagesSizes {
	smallScreen: string
	mediumScreen: string
	largeScreen: string
	extraLargeScreen: string
}

export const GalleryHub = ({ info }: Props) => {
	/* const [information, setInformation] = useState<TypeGenerateAlbumsInFolder | undefined>(undefined)

	useEffect(() => {
		setInformation(info)
	}, [info]) */

	const currentScreenWidth = useScreenWidth()

	const ImageSizes = ({
		extraLargeScreen,
		largeScreen,
		mediumScreen,
		smallScreen,
	}: PropsImagesSizes) => {
		if (currentScreenWidth <= 768) {
			return smallScreen
		} else if (currentScreenWidth <= 1200) {
			return mediumScreen
		} else if (currentScreenWidth <= 2050) {
			return largeScreen
		} else {
			return extraLargeScreen
		}
	}
	/* console.log("DIRECTION", info.Albums) */
	return (
		<>
			{info &&
				info.Albums.map((e) => (
					<article
						key={e.id}
						className="relative basis-[87%] sm:basis-[90%] md:basis-[45.75%] lg:basis-[30%] 3xl:basis-[31%] pt-5 flex flex-col items-center group"
					>
						<div className="bg-[#414141] w-[90%] h-10 absolute top-[0.95rem] border-[0.5px] border-agatha-gray/75 group-hover:top-[0.7rem] xl:group-hover:top-[0.8rem] transition-all"></div>
						<div className="bg-[#414141] w-[95%] h-10 absolute top-[1.05rem] border-[0.5px] border-agatha-gray/75 group-hover:top-[0.9rem] xl:group-hover:top-[1rem] transition-all"></div>
						<div className="bg-color-secondary relative w-full aspect-[32/24] z-20">
							<Link
								prefetch
								href={e.PathForLink as string}
								className="w-full h-full z-20 absolute"
							>
								<Image
									className="object-cover"
									src={ImageSizes(e.HighlightImage)}
									alt={`Fotos de ${e.Title}`}
									placeholder="blur"
									blurDataURL={e.HighlightImage.blurURL}
									fill
									sizes="(min-width: 992px) 27vw, (min-width: 768px) 40vw, (min-width: 480px) 80vw, 90vw"
								></Image>
							</Link>

							<ShareIconForGallery path={e.PathForLink as string} />
						</div>

						<Link
							prefetch
							href={e.PathForLink as string}
							className="py-2 flex flex-col items-center gap-[0.35rem]"
						>
							<span className="text-base text-[0.875rem] text-agatha-text-a w-[85%] font-normal group-hover:text-celeste-color text-center transition-colors">
								{`${e.Title}`.toLocaleUpperCase()}
							</span>
							<span className="text-xs group-hover:text-celeste-color text-[#999] transition-colors">
								{Number(e.AmountOfPhotos) >= 100
									? `MÁS DE ${e.AmountOfPhotos} FOTOS`
									: `${e.AmountOfPhotos} FOTOS`}
							</span>
						</Link>
					</article>
				))}
		</>
	)
}
