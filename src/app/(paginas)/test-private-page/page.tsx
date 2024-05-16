import { Test } from '@/components/Test'

import BaseFrame from '@/components/Common/BaseFrame/BaseFrame'
import PostPageFrame from '@/components/Post/PostPageFrame'
import { GeneratePrimaryPageData } from '@/utils/Generator/GeneratePrimaryPageData'
import { TypeAgathaPageFrameData } from '@/utils/Models/SchemaAgathaPageFrameData'
import { dataPostFrameDataUrl, dataPostTest } from '@/components/Post/placegolderData'
import { recentpostsList } from '@/components/Blog/placeholderData'
import { RecentPost } from '../../../components/Blog/RecentPost'
import { categorias } from '../../../components/Blog/placeholderData'
import { SearchPost } from '@/components/Blog'
import { AuthorSection } from '../../../components/Post/AuthorSection'
import { FaChevronLeft, FaChevronRight, FaShareAlt, FaTags } from 'react-icons/fa'
import { PartOfPost } from '@/components/Post'
import Image from 'next/image'

interface Props {}

const TestPrivatePage = async ({}: Props) => {
	const info = await GeneratePrimaryPageData(dataPostFrameDataUrl)

	const agathaData: TypeAgathaPageFrameData = {
		backgroundImage:
			info.HighlightImage.imageUrl ||
			'https://photos.smugmug.com/SERVICIOS/BODAS/FLAVIA-RENATO/i-bdswGzC/6/DzWLg58SJXdMDntmmqZMkZjbd8CKQ9z6jj8BdShRT/X2/DSC_3328-X2.jpg',
		blurBackgroundImage: info.HighlightImage.blurURL,
		title: 'The Truth About Photography'.toLocaleUpperCase(),
		subTitle: info.subTitle.toLocaleUpperCase(),
		sectionConfig: {
			maxWidth: '',
		},
	}

	return (
		<>
			<PostPageFrame data={agathaData}>
				<div className="flex flex-col p-5 lg:p-10 lg:flex-row">
					<section className="flex-col flex gap-[0rem] lg:basis-[66.6%] lg:pr-[0.9375rem]">
						<div className="flex flex-col lg:flex-row lg:justify-between">
							<AuthorSection
								imgUrl={dataPostTest.authorData.image}
								author={dataPostTest.authorData.name}
								date={dataPostTest.date}
								label={dataPostTest.mainLabel}
							/>
							<div className="flex mt-[1.875rem] justify-start md:justify-end md:my-0">
								<div className="flex cursor-pointer items-center justify-center gap-2 group ">
									<FaShareAlt className=" text-[1.125rem] leading-6 font-normal group-hover:text-celeste-color" />
									<span className="text-xs font-normal flex tracking-[1px] leading-6">
										{'COMPARTIR'.toLocaleUpperCase()}
									</span>
								</div>
							</div>
						</div> md:basis-[50%]
						<div className="flex flex-col mt-[1.75rem]">
							{dataPostTest.content.map((e, index) => (
								<PartOfPost key={index} type={e.type} content={e.content} />
							))}
						</div>
						<div className='flex flex-wrap my-4 mt-10'>
							<span className='flex text-xs font-light justify-center items-center mr-[0.25rem]'>
								<FaTags className='text-sm mr-[0.5rem]' /> TAGS:
							</span>
							{
									dataPostTest.labels.map((e, index) => (
										<a key={index} href='#' className="tracking-[1px] bg-agatha-button-bg-b inline h-7 text-xs px-2 py-[0.125rem] text-words-color font-normal leading-6 rounded-[30px] mx-[0.25rem] my-1">
											{`#${e}`}
										</a>
									) )
								}
						</div>
						<div className='flex flex-col gap-[2rem] md:flex-row sm:gap-[1.5rem]'>
							<div className='flex p-[0.9375rem] border border-agatha-text-c/10 md:basis-[50%]'>
								<div className='relative w-[4.375rem] aspect-square rounded-[4.375rem]'>
									<Image 
										src={'https://photos.smugmug.com/SERVICIOS/BODAS/FLAVIA-RENATO/i-bdswGzC/6/DzWLg58SJXdMDntmmqZMkZjbd8CKQ9z6jj8BdShRT/X2/DSC_3328-X2.jpg'}
										fill
										className='object-cover rounded-[4.375rem]'
										alt='prev post image'
									/>
									
								</div>
								<div className='flex p-[0.8125rem] flex-col gap-[0.3rem]'>
										<a href="#" className='flex items-center gap-[0.5rem]' >
											<FaChevronLeft  className='text-[0.8125rem]'/>
											<span className='text-[0.8125rem] font-semibold tracking-[1px] leading-6'>{`PREV POST`}</span>
										</a>
										<h4 className='text-xs pl-[2px] font-normal tracking-[1px] leading-[1.4]'>{dataPostTest.prevPost.name}</h4>
								</div>
							</div>
							<div className='flex p-[0.9375rem] flex-row-reverse border border-agatha-text-c/10 md:basis-[50%]'>
								<div className='relative w-[4.375rem]  h-[4.375rem] aspect-square rounded-[4.375rem]'>
									<Image 
										src={'https://photos.smugmug.com/SERVICIOS/BODAS/FLAVIA-RENATO/i-bdswGzC/6/DzWLg58SJXdMDntmmqZMkZjbd8CKQ9z6jj8BdShRT/X2/DSC_3328-X2.jpg'}
										fill
										className='object-cover rounded-[4.375rem]'
										alt='prev post image'
									/>
									
								</div>
								<div className='flex p-[0.8125rem] flex-col gap-[0.3rem] h-[4.5rem]'>
										<a href="#" className='flex items-center gap-[0.5rem] flex-row-reverse' >
											<FaChevronRight  className='text-[0.8125rem]'/>
											<span className='text-[0.8125rem] font-semibold tracking-[1px] leading-6'>{`NEXT POST`}</span>
										</a>
										<h4 className='text-xs overflow-hidden text-ellipsis pl-[2px] font-normal tracking-[1px] leading-[1.4]'>{dataPostTest.nextPost.name}</h4>
								</div>
							</div>
						</div>
					</section>
					<aside className="mt-[1.875rem] pt-[5rem] lg:mt-0 lg:pt-0 flex flex-col lg:basis-[33.4%] lg:pl-[3.9rem]">
						<SearchPost />
						<div className="mt-[3.5rem] flex flex-col">
							<div className="flex flex-col md:flex-row lg:flex-col">
								<div className="w-full text-agatha-text-e flex flex-col mb-[2.25rem] md:basis-[50%] md:pr-[0.9375rem] lg:px-0">
									<h3 className="text-base text-agatha-text-e font-normal tracking-[1px]">
										CATEGORIAS
									</h3>
									<span className="text-5xl leading-3 font-extralight my-1">~</span>
									<ul className="flex flex-col gap-4 my-[1.75rem] mt-[2.5rem] text-agatha-text-c">
										{categorias.map((e) => (
											<li key={e.name}>
												<button className="flex w-full tracking-[1px] justify-between uppercase">
													<span className="text-words-color text-sm">{`#${e.name}`}</span>
													<span className="text-xs p-[0.25rem] rounded-2xl bg-[#202020]">{`${e.amount}`}</span>
												</button>
											</li>
										))}
									</ul>
								</div>
								<div className="w-full text-agatha-text-e flex flex-col md:basis-[50%] md:pl-[0.9375rem] lg:px-0">
									<h3 className="text-base text-agatha-text-e font-normal tracking-[1px]">
										POST RECIENTES
									</h3>
									<span className="text-5xl leading-3 font-extralight my-1">~</span>
									<div className="flex flex-col gap-[2.25rem] my-[2.25rem]">
										{recentpostsList.map((e) => (
											<RecentPost
												imgUrl={e.imgUrl}
												title={e.title}
												author={e.author}
												date={e.date}
												path={e.path}
												key={e.title}
											/>
										))}
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</aside>
				</div>
			</PostPageFrame>
		</>
	)
}
export default TestPrivatePage
