import { z } from 'zod'
import { axiosWithOAuth } from './axiosWithOAuth'

const ResFolder_Albums = z.object({
	Response: z.object({
		Album: z.array(
			z.object({
				Name: z.string(),
				UrlName: z.string(),
				Description: z.string(),
				NodeID: z.string(),
				AlbumKey: z.string(),
				Uris: z.object({
					HighlightImage: z.object({
						Uri: z.string(),
					}),
					AlbumImages: z.object({
						Uri: z.string(),
					}),
				}),
			}),
		),
	}),
})
export type TypeResFolder_Albums = z.infer<typeof ResFolder_Albums>

export async function ReqFolder_Albums(URL: string): Promise<TypeResFolder_Albums | undefined> {
	/* console.log('ReqFolder_Albums has been called') */
	try {
		if (typeof URL !== 'string') throw new Error('URL must be a string')

		const response = await axiosWithOAuth(URL)
		const responseJSON: TypeResFolder_Albums = await response.data

		const data: TypeResFolder_Albums = {
			Response: {
				Album: responseJSON.Response.Album.map((folder) => {
					return {
						Name: folder.Name,
						UrlName: folder.UrlName,
						Description: folder.Description,
						NodeID: folder.NodeID,
						AlbumKey: folder.AlbumKey,
						Uris: {
							HighlightImage: {
								Uri: folder.Uris.HighlightImage?.Uri,
							},
							AlbumImages: {
								Uri: folder.Uris.AlbumImages?.Uri,
							},
						},
					}
				}), // Add a comma here
			},
		}

		/* console.log(`This ReqFolder_Albums data is from ${URL} =>`, data) */
		return data
	} catch (error) {
		console.log('Error:', error)
		return undefined
	}
}
