import { GalleryNavigator } from '@/components/GalleryNavigator'
import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import {
	createGalleryNavigatorPageInformation,
	createGalleryNavigatorPageMetadata,
} from '@/utils/Functions'

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
			<GalleryNavigator info={galleryNavigatorPageInformation} />
		</>
	)
}
export default PagePreBodaYCompromiso
