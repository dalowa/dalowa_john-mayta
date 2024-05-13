import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import { TypeGenerateAlbumsInFolder } from '@/utils/Generator'
import { TypeAgathaPageFrameData } from '@/utils/Models/SchemaAgathaPageFrameData'
import { SelectForMobile } from './SelectForMobile'
import { SelectForDesktop } from './SelectForDesktop'
import { AgathaPageFrame } from '../Common/AgathaPageFrame/AgathaPageFrame'

import AgathaModalShare from '../Common/ModalShare/AgathaModalShare'
import { GalleryHub } from './GalleryHub'

interface Props {
	info: TypeGenerateAlbumsInFolder
}

export const GalleryNavigator = async ({ info }: Props) => {
	const agathaData: TypeAgathaPageFrameData = {
		backgroundImage: info.HighlightImage.extraLargeScreen,
		blurBackgroundImage: info.HighlightImage.blurURL,
		title: info.Title,
		subTitle: '',
		sectionConfig: {
			maxWidth: '',
		},
	}

	const SecondaryNavOptions = Object.values(PortfolioAndPricingEndpoints).map((e) => ({
		title: e.name,
		path: e.pathForLink,
		ID: e.id,
	}))

	return (
		<>
			<AgathaPageFrame data={agathaData}>
				<div className="flex-col py-[1.25rem] md:py-[1.5rem] lg:py-[2.25rem] lg:px-[1rem] xl:px-[0.5rem] xl:py-[2.5rem]">
					<div className="basis-[100%] min-h-10  gap-[0rem] text-sm">
						<SelectForMobile options={SecondaryNavOptions} />
						<SelectForDesktop options={SecondaryNavOptions} />
					</div>

					<div className="basis-[100%] flex-wrap flex justify-center sm:gap-[3.5%] md:gap-[2.75%] lg:gap-[2%] 2xl:gap-[2.5%] 3xl:gap-[2%]">
						<GalleryHub info={info} />
					</div>
				</div>
			</AgathaPageFrame>
			<AgathaModalShare isSpanish />
		</>
	)
}
