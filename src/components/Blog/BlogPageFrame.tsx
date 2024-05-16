import Image from 'next/image'
import { TypeAgathaPageFrameData } from '@/utils/Models/SchemaAgathaPageFrameData'

interface Props {
	children: React.ReactNode
	data: TypeAgathaPageFrameData
}

export const AgathaPageFrame = ({ data, children }: Props) => {
	return (
		<>
			<main
				className={`font-mono text-agatha-text-c bg-agatha-gray flex flex-col relative z-10 w-screen overflow-hidden font-normal pt-[4.5rem] max-h-none`}
			>
				<div className={`flex justify-center w-screen aspect-[16/9] absolute bg-agatha-black`}>
					<Image
						src={`${data.backgroundImage}`}
						alt={`${data.title} background image`}
						className={`max-w-none object-cover`}
						placeholder="blur"
						blurDataURL={data.blurBackgroundImage}
						fill
						sizes={`100vw`}
					/>
					<div className={`agatha-frame-background-gradient w-full h-full z-10`}></div>
				</div>
				<div className={`bg-transparent z-10 relative`}>
					<header
						className={`w-full py-[1rem] gap-[1.25rem] lg:gap-[1.5rem] xl:gap-[2.5rem] min-h-[12rem] flex flex-col justify-center items-center | lg:min-h-[18.25rem]`}
					>
						<h1
							className={`tracking-[0.25rem] text-agatha-text-a font-thin text-center text-3xl md:text-[1.75rem] w-[95%] lg:text-[2.4rem]`}
						>{`${data.title}`}</h1>
						<h2
							className={` text-agatha-text-c leading-[1rem] font-normal text-center text-[0.8rem] w-[80%] md:w-[65%] text-color-gray-smalltext`}
						>{`${data.subTitle}`}</h2>
					</header>
					<section
						className={`w-[92%] sm:w-[93.5%] md:w-[95.5%] lg:w-[97%] mb-[2vh] md:mb-[3vh] lg:bg-[4vh] xl:mb-[6vh] relative max-w-[${data?.sectionConfig?.maxWidth}] text-base font-normal mx-auto 
						agatha-frame-section-background-gradient min-h-[100vh] max-w-[1270px]`}
					>
						{children}
					</section>
				</div>
			</main>
		</>
	)
}
