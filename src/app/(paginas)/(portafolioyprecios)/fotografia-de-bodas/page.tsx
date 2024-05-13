import { GalleryNavigator } from '@/components/GalleryNavigator'
import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import {
	createGalleryNavigatorPageInformation,
	createGalleryNavigatorPageMetadata,
} from '@/utils/Functions'
import { TypeGenerateAlbumsInFolder } from '@/utils/Generator'

export const generateMetadata = async () => {
	return await createGalleryNavigatorPageMetadata(
		PortfolioAndPricingEndpoints.fotografia_de_bodas.requestUrl,
	)
}

const PageFotografiaDeBodas = async () => {
	const galleryNavigatorPageInformation = await createGalleryNavigatorPageInformation(
		PortfolioAndPricingEndpoints.fotografia_de_bodas,
	)

	return (
		<>
			<GalleryNavigator info={galleryNavigatorPageInformation as TypeGenerateAlbumsInFolder} />
		</>
	)
}
export default PageFotografiaDeBodas
