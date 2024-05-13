import { z } from 'zod'
import { axiosWithOAuth } from './axiosWithOAuth'

const ResAlbum = z.object({
	Response: z.object({
		Album: z.object({
			Name: z.string(),
			UrlName: z.string(),
			Description: z.string(),
			NodeID: z.string(),
			Uris: z.object({
				HighlightImage: z.object({
					Uri: z.string(),
				}),
				AlbumImages: z.object({
					Uri: z.string(),
				}),
			}),
		}),
	}),
})
export type TypeResAlbum = z.infer<typeof ResAlbum>

// Hacer testeo de todo lo que puede retornar esta funcion

export async function ReqAlbum(URL: string): Promise<TypeResAlbum | undefined> {
	/* console.log('ReqAlbum has been called') */
	try {
		if (typeof URL !== 'string') throw new Error('URL must be a string')

		const response = await axiosWithOAuth(URL)
		const responseJSON: TypeResAlbum = await response?.data

		const data: TypeResAlbum = {
			Response: {
				Album: {
					Name: responseJSON.Response.Album.Name,
					UrlName: responseJSON.Response.Album.UrlName,
					Description: responseJSON.Response.Album.Description,
					NodeID: responseJSON.Response.Album.NodeID,
					Uris: {
						HighlightImage: {
							Uri: responseJSON.Response.Album.Uris.HighlightImage?.Uri,
						},
						AlbumImages: {
							Uri: responseJSON.Response.Album.Uris.AlbumImages?.Uri,
						},
					},
				},
			},
		}

		/* console.log(`This ReqAlbum data is from ${URL} =>`, data) */
		return data
	} catch (error) {
		console.log('Error:', error)
		return undefined
	}
}
