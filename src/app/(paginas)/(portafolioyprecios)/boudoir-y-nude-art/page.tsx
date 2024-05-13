import { GalleryNavigator } from '@/components/GalleryNavigator'
import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import {
	createGalleryNavigatorPageInformation,
	createGalleryNavigatorPageMetadata,
} from '@/utils/Functions'

export const generateMetadata = async () => {
	return await createGalleryNavigatorPageMetadata(
		PortfolioAndPricingEndpoints.boudoir_y_nude_art.requestUrl,
	)
}

const PageBoudoirYNudeArt = async () => {
	const galleryNavigatorPageInformation = await createGalleryNavigatorPageInformation(
		PortfolioAndPricingEndpoints.boudoir_y_nude_art,
	)

	return (
		<>
			<GalleryNavigator info={galleryNavigatorPageInformation} />
		</>
	)
}
export default PageBoudoirYNudeArt
