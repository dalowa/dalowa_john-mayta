import { z } from 'zod'
import { ReqBlurImage, ReqImage_Sizes } from '../SmugmugAPI'

const SchemaImageData = z.object({
	bgSmall: z.object({
		url: z.string(),
		urlBlur: z.string(),
	}),
	bgMedium: z.object({
		url: z.string(),
		urlBlur: z.string(),
	}),
	bgLarge: z.object({
		url: z.string(),
		urlBlur: z.string(),
	}),
	bg4K: z.object({
		url: z.string(),
		urlBlur: z.string(),
	}),
	bg5K: z.object({
		url: z.string(),
		urlBlur: z.string(),
	}),
})

export type TypeImageData = z.infer<typeof SchemaImageData>

const defaultURL = '/api/v2/image/WkKwb36-0!sizes'

export const GenerateImageData = async (URL: string = defaultURL) => {
	const d = await ReqImage_Sizes(URL)

	const bgSmallURL = d?.Response.ImageSizes.SmallImageUrl
	const bgMediumURL = d?.Response.ImageSizes.MediumImageUrl
	const bgLargeURL = d?.Response.ImageSizes.LargeImageUrl
	const bg4KURL = d?.Response.ImageSizes._4KImageUrl
	const bg5KURL = d?.Response.ImageSizes._5KImageUrl

	const bgURLs = [bgSmallURL, bgMediumURL, bgLargeURL, bg4KURL, bg5KURL]

	const bgBlurURLs = bgURLs.map((e) => ReqBlurImage(e as string))

	const bgBlurUrlsSolved = await Promise.all(bgBlurURLs)

	const complete: TypeImageData = {
		bgSmall: {
			url: bgSmallURL as string,
			urlBlur: bgBlurUrlsSolved[0] as string,
		},
		bgMedium: {
			url: bgMediumURL as string,
			urlBlur: bgBlurUrlsSolved[1] as string,
		},
		bgLarge: {
			url: bgLargeURL as string,
			urlBlur: bgBlurUrlsSolved[2] as string,
		},
		bg4K: {
			url: bg4KURL as string,
			urlBlur: bgBlurUrlsSolved[3] as string,
		},
		bg5K: {
			url: bg5KURL as string,
			urlBlur: bgBlurUrlsSolved[4] as string,
		},
	}

	return complete
}
