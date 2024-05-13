import { z } from 'zod'
import { axiosWithOAuth } from './axiosWithOAuth'

const ResFolder_Highlightimage = z.object({
	Response: z.object({
		Image: z.object({
			ImageKey: z.string(),
			ArchivedUri: z.string(),
			Uris: z.object({
				ImageSizes: z.object({
					Uri: z.string(),
				}),
			}),
		}),
	}),
})

export type TypeResFolder_Highlightimage = z.infer<typeof ResFolder_Highlightimage>

const defaultLink =
	'/api/v2/folder/user/seven/FAKE-OWNER-TESTING/ES/GENERAL-INFORMATION/MAIN-IMAGE!highlightimage'

export const ReqFolder_Highlightimage = async (
	URL: string = defaultLink,
): Promise<TypeResFolder_Highlightimage> => {
	const res = await axiosWithOAuth(URL)
	const resData: TypeResFolder_Highlightimage = res.data

	/* const data: TypeResFolder_Highlightimage = ResFolder_Highlightimage.parse(resData) */
	const data = {
		Response: {
			Image: {
				ImageKey: resData.Response.Image?.ImageKey,
				ArchivedUri: resData.Response.Image?.ArchivedUri,
				Uris: {
					ImageSizes: {
						Uri: resData.Response.Image?.Uris.ImageSizes.Uri,
					},
				},
			},
		},
	}
	/* console.log(`ReqFolder_Highlight has been called with this URL: ${URL}`, data) */
	return data
}
