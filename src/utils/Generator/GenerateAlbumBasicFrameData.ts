import { z } from 'zod'

import { ReqAlbum, ReqAlbum_Highlightimage, ReqBlurImage, ReqImage_Sizes } from '../SmugmugAPI'

const SchemaGenerateAlbumBasicFrameData = z.object({
	Title: z.string(),
	subTitle: z.string(),
	Id: z.string(),
	HighlightImage: z.object({
		smallScreen: z.string(),
		mediumScreen: z.string(),
		largeScreen: z.string(),
		extraLargeScreen: z.string(),
		_4xLargeScreen: z.string(),
		_5xLargeScreen: z.string(),
		blurURL: z.string(),
	}),
})

export type TypeGenerateAlbumBasicFrameData = z.infer<typeof SchemaGenerateAlbumBasicFrameData>

export const GenerateAlbumBasicFrameData = async (
	albumId: string,
): Promise<TypeGenerateAlbumBasicFrameData> => {
	const dataAlbum = await ReqAlbum(`/api/v2/album/${albumId}`)

	const albumHighlightImage = await ReqAlbum_Highlightimage(
		dataAlbum?.Response.Album.Uris.HighlightImage.Uri,
	)
	const albumHighlightImageSizesUrl = albumHighlightImage?.Response.Image.Uris.ImageSizes.Uri
	const albumHighlightImageSizes = (await ReqImage_Sizes(albumHighlightImageSizesUrl))?.Response
		.ImageSizes
	const albumHighlightImageBlur = await ReqBlurImage(
		albumHighlightImageSizes?.MediumImageUrl as string,
	)

	const data: TypeGenerateAlbumBasicFrameData = {
		Title: dataAlbum?.Response.Album.Name as string,
		subTitle: dataAlbum?.Response.Album.Description as string,
		Id: albumId,
		HighlightImage: {
			smallScreen: albumHighlightImageSizes?.SmallImageUrl as string,
			mediumScreen: albumHighlightImageSizes?.MediumImageUrl as string,
			largeScreen: albumHighlightImageSizes?.LargeImageUrl as string,
			extraLargeScreen: albumHighlightImageSizes?.XLargeImageUrl as string,
			_4xLargeScreen: albumHighlightImageSizes?._4KImageUrl as string,
			_5xLargeScreen: albumHighlightImageSizes?._5KImageUrl as string,
			blurURL: albumHighlightImageBlur as string,
		},
	}

	return data
}
