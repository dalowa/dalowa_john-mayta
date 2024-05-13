import { z } from 'zod'
import {
	ReqAlbum,
	ReqAlbum_Images,
	ReqBlurImage,
	ReqFolder,
	ReqImage_Sizes,
	TypeResImage_Sizes,
} from '../SmugmugAPI'
import { ReqAlbum_Highlightimage } from '../SmugmugAPI/ReqAlbum_Highlightimage'

const SchemaGenerateImagesInAlbum = z.object({
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
	images: z.array(
		z.object({
			id: z.string(),
			smallScreen: z.string(),
			mediumScreen: z.string(),
			largeScreen: z.string(),
			extraLargeScreen: z.string(),
			_4xLargeScreen: z.string(),
			_5xLargeScreen: z.string(),
			blurURL: z.string(),
		}),
	),
})

export type TypeGenerateImagesInAlbum = z.infer<typeof SchemaGenerateImagesInAlbum>

export const GenerateImagesInAlbum = async (
	albumId: string,
): Promise<TypeGenerateImagesInAlbum | null> => {
	try {
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

		const imagesURL = dataAlbum?.Response.Album.Uris.AlbumImages.Uri as string

		/* console.log('MIRA', imagesURL) */

		const images = (await ReqAlbum_Images(imagesURL))?.Response.AlbumImage.map((e) => {
			return ReqImage_Sizes(e.Uris.ImageSizes.Uri)
		}) as Promise<TypeResImage_Sizes>[]

		const imagesDataSolved = (await Promise.all(images)).map((e) => e.Response.ImageSizes)

		const imagesBlur = await Promise.all(
			imagesDataSolved.map((e) => ReqBlurImage(e.MediumImageUrl)),
		)

		const data: TypeGenerateImagesInAlbum = {
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
			images: imagesDataSolved.map((e, i) => ({
				id: `${i}`,
				smallScreen: e.SmallImageUrl as string,
				mediumScreen: e.MediumImageUrl as string,
				largeScreen: e.LargeImageUrl as string,
				extraLargeScreen: e.XLargeImageUrl as string,
				_4xLargeScreen: e._4KImageUrl as string,
				_5xLargeScreen: e._5KImageUrl as string,
				blurURL: imagesBlur[i] as string,
			})),
		}

		return data
	} catch (error) {
		console.log('ERROR IN GENERATE IMAGES IN ALBUM', error)
		return null
	}
}
