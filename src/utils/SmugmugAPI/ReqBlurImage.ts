import { getPlaiceholder } from 'plaiceholder'

export async function ReqBlurImage(URL: string) {
	if (URL == undefined) {
		return ''
	}
	const buffer = await fetch(URL).then(async (res) => {
		return Buffer.from(await res.arrayBuffer())
	})

	const { base64 } = await getPlaiceholder(buffer)

	return base64
}
