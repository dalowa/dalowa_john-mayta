import { z } from 'zod'
import { axiosWithOAuth } from './axiosWithOAuth'

const ResAlbum_Images = z.object({
	Response: z.object({
		AlbumImage: z.array(
			z.object({
				ArchivedUri: z.string(),
				ImageKey: z.string(),
				Uri: z.string(),
				FileName: z.string(),
				Uris: z.object({
					ImageSizes: z.object({
						Uri: z.string(),
					}),
					Album: z.object({
						Uri: z.string(),
					}),
					Image: z.object({
						Uri: z.string(),
					}),
				}),
			}),
		),
	}),
})
export type TypeResAlbum_Images = z.infer<typeof ResAlbum_Images>

export async function ReqAlbum_Images(URL: string): Promise<TypeResAlbum_Images | undefined> {
	/* console.log('ReqAlbum_Images has been called') */
	try {
		if (typeof URL !== 'string') return undefined

		const response = await axiosWithOAuth(URL)
		const responseJSON = await response.data

		const data: TypeResAlbum_Images = {
			Response: {
				AlbumImage: responseJSON.Response.AlbumImage.map((image: any) => {
					return {
						ArchivedUri: image.ArchivedUri,
						ImageKey: image.ImageKey,
						Uri: image.Uri,
						FileName: image.FileName,
						Uris: {
							ImageSizes: {
								Uri: image.Uris.ImageSizes?.Uri,
							},
							Album: {
								Uri: image.Uris.Album?.Uri,
							},
							Image: {
								Uri: image.Uris.Image?.Uri,
							},
						},
					}
				}),
			},
		}

		/* console.log(`This ReqAlbum_Images data is from ${URL} =>`, data) */
		return data
	} catch (error) {
		console.log('Error:', error)
		return undefined
	}
}
