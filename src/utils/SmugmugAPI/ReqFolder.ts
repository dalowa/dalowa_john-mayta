import { z } from 'zod'
import { axiosWithOAuth } from './axiosWithOAuth'

const ResFolder = z.object({
	Response: z.object({
		Folder: z.object({
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
	}),
})
export type TypeResFolder = z.infer<typeof ResFolder>

const defaultUrl =
	'/api/v2/folder/user/seven/FAKE-OWNER-TESTING/ES/PAGES/PORTAFOLIO-PRECIOS/FOTOGRAFIA-DE-BODAS'

export async function ReqFolder(URL: string = defaultUrl): Promise<TypeResFolder | undefined> {
	/* console.log('ReqFolder has been called') */
	try {
		if (typeof URL !== 'string') throw new Error('URL must be a string')

		const response = await axiosWithOAuth(URL)
		const responseJSON = await response?.data

		const data: TypeResFolder = {
			Response: {
				Folder: {
					Name: responseJSON.Response.Folder.Name,
					UrlName: responseJSON.Response.Folder.UrlName,
					Description: responseJSON.Response.Folder.Description,
					NodeID: responseJSON.Response.Folder.NodeID,
					Uris: {
						HighlightImage: {
							Uri: responseJSON.Response.Folder.Uris.HighlightImage?.Uri,
						},
						Folders: {
							Uri: responseJSON.Response.Folder.Uris.Folders?.Uri,
						},
						FolderAlbums: {
							Uri: responseJSON.Response.Folder.Uris.FolderAlbums?.Uri,
						},
					},
				},
			},
		}

		/* console.log(`This ReqFolder data is from ${URL} =>`, data) */
		return data
	} catch (error) {
		console.log('Error:', error)
		throw Error
	}
}
