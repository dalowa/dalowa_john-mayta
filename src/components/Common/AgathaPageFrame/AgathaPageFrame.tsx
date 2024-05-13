import Image from 'next/image'
import ButtonPlansAndPrices from './ButtonPlansAndPrices'
import { TypeAgathaPageFrameData } from '@/utils/Models/SchemaAgathaPageFrameData'

interface Props {
	children: React.ReactNode
	data: TypeAgathaPageFrameData
}

export const AgathaPageFrame = ({ data, children }: Props) => {
	/* 
		- Poner maximos width para el section y que sea en funcion de lo que recibe en props y testear en las diferentes pantallas


	*/

	const detect = () => {
		if (data.subTitle == '' || data.subTitle == undefined) {
			return <ButtonPlansAndPrices />
		}

		return (
			<h2
				className={`tracking-[0.25rem] text-center text-[0.85rem] w-[80%] md:w-[65%] md:text-[1rem] xl:text-[1.25rem] text-color-gray-smalltext`}
			>{`${data.subTitle}`}</h2>
		)
	}

	return (
		<>
			<main
				className={`font-mono text-white bg-agatha-gray flex flex-col relative z-10 w-screen overflow-hidden font-normal pt-[4.5rem] max-h-none`}
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
						className={`w-full py-[1rem] gap-[1rem] lg:gap-[1.5rem] xl:gap-[2.5rem] min-h-[12rem] flex flex-col justify-center items-center | lg:min-h-[18.25rem]`}
					>
						<h1
							className={`tracking-[0.25rem] font-thin text-center text-3xl md:text-[1.75rem] w-[95%] lg:text-[2.4rem]`}
						>{`${data.title}`}</h1>
						{detect()}
					</header>
					<section
						className={`w-[92%] sm:w-[93.5%] md:w-[95.5%] lg:w-[92%] mb-[2vh] md:mb-[3vh] lg:bg-[4vh] xl:mb-[6vh] relative max-w-[${data?.sectionConfig?.maxWidth}] text-base font-normal mx-auto 
						agatha-frame-section-background-gradient min-h-[100vh] `}
					>
						{children}
					</section>
				</div>
			</main>
		</>
	)
}

/* sma:min-h-[33rem] mda:min-h-[37rem] lga:min-h-[45rem] xla:min-h-[50rem] 4xla:min-h-[55rem] 5xla:min-h-[90rem] */
