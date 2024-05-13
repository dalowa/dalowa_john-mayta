import { z } from 'zod'

const SchemaFooterData = z.object({
	CopyrightText: z.string(),
	Links: z.object({
		Facebook: z.string(),
		Instagram: z.string(),
		Vimeo: z.string(),
	}),
})

export type TypeFooterData = z.infer<typeof SchemaFooterData>

const defaultURL = ''

export async function GenerateFooterData() {}
