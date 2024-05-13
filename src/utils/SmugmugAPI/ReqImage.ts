import { z } from 'zod'
import { axiosWithOAuth } from './axiosWithOAuth'

const ResImage = z.object({
	Response: z.object({
		Image: z.object({
			Title: z.string(),
			ArchivedUri: z.string(),
			Uri: z.string(),
			FileName: z.string(),
			ImageKey: z.string(),
			Uris: z.object({
				ImageSizes: z.object({
					Uri: z.string(),
				}),
				ImageAlbum: z.object({
					Uri: z.string(),
				}),
			}),
		}),
	}),
})
export type TypeResImage = z.infer<typeof ResImage>

const defaultUrl = '/api/v2/image/WkKwb36-0'

export async function ReqImage(URL: string = defaultUrl): Promise<TypeResImage | undefined> {
	/* console.log('ReqImage has been called') */
	try {
		if (typeof URL !== 'string') throw new Error('URL must be a string')

		const response = await axiosWithOAuth(URL)
		const responseJSON: TypeResImage = await response.data

		const data: TypeResImage = {
			Response: {
				Image: {
					Title: responseJSON.Response.Image.Title,
					ArchivedUri: responseJSON.Response.Image.ArchivedUri,
					Uri: responseJSON.Response.Image.Uri,
					FileName: responseJSON.Response.Image.FileName,
					ImageKey: responseJSON.Response.Image.ImageKey,
					Uris: {
						ImageSizes: {
							Uri: responseJSON.Response.Image.Uris.ImageSizes?.Uri,
						},
						ImageAlbum: {
							Uri: responseJSON.Response.Image.Uris.ImageAlbum?.Uri,
						},
					},
				},
			},
		}

		/* console.log(`This ReqImage data is from ${URL} =>`, data) */
		return data
	} catch (error) {
		console.log('Error:', error)
		return undefined
	}
}
