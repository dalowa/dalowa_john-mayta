import GalleryMain from '@/components/Home/GalleryMain'
import { MainPageEndPoints } from '@/data/website-information'

import { GenerateHomeMainAlbumsData } from '@/utils/Generator/GenerateHomeMainAlbumsData'

export default async function Inicio() {
	const d = await GenerateHomeMainAlbumsData(MainPageEndPoints.inicio.requestUrl)

	return (
		<>
			<div className="agatha-home-frame-height mt-[4.5rem] w-screen ">
				<GalleryMain data={d} />
			</div>
			<ul className="absolute top-0 z-10 hidden">
				<li className="-translate-x-[000%] w-1 h-1"></li>
				<li className="-translate-x-[100%] w-1 h-1"></li>
				<li className="-translate-x-[200%] w-1 h-1"></li>
				<li className="-translate-x-[300%] w-1 h-1"></li>
				<li className="-translate-x-[400%] w-1 h-1"></li>
				<li className="-translate-x-[500%] w-1 h-1"></li>
				<li className="-translate-x-[600%] w-1 h-1"></li>
				<li className="-translate-x-[700%] w-1 h-1"></li>
				<li className="-translate-x-[800%] w-1 h-1"></li>
				<li className="-translate-x-[900%] w-1 h-1"></li>
				<li className="-translate-x-[1000%] w-1 h-1"></li>
				<li className="-translate-x-[1100%] w-1 h-1"></li>
				<li className="-translate-x-[1200%] w-1 h-1"></li>
				<li className="-translate-x-[1300%] w-1 h-1"></li>
				<li className="-translate-x-[1400%] w-1 h-1"></li>
				<li className="-translate-x-[1500%] w-1 h-1"></li>
				<li className="-translate-x-[1600%] w-1 h-1"></li>
				<li className="-translate-x-[1700%] w-1 h-1"></li>
				<li className="-translate-x-[1800%] w-1 h-1"></li>
				<li className="-translate-x-[1900%] w-1 h-1"></li>
				<li className="-translate-x-[2000%] w-1 h-1"></li>
				<li className="-translate-x-[2100%] w-1 h-1"></li>
				<li className="-translate-x-[2200%] w-1 h-1"></li>
				<li className="-translate-x-[2300%] w-1 h-1"></li>
			</ul>
		</>
	)
}
