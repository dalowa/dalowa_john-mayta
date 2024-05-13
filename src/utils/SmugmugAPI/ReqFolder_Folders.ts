import { z } from 'zod'
import { axiosWithOAuth } from './axiosWithOAuth'

const ResFolder_Folders = z.object({
	Response: z.object({
		Folder: z.array(
			z.object({
				Name: z.string(),
				UrlName: z.string(),
				Description: z.string(),
				NodeID: z.string(),
				Uris: z.object({
					HighlightImage: z.object({
						Uri: z.string(),
					}),
					Folders: z.object({
						Uri: z.string(),
					}),
					FolderAlbums: z.object({
						Uri: z.string(),
					}),
				}),
			}),
		),
	}),
})
export type TypeResFolder_Folders = z.infer<typeof ResFolder_Folders>

const defaultUrl =
	'/api/v2/folder/user/seven/FAKE-OWNER-TESTING/ES/PAGES/PORTAFOLIO-PRECIOS!folders'

export async function ReqFolder_Folders(
	URL: string = defaultUrl,
): Promise<TypeResFolder_Folders | undefined> {
	/* console.log('ReqFolder_Folders has been called') */
	try {
		if (typeof URL !== 'string') throw new Error('URL must be a string')

		const response = await axiosWithOAuth(URL)
		const responseJSON = await response?.data

		const data: TypeResFolder_Folders = {
			Response: {
				Folder: responseJSON.Response.Folder.reverse().map((folder: any) => {
					return {
						Name: folder.Name,
						UrlName: folder.UrlName,
						Description: folder.Description,
						NodeID: folder.NodeID,
						Uris: {
							HighlightImage: {
								Uri: folder.Uris.HighlightImage?.Uri,
							},
							Folders: {
								Uri: folder.Uris.Folders?.Uri,
							},
							FolderAlbums: {
								Uri: folder.Uris.FolderAlbums?.Uri,
							},
						},
					}
				}), // Add a comma here
			},
		}

		/* console.log(`This ReqFolder_Folders data is from ${URL} =>`, data) */
		return data
	} catch (error) {
		console.log('Error:', error)
		return undefined
	}
}
