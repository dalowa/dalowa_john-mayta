import { PhotoAlbum } from '@/components/PhotoAlbum/PhotoAlbum'
import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import { GenerateAlbumMetadata } from '@/utils/Generator/GenerateAlbumMetadata'
import { GenerateImagesInAlbum, TypeGenerateImagesInAlbum } from '@/utils/Generator/GenerateImagesInAlbum'
import { ReqFolder_Albums, TypeResFolder_Albums } from '@/utils/SmugmugAPI'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const data = (await ReqFolder_Albums(
		`${PortfolioAndPricingEndpoints.fotografia_de_bodas.requestUrl}!albums`,
	)) as TypeResFolder_Albums

	console.log('STATIC', data)
	const r = data.Response.Album.map((element) => ({
		albumId: element.AlbumKey,
	}))

	return r
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const data = await GenerateAlbumMetadata(params.albumId)

	return data
}

interface Props {
	params: { albumId: string }
	searchParams: {
		image?: string
	}
}

export const dynamic = 'force-static'

const PageAlbumId = async ({ params, searchParams }: Props) => {
	const pgdt = await GenerateImagesInAlbum(params.albumId)
	if(pgdt === null || pgdt === undefined) return notFound()

	return (
		<>
			<PhotoAlbum originGalleryUrl={PortfolioAndPricingEndpoints.fotografia_de_bodas.pathForLink} AlbumInformation={pgdt as TypeGenerateImagesInAlbum} image={searchParams.image} />
		</>
	)
}
export default PageAlbumId
