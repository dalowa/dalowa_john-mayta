import Link from 'next/link'
import { ShowCase, tipoSc } from './ShowCase'

interface Props {
	showcaseType: tipoSc
	arraySrc: string[] | string
	title: string
	date: string
	byWho: string
	label: string
	simpleText: string
	redirectLink: string
}

export const BlogArticle = ({
	title,
	date,
	byWho,
	label,
	simpleText,
	redirectLink,
	arraySrc,
	showcaseType,
}: Props) => {
	return (
		<>
			<article className="flex flex-col">
				<ShowCase type={showcaseType} srcUrls={arraySrc} />
				<h2 className="text-xl text-[1.3125rem] font-light tracking-[1px] text-agatha-text-a">
					{title}
				</h2>
				<div className="text-xs font-normal leading-6 tracking-[1px] uppercase pt-[0.3125rem] pb-5">
					<a href="" className="article-time">
						{date}
					</a>{' '}
					- by:
					<a href="" className="article-author">
						{byWho}
					</a>{' '}
					{`- in `}
					<a href="" className="article-category">
						{label}
					</a>
				</div>
				<p className="text-sm font-light leading-6 tracking-[1px]">{simpleText}</p>
				<div className="w-full flex justify-end pt-[1.875rem]">
					<Link href={'/test-private-page'} className="bg-agatha-button-bg-g rounded-xl flex justify-center items-center text-agatha-text-c py-[0.5rem] px-5 text-xs font-normal tracking-[1px]">
						LEER MAS
					</Link>
				</div>
			</article>
		</>
	)
}
