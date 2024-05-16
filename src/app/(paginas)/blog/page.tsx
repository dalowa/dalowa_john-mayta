import { AgathaPageFrame, RecentPost, SearchPost, tipoSc } from '@/components/Blog'
import { BlogArticle } from '@/components/Blog/BlogArticle'
import { categorias, postList, recentpostsList } from '@/components/Blog/placeholderData'
import BaseFrame from '@/components/Common/BaseFrame/BaseFrame'
import { MainPageEndPoints } from '@/data/website-information'
import { GeneratePrimaryPageData } from '@/utils/Generator/GeneratePrimaryPageData'
import { TypeAgathaPageFrameData } from '@/utils/Models/SchemaAgathaPageFrameData'
import React from 'react'
import { HiSearch } from 'react-icons/hi'

export default async function BlogPagina() {
	const info = await GeneratePrimaryPageData(MainPageEndPoints.blog.requestUrl)

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
		<AgathaPageFrame data={agathaData}>
			<div className="flex flex-col p-5 lg:p-10 lg:flex-row">
				<div className="flex-col flex gap-[4.5rem] lg:basis-[66.6%] lg:pr-[0.9375rem]">
					{postList.map((post, index) => (
						<BlogArticle
							key={index}
							title={post.title}
							date={post.date}
							byWho={post.byWho}
							label={post.label}
							simpleText={post.simpleText}
							redirectLink={post.redirectLink}
							showcaseType={post.showcaseType as tipoSc}
							arraySrc={post.srcUrls}
						/>
					))}
				</div>
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
		</AgathaPageFrame>
	)
}
