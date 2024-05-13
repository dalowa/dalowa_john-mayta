import { PhotoAlbum } from '@/components/PhotoAlbum/PhotoAlbum'
import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import { GenerateAlbumMetadata } from '@/utils/Generator/GenerateAlbumMetadata'
import { GenerateImagesInAlbum } from '@/utils/Generator/GenerateImagesInAlbum'
import { ReqFolder_Albums, TypeResFolder_Albums } from '@/utils/SmugmugAPI'
import { Metadata } from 'next'

export async function generateStaticParams() {
	const data = (await ReqFolder_Albums(
		`${PortfolioAndPricingEndpoints.boda_civil.requestUrl}!albums`,
	)) as TypeResFolder_Albums

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

	return (
		<>
			<PhotoAlbum originGalleryUrl={PortfolioAndPricingEndpoints.boda_civil.pathForLink} AlbumInformation={pgdt} image={searchParams.image} />
		</>
	)
}
export default PageAlbumId
