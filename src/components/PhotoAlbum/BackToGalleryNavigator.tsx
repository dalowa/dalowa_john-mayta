import Link from 'next/link'
import { FaThList } from 'react-icons/fa'

interface Props {
	originUrl: string
}

export const BackToGalleryNavigator = ({ originUrl }: Props) => {
	return (
		<>
			<Link href={originUrl} className="flex gap-[0.5rem] justify-center items-center">
				<FaThList className="text-xl text-[1.125rem] font-medium" />
				<span className="text-xs font-normal xl:hidden tracking-[1px] leading-6">LISTA</span>
				<span className="xl:flex hidden text-xs font-normal tracking-[1px] leading-6">
					VOLVER A LA LISTA DE ALBUMS
				</span>
			</Link>
		</>
	)
}
