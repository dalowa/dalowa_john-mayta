import Image from 'next/image'
import Link from 'next/link'

interface Props {
	imgUrl: string
	author: string
	date: string
	label: string
}

export const AuthorSection = ({ imgUrl, author, date, label }: Props) => {
	return (
		<>
			<div className="flex items-center">
				<div className="rounded-full relative  flex items-center w-9 h-9 justify-center bg-agatha-text-a aspect-square overflow-hidden">
					<Image src={imgUrl} alt={author} fill className="object-cover" />
				</div>

				<div className="text-xs flex flex-col justify-center items-start ml-9">
					<h5 className="font-light text-xs tracking-[1px] leading-[1.4] text-agatha-text-c">{`POR: ${author.toLocaleUpperCase()}`}</h5>
					<h6 className="text-xs font-light tracking-[1px] leading-6">{`${date} - IN ${label}`}</h6>
				</div>
			</div>
		</>
	)
}
