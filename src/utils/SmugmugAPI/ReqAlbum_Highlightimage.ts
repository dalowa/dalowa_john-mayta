import { z } from 'zod'
import { axiosWithOAuth } from './axiosWithOAuth'

const ResAlbum_Highlightimage = z.object({
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

export type TypeResAlbum_Highlightimage = z.infer<typeof ResAlbum_Highlightimage>

const defaultLink = '/api/v2/highlight/node/Dw4VVM'

export const ReqAlbum_Highlightimage = async (
	URL: string = defaultLink,
): Promise<TypeResAlbum_Highlightimage> => {
	const res = await axiosWithOAuth(URL)
	/* if(res === undefined) return undefined */

	const resData: TypeResAlbum_Highlightimage = res?.data

	/* const data: TypeResAlbum_Highlightimage = ResAlbum_Highlightimage.parse(resData) */

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

	/* console.log(`ReqAlbum_Highlight has been called with this URL: ${URL}`, data) */

	return data
}
