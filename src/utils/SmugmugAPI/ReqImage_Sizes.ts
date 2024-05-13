import { z } from 'zod'
import { axiosWithOAuth } from './axiosWithOAuth'

const ResImage_Sizes = z.object({
	Response: z.object({
		ImageSizes: z.object({
			TinyImageUrl: z.string(),
			ThumbImageUrl: z.string(),
			SmallImageUrl: z.string(),
			MediumImageUrl: z.string(),
			LargeImageUrl: z.string(),
			XLargeImageUrl: z.string(),
			X2LargeImageUrl: z.string(),
			X3LargeImageUrl: z.string(),
			X4LargeImageUrl: z.string(),
			X5LargeImageUrl: z.string(),
			_4KImageUrl: z.string(),
			_5KImageUrl: z.string(),
			OriginalImageUrl: z.string(),
			LargestImageUrl: z.string(),
		}),
	}),
})
export type TypeResImage_Sizes = z.infer<typeof ResImage_Sizes>

const defaultUrl = '/api/v2/image/WkKwb36-0!sizes'

export async function ReqImage_Sizes(
	URL: string = defaultUrl,
): Promise<TypeResImage_Sizes | undefined> {
	/* console.log('ReqImage_Sizes has been called') */
	try {
		if (typeof URL !== 'string') throw new Error('URL must be a string')

		const response = await axiosWithOAuth(URL)
		const image = await response.data

		const data: TypeResImage_Sizes = {
			Response: {
				ImageSizes: {
					TinyImageUrl: image.Response.ImageSizes?.TinyImageUrl,
					ThumbImageUrl: image.Response.ImageSizes?.ThumbImageUrl,
					SmallImageUrl: image.Response.ImageSizes?.SmallImageUrl,
					MediumImageUrl: image.Response.ImageSizes?.MediumImageUrl,
					LargeImageUrl: image.Response.ImageSizes?.LargeImageUrl,
					XLargeImageUrl: image.Response.ImageSizes?.XLargeImageUrl,
					X2LargeImageUrl: image.Response.ImageSizes?.X2LargeImageUrl,
					X3LargeImageUrl: image.Response.ImageSizes?.X3LargeImageUrl,
					X4LargeImageUrl: image.Response.ImageSizes?.X4LargeImageUrl,
					X5LargeImageUrl: image.Response.ImageSizes?.X5LargeImageUrl,
					_4KImageUrl: image.Response.ImageSizes?.['4KImageUrl'],
					_5KImageUrl: image.Response.ImageSizes?.['5KImageUrl'],
					OriginalImageUrl: image.Response.ImageSizes?.OriginalImageUrl,
					LargestImageUrl: image.Response.ImageSizes?.LargestImageUrl,
				},
			},
		}

		/* console.log(`This ReqImage_Sizes data is from ${URL} =>`, data) */
		return data
	} catch (error) {
		console.log('Error:', error)
		return undefined
	}
}
