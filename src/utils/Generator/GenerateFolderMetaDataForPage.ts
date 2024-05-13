import { z } from 'zod'
import { ReqFolder, ReqFolder_Highlightimage, ReqImage_Sizes, axiosWithOAuth } from '../SmugmugAPI'
import { Metadata } from 'next'

const SchemaFolderBasicMetaDataForPage = z.object({
	Title: z.string(),
	description: z.string(),
	imageURL: z.string(),
})

type TypeFolderBasicMetaDataForPage = z.infer<typeof SchemaFolderBasicMetaDataForPage>

export const GenerateFolderMetaDataForPage = async (folderURL: string): Promise<Metadata> => {
	const folderData = await ReqFolder(folderURL)

	const folderHighlightImageData = await ReqFolder_Highlightimage(
		folderData?.Response.Folder.Uris.HighlightImage.Uri,
	)

	const mediumImageURL = (
		await ReqImage_Sizes(folderHighlightImageData?.Response.Image.Uris.ImageSizes.Uri)
	)?.Response.ImageSizes.MediumImageUrl as string

	const completeData: TypeFolderBasicMetaDataForPage = {
		Title: folderData?.Response.Folder.Name || 'John Mayta Web',
		description: folderData?.Response.Folder.Description || 'Fotografia para ti y tu familia',
		imageURL:
			mediumImageURL ||
			'https://photos.smugmug.com/SERVICIOS/BODAS/FLAVIA-RENATO/i-bdswGzC/6/FgSZkWqPPzL8hpV97XJzzPhc26gqzHPQpgK8cT2Kh/M/DSC_3328-M.jpg',
	}

	const metaData: Metadata = {
		title: completeData.Title,
		description: completeData.description,
		openGraph: {
			images: completeData.imageURL,
			title: completeData.Title,
			description: completeData.description,
		},
	}
	return metaData
}
