import Image from 'next/image'
import { TypeAgathaPageFrameData } from '@/utils/Models/SchemaAgathaPageFrameData'
import { TypePhotoAlbumPageFrameData } from '@/utils/Models/SchemaPhotoAlbumPageFrameData'
import jmProfilePhoto from '../../../public/JohnMayta.jpeg'

interface Props {
	children: React.ReactNode
	data: TypePhotoAlbumPageFrameData
}

export const PhotoAlbumPageFrame = ({ data, children }: Props) => {
	return (
		<>
			<main
				className={`font-mono text-white bg-agatha-gray flex flex-col items-center relative z-10 w-screen overflow-hidden font-normal pt-[4.5rem] max-h-none`}
			>
				<div
					className={`flex justify-center h-[82.5vh] md:h-auto md:w-screen items-center aspect-[16/9] absolute bg-agatha-black`}
				>
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
						className={`w-[89%] sm:w-[92%] text-agatha-text-a  mx-auto pt-[3.7rem] lg:pt-[6.5rem] lg:pb-[9.75rem] xl:pb-[7.75rem] 2xl:pb-[7.75rem] pb-[4.6rem] gap-[0.75rem] sm:gap-[0.8rem] min-h-[12rem] flex flex-col justify-center items-center lg:min-h-[18.25rem]`}
					>
						<h1
							className={`tracking-[0.25rem] w-[100%] text-start md:text-center  font-thin text-2xl text-[1.75rem] md:text-[1.75rem] lg:text-[2.4rem]`}
						>{`${data.title}`}</h1>
						<div className="flex flex-col sm:mt-[0.5rem] xl:mt-[1rem] sm:flex-row sm:justify-start md:justify-center items-start sm:items-center w-full gap-[0.75rem] ">
							<h3
								className={`leading-[1.5rem] font-light text-[0.8rem] text-start w-full sm:w-[10%] sm:min-w-[6.5rem] md:min-w-[15.5rem] md:text-end  px-[0.625rem]`}
							>{`${data.amountOfPhotos} FOTOS`}</h3>
							<h4 className="flex px-[0.625rem] gap-[0.75rem] leading-[1.5rem] font-normal sm:w-[20%] sm:min-w-[15.5rem] text-xs uppercase w-full items-center justify-start">
								<Image
									src={jmProfilePhoto}
									alt=""
									width={29}
									height={29}
									className="rounded-full"
								/>
								<span>{`- POR: ${data.byWho}`}</span>
							</h4>
						</div>

						<div className=" text-[3.35rem] font-mono leading-[1.5rem] font-extralight w-full md:text-center text-start">
							~
						</div>
						<h2
							className={`tracking-[1px] md:text-center pt-[0.7rem] lg:w-[87.5%] xl:w-[74%] 2xl:w-[53.5%] 3xl:w-[42.5%] 4xl:w-[34%] font-mono font-light text-[0.875rem] leading-6 w-[100%] text-left`}
						>{`${data.description}`}</h2>
					</header>
					<section
						className={`w-[92%] sm:w-[93.5%] md:w-[95.5%] lg:w-[92%] xl:w-[93%] 2xl:w-[94%] 3xl:w-[95%] 4xl:w-[97%] mb-[2vh] md:mb-[3vh] lg:bg-[4vh] xl:mb-[6vh] relative text-base font-normal mx-auto 
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
