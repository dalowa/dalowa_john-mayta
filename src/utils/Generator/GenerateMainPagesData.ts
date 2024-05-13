import { z } from 'zod'
import {
	ReqFolder_Folders,
	ReqFolder_Highlightimage,
	ReqImage_Sizes,
	TypeResFolder_Folders,
} from '../SmugmugAPI'

const MainPagesData = z.array(
	z.object({
		Name: z.string(),
		HighlightImageURL: z.string(),
		Description: z.string(),
		UrlName: z.string(),
	}),
)

export type TypeMainPagesData = z.infer<typeof MainPagesData>

export async function GenerateMainPagesData(
	URL: string = '/api/v2/folder/user/seven/FAKE-OWNER-TESTING/ES/PAGES!folders',
) {
	const GeneralInformation_Folders = (await ReqFolder_Folders(URL)) as TypeResFolder_Folders

	const data: TypeMainPagesData = GeneralInformation_Folders?.Response.Folder.map((folder) => {
		return {
			Name: folder.Name,
			Description: folder.Description,
			HighlightImageURL: folder.Uris.HighlightImage.Uri,
			UrlName: folder.UrlName,
		}
	})

	const highlightPromises = data.map(async (page) => {
		return ReqFolder_Highlightimage(page.HighlightImageURL)
	})

	const highlights = await Promise.all(highlightPromises)

	// Ahora puedes usar 'highlights' que es un array con los resultados de todas las promesas.
	// Por ejemplo, podrías añadir los resultados a tu objeto 'data':

	const especialSizePromises = highlights.map(async (e) => {
		return ReqImage_Sizes(e.Response.Image.Uris.ImageSizes.Uri)
	})

	const higlightSizes = await Promise.all(especialSizePromises)
	data.forEach((page, index) => {
		page.HighlightImageURL = higlightSizes[index]?.Response.ImageSizes.X2LargeImageUrl as string
	})

	return data
}
