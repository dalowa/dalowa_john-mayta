import { Metadata } from 'next'
import { z } from 'zod'
import { ReqAlbum, ReqAlbum_Highlightimage, ReqImage_Sizes } from '../SmugmugAPI'

const SchemaAlbumMetadata = z.object({
	Title: z.string(),
})

export type TypeAlbumMetadata = z.infer<typeof SchemaAlbumMetadata>

export async function GenerateAlbumMetadata(albumId: string): Promise<Metadata> {
	const albumData = (await ReqAlbum(`/api/v2/album/${albumId}`))?.Response.Album

	const albumHighlightImageSizesURL = (
		await ReqAlbum_Highlightimage(albumData?.Uris.HighlightImage.Uri)
	).Response.Image.Uris.ImageSizes.Uri

	const highlightImageForOpenGraph = (await ReqImage_Sizes(albumHighlightImageSizesURL))?.Response
		.ImageSizes.MediumImageUrl

	const data: Metadata = {
		title: albumData?.Name || 'Good couple',
		description: albumData?.Description || 'A good couple in a good place',
		openGraph: {
			images: [
				{
					url:
						highlightImageForOpenGraph ||
						'https://photos.smugmug.com/SERVICIOS/BODAS/FLAVIA-RENATO/i-bdswGzC/6/CsHQrgP7k7hjQ5ZcRpsJVKDFhnsJchGxPF9cXdJHd/S/DSC_3328-S.jpg',
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
		},
	}

	return data
}
