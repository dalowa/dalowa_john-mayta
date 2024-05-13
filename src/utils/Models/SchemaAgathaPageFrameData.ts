import { z } from 'zod'

const SchemaAgathaPageFrameData = z.object({
	backgroundImage: z.string(),
	blurBackgroundImage: z.string(),
	title: z.string(),
	subTitle: z.string().optional(),
	sectionConfig: z
		.object({
			maxWidth: z.string().optional(),
		})
		.optional(),
})

export type TypeAgathaPageFrameData = z.infer<typeof SchemaAgathaPageFrameData>
