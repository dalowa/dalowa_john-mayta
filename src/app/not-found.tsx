import BaseFrame from '@/components/Common/BaseFrame/BaseFrame'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MainPageEndPoints, NotFoundWebData } from '@/data/website-information'
import { ReqBlurImage } from '@/utils/SmugmugAPI'
import Image from 'next/image'
import Link from 'next/link'

interface Props {}

const NotFoundPage = async ({}: Props) => {
	const blurData = await ReqBlurImage(NotFoundWebData.wallapaperUrl)

	return (
		<>
			<Header />
			<BaseFrame>
				<>
					<div className="relative w-full h-full flex justify-center items-center">
						<div className="absolute w-full h-full flex justify-center items-center overflow-hidden">
							<Image
								src={NotFoundWebData.wallapaperUrl}
								alt={NotFoundWebData.message}
								placeholder="blur"
								blurDataURL={blurData}
								fill
								className="object-fill"
							/>
							<div className="w-full h-full agatha-notfound-filter absolute"></div>
						</div>

						<div className="z-50 text-center flex flex-col uppercase gap-[1rem] tracking-[1px] bg-agatha-black/50 w-[18.5rem] sm:w-[19rem] font-mono text-agatha-text-c p-[3.5rem]">
							<h1 className="text-[2.375rem] leading-normal font-thin">{`404 ERROR!`}</h1>
							<h5 className="leading-normal pb-[0.75rem]">{NotFoundWebData.message}</h5>
							<Link
								className=" rounded-[2.5rem] text-xs w-full bg-agatha-button-bg-e border-agatha-button-bg-e border text-agatha-text-a font-normal py-[0.625rem] px-[1.25rem]"
								href={MainPageEndPoints.inicio.pathForLink}
							>
								{`Volver al inicio`}
							</Link>
						</div>
					</div>
				</>
			</BaseFrame>
			<Footer />
		</>
	)
}
export default NotFoundPage
