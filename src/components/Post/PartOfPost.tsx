import Image from 'next/image'

interface Props {
	type: 'text' | 'image' | 'quote'
	content: string
}

export const PartOfPost = ({ type, content }: Props) => {
	switch (type) {
		case 'text':
			return (
				<p className="text-agatha-text-c font-light tracking-[1px]  my-[0.35rem] text-sm leading-6">
					{content}
				</p>
			)
		case 'image':
			return (
				<div className="w-full bg-amber-300 relative aspect-video my-[1.5rem]">
					<Image
						src={content}
						alt="helper image"
						layout="fill"
						className="object-cover object-center"
					/>
				</div>
			)
		case 'quote':
			return (
				<blockquote className="sobremi-quote mb-[1.2rem] mt-[0.7rem] tracking-[1px] relative py-[0.625rem] px-[1.25rem] font-medium italic text-sm leading-6 text-agatha-text-c">
					{content}
				</blockquote>
			)
		default:
			return <></>
	}
}
