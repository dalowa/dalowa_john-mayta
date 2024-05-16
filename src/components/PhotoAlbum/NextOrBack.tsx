import Link from 'next/link'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Props {
	originUrl: string
	prevAlbumLink: string | undefined
	nextAlbumLink: string | undefined
}
export const NextOrBack = ({originUrl, nextAlbumLink,prevAlbumLink}: Props) => {
	return (
		<>
			<div className={`flex gap-[1.25rem] xl:gap-[1.5rem] text-xl text-[1.125rem] font-medium`}>
				<Link prefetch href={`${prevAlbumLink == undefined?"#":`${originUrl == "inicio"?"":originUrl}/album/${prevAlbumLink}`}`} className={`flex gap-[0.5rem] justify-center items-center ${prevAlbumLink == undefined?'opacity-50 cursor-default':''}`}>
					<FaChevronLeft />
					<span className={`text-xs font-normal hidden xl:flex tracking-[1px] leading-6`}>
						PREVIO
					</span>
				</Link>
				<Link prefetch href={`${nextAlbumLink == undefined?"#":`${originUrl == "inicio"?"":originUrl}/album/${nextAlbumLink}`}`} className={`flex gap-[0.5rem] justify-center items-center ${nextAlbumLink == undefined?'opacity-50 cursor-default':''}`}>
					<span className={`text-xs font-normal hidden xl:flex tracking-[1px] leading-6`}>
						SIGUIENTE
					</span>
					<FaChevronRight />
				</Link>
			</div>
		</>
	)
}
