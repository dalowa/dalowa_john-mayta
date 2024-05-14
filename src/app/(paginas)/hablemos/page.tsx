import BaseFrame from '@/components/Common/BaseFrame/BaseFrame'
import { LetsTalkPageFrame, ListIcons } from '@/components/LetsTalk'
import RequestWeddingInformationForm from '@/components/LetsTalk/RequestWeddingInformationForm'
import { MainPageEndPoints } from '@/data/website-information'
import { GeneratePrimaryPageData } from '@/utils/Generator/GeneratePrimaryPageData'
import { TypeAgathaPageFrameData } from '@/utils/Models/SchemaAgathaPageFrameData'
import { FaEnvelope, FaHome, FaPhone } from 'react-icons/fa'

interface Props {}

const Hablemos = async ({}: Props) => {
	const info = await GeneratePrimaryPageData(MainPageEndPoints.hablemos.requestUrl)

	const agathaData: TypeAgathaPageFrameData = {
		backgroundImage:
			info.HighlightImage.imageUrl ||
			'https://photos.smugmug.com/SERVICIOS/BODAS/FLAVIA-RENATO/i-bdswGzC/6/DzWLg58SJXdMDntmmqZMkZjbd8CKQ9z6jj8BdShRT/X2/DSC_3328-X2.jpg',
		blurBackgroundImage: info.HighlightImage.blurURL,
		title: info.Title,
		subTitle: info.subTitle,
		sectionConfig: {
			maxWidth: '',
		},
	}

	return (
		<>
			<LetsTalkPageFrame data={agathaData}>
				
				<div className="p-5 lg:p-10 ">
					<div className="text-agatha-text-c flex flex-col lg:flex-row">
						<address className="flex flex-col font-light text-sm leading-6 not-italic tracking-[1px] lg:basis-[33.4%]">
							<span className="flex items-center gap-[0.7rem] font-bold">
								<FaHome className="text-[1rem]" />
								{`Telio, Inc.`}
							</span>
							<span className="">{`1355 Market Street, Suite 900`}</span>
							<span className="">{`San Francisco, CA 94103`}</span>
							<span className="flex items-center gap-[0.7rem]">
								<FaPhone className="text-[0.875rem]" />
								{`(123) 456-7890`}
							</span>
							<span className="flex items-center gap-[0.7rem] text-agatha-button-bg-e">
								<FaEnvelope className="text-agatha-text-c text-[0.9rem]" />
								{`company@email.com`}
							</span>
							<ListIcons />
						</address>
						<div className='flex flex-col my-[1rem] gap-[1.2rem] lg:basis-[66.6%] lg:px-4 mt-[0.625rem]'>
							<h4 className="uppercase text-lg leading-normal font-light tracking-[1px]">{`Don't be shy, tell us what's on your mind.`}</h4>
							<p className="text-sm font-light leading-6 tracking-[1px]">
								{`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consequat.`}
							</p>
						</div>
					</div>
					< RequestWeddingInformationForm /> 
				</div>
			</LetsTalkPageFrame>
		</>
	)
}
export default Hablemos
