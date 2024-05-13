import { Metadata } from 'next'
import { ReqFolder, ReqFolder_Highlightimage, ReqImage_Sizes, TypeResFolder } from '../SmugmugAPI'

export const createGalleryNavigatorPageMetadata = async (pageUrl: string): Promise<Metadata> => {
	const data = (await ReqFolder(pageUrl)) as TypeResFolder

	const highlightImage = await ReqFolder_Highlightimage(
		data.Response.Folder.Uris.HighlightImage.Uri,
	)

	const shortSize = await ReqImage_Sizes(highlightImage.Response.Image.Uris.ImageSizes.Uri)

	const metadata: Metadata = {
		title: data.Response.Folder.Name,
		description: data.Response.Folder.Description,
		openGraph: {
			images: shortSize?.Response.ImageSizes.MediumImageUrl,
		},
	}
	return metadata
}
