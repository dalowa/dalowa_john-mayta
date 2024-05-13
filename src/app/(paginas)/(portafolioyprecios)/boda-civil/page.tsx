import { GalleryNavigator } from '@/components/GalleryNavigator'
import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import {
	createGalleryNavigatorPageMetadata,
	createGalleryNavigatorPageInformation,
} from '@/utils/Functions'

export const generateMetadata = async () => {
	return await createGalleryNavigatorPageMetadata(
		PortfolioAndPricingEndpoints.boda_civil.requestUrl,
	)
}

const PageBodaCivil = async () => {
	const galleryNavigatorPageInformation = await createGalleryNavigatorPageInformation(
		PortfolioAndPricingEndpoints.boda_civil,
	)

	return (
		<>
			<GalleryNavigator info={galleryNavigatorPageInformation} />
		</>
	)
}

export default PageBodaCivil
