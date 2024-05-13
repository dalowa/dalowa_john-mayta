import { z } from 'zod'

const SchemaMenuSecondaryStaticOptions = z.array(
	z.object({
		Name: z.string(),
		Path: z.string().or(z.undefined()),
		ID: z.string(),
	}),
)

export type TypeMenuSecondaryStaticOptions = z.infer<typeof SchemaMenuSecondaryStaticOptions>

const MenuSecondaryStaticOptions: TypeMenuSecondaryStaticOptions = [
	{
		Name: 'FOTOGRAFÍA DE BODAS',
		Path: '/es/fotografia-de-bodas',
		ID: '001',
	},
	{
		Name: 'BOUDOIR Y NUDE ART',
		Path: '/es/boudoir-y-nude-art',
		ID: '002',
	},
	{
		Name: 'BODA CIVIL',
		Path: '/es/boda-civil',
		ID: '003',
	},
	{
		Name: 'TRASH THE DRESS Y POST BODA',
		Path: '/es/trash-the-dress-y-post-boda',
		ID: '004',
	},
	{
		Name: 'PRE BODA Y COMPROMISO',
		Path: '/es/pre-boda-y-compromiso',
		ID: '005',
	},
]

export default MenuSecondaryStaticOptions
