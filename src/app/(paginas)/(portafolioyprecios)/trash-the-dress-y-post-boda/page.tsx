import { GalleryNavigator } from '@/components/GalleryNavigator'
import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import {
	createGalleryNavigatorPageInformation,
	createGalleryNavigatorPageMetadata,
} from '@/utils/Functions'

export const generateMetadata = async () => {
	return await createGalleryNavigatorPageMetadata(
		PortfolioAndPricingEndpoints.trash_the_dress_y_post_boda.requestUrl,
	)
}

const PageTrashTheDressYPostBoda = async () => {
	const galleryNavigatorPageInformation = await createGalleryNavigatorPageInformation(
		PortfolioAndPricingEndpoints.trash_the_dress_y_post_boda,
	)

	return (
		<>
			<GalleryNavigator info={galleryNavigatorPageInformation} />
		</>
	)
}
export default PageTrashTheDressYPostBoda
