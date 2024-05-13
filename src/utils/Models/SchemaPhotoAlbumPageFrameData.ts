import { z } from 'zod'

const SchemaPhotoAlbumPageFrameData = z.object({
	backgroundImage: z.string(),
	blurBackgroundImage: z.string(),
	title: z.string(),
	description: z.string().optional(),
   amountOfPhotos: z.string(),
   byWho: z.string(),
	whoPhotoProfileUrl: z.string().optional(),
})

export type TypePhotoAlbumPageFrameData = z.infer<typeof SchemaPhotoAlbumPageFrameData>