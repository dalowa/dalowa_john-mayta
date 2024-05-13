import { z } from 'zod'
import {
	ReqAlbum_Highlightimage,
	ReqAlbum_Images,
	ReqBlurImage,
	ReqFolder,
	ReqFolder_Albums,
	ReqFolder_Highlightimage,
	ReqImage_Sizes,
	TypeResAlbum_Highlightimage,
	TypeResAlbum_Images,
} from '../SmugmugAPI'

const SchemaGenerateAlbumsInFolder = z.object({
	Title: z.string(),
	HighlightImage: z.object({
		smallScreen: z.string(),
		mediumScreen: z.string(),
		largeScreen: z.string(),
		extraLargeScreen: z.string(),
		blurURL: z.string(),
	}),
	Albums: z.array(
		z.object({
			Title: z.string(),
			id: z.string(),
			index: z.string(),
			HighlightImage: z.object({
				smallScreen: z.string(),
				mediumScreen: z.string(),
				largeScreen: z.string(),
				extraLargeScreen: z.string(),
				blurURL: z.string(),
			}),
			AmountOfPhotos: z.number(),
			PathForLink: z.string().optional(),
		}),
	),
})

export type TypeGenerateAlbumsInFolder = z.infer<typeof SchemaGenerateAlbumsInFolder>

export const GenerateAlbumsInFolder = async (folderPath: string) => {
	const dataFolder = await ReqFolder(folderPath)
	const hightlightImage = (
		await ReqImage_Sizes(
			(
				await ReqFolder_Highlightimage(
					dataFolder?.Response.Folder.Uris.HighlightImage.Uri as string,
				)
			).Response.Image.Uris.ImageSizes.Uri,
		)
	)?.Response.ImageSizes

	const dataFolderAlbums = (
		await ReqFolder_Albums(dataFolder?.Response.Folder.Uris.FolderAlbums.Uri as string)
	)?.Response.Album

	const FolderAlbumsHighlightImagePromise = dataFolderAlbums?.map((e) =>
		ReqAlbum_Highlightimage(e.Uris.HighlightImage.Uri),
	)

	const FolderAlbumsHighlightImage = (
		await Promise.all(FolderAlbumsHighlightImagePromise as Promise<TypeResAlbum_Highlightimage>[])
	).map((e) => e.Response.Image.Uris.ImageSizes.Uri)

	const FolderAlbumsHIghlightImageSizesPromise = FolderAlbumsHighlightImage.map((e) =>
		ReqImage_Sizes(e),
	)

	const AmountOfPhotosPromise = dataFolderAlbums?.map((e) =>
		ReqAlbum_Images(e.Uris.AlbumImages.Uri),
	)

	const AmountOfPhotos = (
		await Promise.all(AmountOfPhotosPromise as Promise<TypeResAlbum_Images>[])
	).map((e) => e.Response.AlbumImage.length)

	console.log('DataFolderAlbums', dataFolderAlbums?.[0])
	console.log('AmountOfPhotos', AmountOfPhotos)

	const FolderAlbumsHighlightImageSizes = (
		await Promise.all(FolderAlbumsHIghlightImageSizesPromise)
	).map((e) => e?.Response.ImageSizes)

	const BlurHighlight = FolderAlbumsHighlightImageSizes.map((e) =>
		ReqBlurImage(e?.MediumImageUrl as string),
	)

	const BlurHighlightSolved = await Promise.all(BlurHighlight)

	const completeFolderAlbumsHighlightImage = FolderAlbumsHighlightImageSizes.map((e, i) => ({
		Title: dataFolderAlbums?.[i].Name as string,
		id: dataFolderAlbums?.[i].AlbumKey as string,
		index: `${i}`,
		HighlightImage: {
			smallScreen: e?.SmallImageUrl as string,
			mediumScreen: e?.MediumImageUrl as string,
			largeScreen: e?.LargeImageUrl as string,
			extraLargeScreen: e?.X4LargeImageUrl as string,
			blurURL: BlurHighlightSolved[i] as string,
		},
		AmountOfPhotos: AmountOfPhotos[i],
	}))
	/*  const schemaData = SchemaGenerateAlbumsInFolder.parse(data) */
	const imageBlurUrl = await ReqBlurImage(hightlightImage?.MediumImageUrl as string)
	/* return schemaData */

	const data: TypeGenerateAlbumsInFolder = {
		Title: dataFolder?.Response.Folder.Name as string,
		HighlightImage: {
			smallScreen: hightlightImage?.SmallImageUrl as string,
			mediumScreen: hightlightImage?.MediumImageUrl as string,
			largeScreen: hightlightImage?.LargeImageUrl as string,
			extraLargeScreen: hightlightImage?.X4LargeImageUrl as string,
			blurURL: imageBlurUrl as string,
		},
		Albums: completeFolderAlbumsHighlightImage,
	}

	return data
}
