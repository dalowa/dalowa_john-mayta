interface Props {}
import { ContactList } from '@/components/AboutMe'
import { AboutMePageFrame } from '@/components/AboutMe/AboutMePageFrame'
import { MainPageEndPoints } from '@/data/website-information'
import { GeneratePrimaryPageData } from '@/utils/Generator/GeneratePrimaryPageData'
import { TypeAgathaPageFrameData } from '@/utils/Models/SchemaAgathaPageFrameData'
import Image from 'next/image'

const SobreMi = async ({}: Props) => {
	const info = await GeneratePrimaryPageData(MainPageEndPoints.sobre_mi.requestUrl)

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
			{/* <BaseFrame> */}
			<AboutMePageFrame data={agathaData}>
				<>
					<section className="p-5 lg:p-10 flex flex-col lg:flex-row lg:gap-[1.75rem] lg:justify-between">
						<div className="flex flex-col gap-[1.25rem] mb-[2.4rem] lg:max-w-[560px] xl:max-w-[690px]">
							<h3 className="text-2xl font-light leading-normal tracking-[1px] text-agatha-text-c">{`JOHN MAYTA`}</h3>
							<h6 className="text-xs font-normal leading-normal tracking-[1px] text-agatha-text-c uppercase">{`Photographer / Designer`}</h6>
							<p className="text-sm leading-6 font-light tracking-[1px] text-agatha-text-c">
								{`
									Integer nec rhoncus lacus. Vestibulum suscipit tristique cursus. Nunc tempor, leo ornare dignissim laoreet, ex ligula imperdiet metus, a pellentesque lectus sem eu nunc. Donec malesuada id velit eget laoreet. Nullam posuere diam nec dolor volutpat bibendum. Aliquam efficitur id sapien in feugiat.
								`}
							</p>
							<blockquote className="sobremi-quote mb-[1.2rem] mt-[0.7rem] tracking-[1px] relative py-[0.625rem] px-[1.25rem] font-medium italic text-sm leading-6 text-agatha-text-c">
								{`
									Neque sit amet mauris egestas quis mattis velit fringilla. Curabitur viver justo sed scelerisque. Cras consectetur purus sit amet fermentum. Aenean mattis eu leo quam curcus.
									`}
							</blockquote>
							<div className="text-agatha-text-c flex flex-col gap-[1.35rem]">
								<h6 className="font-normal text-xs leading-normal tracking-[1px]">{`ENCUENTRAME EN:`}</h6>
								<ContactList />
							</div>
						</div>
						<div className="relative aspect-[18/25] xl:aspect-auto xl:w-[333px] xl:h-[461px] lg:max-h-[370px] xl:max-h-none lg:basis-full xl:basis-auto flex items-start justify-start">
							<Image
								src={
									'https://demo.themetorium.net/html/agatha/dark/assets/img/team/team-1.jpg'
								}
								className='object-contain top-0 xl:object-fill'
								alt=""
								fill
							/>
						</div>
					</section>
				</>
			</AboutMePageFrame>
			{/* </BaseFrame> */}
		</>
	)
}
export default SobreMi
