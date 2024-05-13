import { GalleryNavigator } from '@/components/GalleryNavigator'
import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import {
	createGalleryNavigatorPageInformation,
	createGalleryNavigatorPageMetadata,
} from '@/utils/Functions'
import { TypeGenerateAlbumsInFolder } from '@/utils/Generator'

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
			<GalleryNavigator info={galleryNavigatorPageInformation as TypeGenerateAlbumsInFolder} />
		</>
	)
}
export default PageTrashTheDressYPostBoda
