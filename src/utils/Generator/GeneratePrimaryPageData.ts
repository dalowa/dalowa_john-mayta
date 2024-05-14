import { ReqBlurImage, ReqFolder, ReqFolder_Highlightimage, ReqImage_Sizes } from '../SmugmugAPI'
import { ReqAlbum_Highlightimage } from '../SmugmugAPI/ReqAlbum_Highlightimage'
import { z } from 'zod'

const SchemaGeneratePrimaryPageData = z.object({
	Title: z.string(),
	subTitle: z.string(),
	Id: z.string(),
	HighlightImage: z.object({
		imageUrl: z.string().or(z.undefined()),
		blurURL: z.string(),
	}),
})

export type TypeGeneratePrimaryPageData = z.infer<typeof SchemaGeneratePrimaryPageData>

export const GeneratePrimaryPageData = async (
	albumId: string,
): Promise<TypeGeneratePrimaryPageData> => {
	const dataPage = await ReqFolder(albumId)

	const albumHighlightImageUrl = dataPage?.Response.Folder.Uris.HighlightImage.Uri
	const albumHighlightImageSizesUrl = await ReqFolder_Highlightimage(albumHighlightImageUrl)
	const albumHighlightImageLink = (
		await ReqImage_Sizes(albumHighlightImageSizesUrl.Response.Image.Uris.ImageSizes.Uri)
	)?.Response.ImageSizes.LargeImageUrl
	const albumHighlightImageBlur = await ReqBlurImage(albumHighlightImageLink as string)

	return {
		Title: (dataPage?.Response.Folder.Name as string) || 'Empty',
		subTitle: (dataPage?.Response.Folder.Description as string) || 'Empty',
		Id: albumId,
		HighlightImage: {
			imageUrl: (albumHighlightImageLink as string) || undefined,
			blurURL: albumHighlightImageBlur as string,
		},
	}
}
