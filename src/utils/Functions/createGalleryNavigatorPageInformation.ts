import { GenerateAlbumsInFolder, TypeGenerateAlbumsInFolder } from '../Generator'

export const createGalleryNavigatorPageInformation = async (pageData: {
	requestUrl: string
	pathForLink: string
}) => {
	const galleryNavigatorPageInformation: TypeGenerateAlbumsInFolder | undefined = await GenerateAlbumsInFolder(
		pageData.requestUrl,
	)
	if(galleryNavigatorPageInformation === undefined) return undefined
	
	const newAlbums = galleryNavigatorPageInformation.Albums.map((obj) => ({
		...obj,
		PathForLink: `${pageData.pathForLink}/album/${obj.id}`,
	}))

	galleryNavigatorPageInformation.Albums = newAlbums

	return galleryNavigatorPageInformation
}
