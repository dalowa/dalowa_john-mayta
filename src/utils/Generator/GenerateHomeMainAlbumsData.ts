import { z } from 'zod'
import {
	ReqAlbum_Images,
	ReqBlurImage,
	ReqFolder_Albums,
	ReqImage_Sizes,
	axiosWithOAuth,
} from '../SmugmugAPI'
import { ReqAlbum_Highlightimage } from '../SmugmugAPI/ReqAlbum_Highlightimage'

const SchemaHomeMainAlbumsData = z.array(
	z.object({
		imageObject: z.object({
			background: z.string(),
			blur: z.string(),
		}),
		title: z.string(),
		amountOfPhotos: z.string(),
		id: z.string(),
		pathForLink: z.string(),
	}),
)

export type TypeHomeMainAlbumsData = z.infer<typeof SchemaHomeMainAlbumsData>

export async function GenerateHomeMainAlbumsData(URL: string) {
	const HomeAlbumsData = (await ReqFolder_Albums(`${URL}!albums`))?.Response.Album

	const HomeAlbumsHightlightImagePromises =
		HomeAlbumsData?.map((e) => ReqAlbum_Highlightimage(e.Uris.HighlightImage.Uri)) ?? []

	const HomeAlbumsHightlightImage = await Promise.all(HomeAlbumsHightlightImagePromises)

	const AlbumsMainImagePromises = HomeAlbumsHightlightImage.map((e, i) =>
		ReqImage_Sizes(e.Response.Image.Uris.ImageSizes.Uri),
	)

	const AlbumsMainImage = (await Promise.all(AlbumsMainImagePromises)).map(
		(e) =>
			e?.Response.ImageSizes.X3LargeImageUrl ||
			e?.Response.ImageSizes.X4LargeImageUrl ||
			e?.Response.ImageSizes.X2LargeImageUrl ||
			e?.Response.ImageSizes.LargestImageUrl ||
			e?.Response.ImageSizes.MediumImageUrl,
	)

	const AlbumsMainImageBlurPromise = AlbumsMainImage.map((e) => ReqBlurImage(e as string))

	const AlbumsMainImageBlur = await Promise.all(AlbumsMainImageBlurPromise)

	const AlbumsImagesPromises =
		HomeAlbumsData?.map((e) => ReqAlbum_Images(e.Uris.AlbumImages.Uri)) ?? []

	const AlbumsImagesAmount = (await Promise.all(AlbumsImagesPromises)).map(
		(e) => e?.Response.AlbumImage.length || 0,
	)

	const data: TypeHomeMainAlbumsData = HomeAlbumsData?.map((e, i) => ({
		imageObject: {
			background: AlbumsMainImage[i] || '',
			blur: AlbumsMainImageBlur[i],
		},
		title: e.Name || '',
		amountOfPhotos: AlbumsImagesAmount[i].toString(),
		id: e.AlbumKey,
		pathForLink: `/es/album/${e.AlbumKey}`,
	})) as TypeHomeMainAlbumsData

	return data
}
