import { z } from 'zod'

const SchemaMenuPrimaryStaticOptions = z.array(
	z.object({
		Name: z.string(),
		Path: z.string().or(z.undefined()),
		ID: z.string(),
	}),
)

export type TypeMenuPrimaryStaticOptions = z.infer<typeof SchemaMenuPrimaryStaticOptions>

const MenuPrimaryStaticOptions: TypeMenuPrimaryStaticOptions = [
	{
		Name: 'PORTAFOLIO & PRECIOS',
		Path: undefined,
		ID: '001',
	},
	{
		Name: 'SOBRE MI',
		Path: '/es/sobre-mi',
		ID: '002',
	},
	{
		Name: 'HABLEMOS',
		Path: '/es/hablemos',
		ID: '003',
	},
	{
		Name: 'BLOG',
		Path: '/es/blog',
		ID: '004',
	},
]

export default MenuPrimaryStaticOptions
