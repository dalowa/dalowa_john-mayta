import { z } from 'zod'
import { ReqAlbum, ReqAlbum_Highlightimage, ReqAlbum_Images, TypeResAlbum } from '../SmugmugAPI'
import { GenerateImageData, TypeImageData } from './GenerateImageData'

const SchemaAlbumPageData = z.object({
	Title: z.string(),
	subTitle: z.string().optional(),
	backgroundImage: z.object({
		bgSmall: z.object({
			url: z.string(),
			urlBlur: z.string(),
		}),
		bgMedium: z.object({
			url: z.string(),
			urlBlur: z.string(),
		}),
		bgLarge: z.object({
			url: z.string(),
			urlBlur: z.string(),
		}),
		bg4K: z.object({
			url: z.string(),
			urlBlur: z.string(),
		}),
		bg5K: z.object({
			url: z.string(),
			urlBlur: z.string(),
		}),
	}),
	imagesAlbum: z.array(
		z.object({
			id: z.number(),
			bgSmall: z.object({
				url: z.string(),
				urlBlur: z.string(),
			}),
			bgMedium: z.object({
				url: z.string(),
				urlBlur: z.string(),
			}),
			bgLarge: z.object({
				url: z.string(),
				urlBlur: z.string(),
			}),
			bg4K: z.object({
				url: z.string(),
				urlBlur: z.string(),
			}),
			bg5K: z.object({
				url: z.string(),
				urlBlur: z.string(),
			}),
		}),
	),
})

export type TypeAlbumPageData = z.infer<typeof SchemaAlbumPageData>

export const GenerateAlbumPageData = async (albumKey: string = 'vM3Zz9') => {
	const AlbumData = ((await ReqAlbum(`/api/v2/album/${albumKey}`)) as TypeResAlbum).Response.Album
	const AlbumImagesLink = (
		await ReqAlbum_Images(`/api/v2/album/${albumKey}!images`)
	)?.Response.AlbumImage.map((e) => e.Uris.ImageSizes.Uri)

	const ImageSizes = AlbumImagesLink?.map((e) => GenerateImageData(e))

	const ImageSizesSolved = await Promise.all(ImageSizes as Promise<TypeImageData>[])

	const ImagesWithId = ImageSizesSolved.map((e, i) => {
		return {
			...e,
			id: i,
		}
	})

	const ImageBackgroundUrl = (
		await ReqAlbum_Highlightimage(AlbumData.Uris.HighlightImage.Uri as string)
	).Response.Image.Uris.ImageSizes.Uri as string

	const ImageBackground = await GenerateImageData(ImageBackgroundUrl)

	const AlbumPageData: TypeAlbumPageData = {
		Title: AlbumData.Name,
		subTitle: AlbumData.Description,
		backgroundImage: ImageBackground,
		imagesAlbum: ImagesWithId,
	}

	return AlbumPageData
}
