import Image from 'next/image'
import Link from 'next/link'

interface Props {
	imgUrl: string
	title: string
	author: string
	date: Date
	path: string
}

export const RecentPost = ({ imgUrl, title, author, date, path }: Props) => {
	return (
		<>
			<Link href={path} className="flex items-center gap-[1rem]">
				<div className="rounded-full relative  flex items-center w-14 h-14 justify-center bg-agatha-text-a aspect-square overflow-hidden">
					<Image src={imgUrl} alt={author} fill className="object-cover" />
				</div>

				<div className="text-xs flex flex-col gap-[0.06rem]">
					<h4 className="font-normal leading-snug tracking-[1px] text-agatha-text-a font-xs mb-[0.35rem]">
						{title.toLocaleUpperCase()}
					</h4>
					<h5 className="font-normal text-xs tracking-[1px] leading-4 text-agatha-text-c">{`POR: ${author.toLocaleUpperCase()}`}</h5>
					<h6 className="text-[0.575rem]">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</h6>
				</div>
			</Link>
		</>
	)
}
