import { GalleryNavigator } from '@/components/GalleryNavigator'
import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import {
	createGalleryNavigatorPageInformation,
	createGalleryNavigatorPageMetadata,
} from '@/utils/Functions'
import { TypeGenerateAlbumsInFolder } from '@/utils/Generator'

export const generateMetadata = async () => {
	return await createGalleryNavigatorPageMetadata(
		PortfolioAndPricingEndpoints.pre_boda_y_compromiso.requestUrl,
	)
}

const PagePreBodaYCompromiso = async () => {
	const galleryNavigatorPageInformation = await createGalleryNavigatorPageInformation(
		PortfolioAndPricingEndpoints.pre_boda_y_compromiso,
	)

	return (
		<>
			<GalleryNavigator info={galleryNavigatorPageInformation as TypeGenerateAlbumsInFolder} />
		</>
	)
}
export default PagePreBodaYCompromiso
