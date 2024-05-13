import { z } from 'zod'
import { ReqFolder_Folders, ReqFolder_Highlightimage, ReqImage_Sizes } from '../SmugmugAPI'

const MainLayoutMetaData = z.object({
	Name: z.string().or(z.undefined()),
	Description: z.string().or(z.undefined()),
	HighlightImageURL: z.string().or(z.undefined()),
	Contact: z.object({
		Phone: z.string().or(z.undefined()),
		Email: z.string().or(z.undefined()),
		Facebook: z.string().or(z.undefined()),
		Instagram: z.string().or(z.undefined()),
		Twitter: z.string().optional().or(z.undefined()),
		Vimeo: z.string().optional().or(z.undefined()),
	}),
})

export type TypeMainLayoutMetaData = z.infer<typeof MainLayoutMetaData>

export async function GenerateMainLayoutMetaData(URL: string) {
	/* console.log(`
		GenerateMainLayoutMetaData has been called with URL: ${URL}
	`) */
	const GeneralInformation_Folders = await ReqFolder_Folders(URL)

	const GeneralInformationName = GeneralInformation_Folders?.Response.Folder.filter(
		(folder) => folder.Name === 'NAME',
	)[0].Description
	const GeneralInformationDescription = GeneralInformation_Folders?.Response.Folder.filter(
		(folder) => folder.Name === 'DESCRIPTION',
	)[0].Description

	const GeneralInformationContact_Folders = await ReqFolder_Folders(
		GeneralInformation_Folders?.Response.Folder.filter((folder) => folder.Name === 'CONTACT')[0]
			.Uris.Folders.Uri,
	)

	const ContactPhone = GeneralInformationContact_Folders?.Response.Folder.filter(
		(folder) => folder.Name === 'PHONE',
	)[0]?.Description
	const ContactEmail = GeneralInformationContact_Folders?.Response.Folder.filter(
		(folder) => folder.Name === 'EMAIL',
	)[0]?.Description
	const ContactFacebook = GeneralInformationContact_Folders?.Response.Folder.filter(
		(folder) => folder.Name === 'FACEBOOK-LINK',
	)[0]?.Description
	const ContactInstagram = GeneralInformationContact_Folders?.Response.Folder.filter(
		(folder) => folder.Name === 'INSTAGRAM-LINK',
	)[0]?.Description
	const ContactTwitter = GeneralInformationContact_Folders?.Response.Folder.filter(
		(folder) => folder.Name === 'TWITTER-LINK',
	)[0]?.Description
	const ContactVimeo = GeneralInformationContact_Folders?.Response.Folder.filter(
		(folder) => folder.Name === 'VIMEO-LINK',
	)[0]?.Description

	const MainImageLink = GeneralInformation_Folders?.Response.Folder.filter(
		(folder) => folder.Name === 'MAIN-IMAGE',
	)[0]?.Uris.HighlightImage.Uri as string

	const ImageData = await ReqFolder_Highlightimage(MainImageLink)

	const usefulImageLink = await ReqImage_Sizes(ImageData.Response.Image.Uris.ImageSizes.Uri)

	const data: TypeMainLayoutMetaData = {
		Name: GeneralInformationName,
		Description: GeneralInformationDescription,
		HighlightImageURL: usefulImageLink?.Response.ImageSizes.X2LargeImageUrl,
		Contact: {
			Phone: ContactPhone,
			Email: ContactEmail,
			Facebook: ContactFacebook,
			Instagram: ContactInstagram,
			Twitter: ContactTwitter,
			Vimeo: ContactVimeo,
		},
	}

	return data
}
