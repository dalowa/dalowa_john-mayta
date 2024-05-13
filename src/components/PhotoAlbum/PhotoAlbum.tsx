import { divideArrayBetweenX, x } from '@/utils/Functions/divideArrayBetweenX'
import { AgathaPageFrame } from '../Common/AgathaPageFrame/AgathaPageFrame'
import { TypeGenerateImagesInAlbum } from '@/utils/Generator/GenerateImagesInAlbum'
import { TypeAgathaPageFrameData } from '@/utils/Models/SchemaAgathaPageFrameData'
import { ShareIconForPageGallery } from './ShareIconForPageGallery'
import { FullScreenPhoto } from './FullScreenPhoto'
import AgathaModalShare from '../Common/ModalShare/AgathaModalShare'
import { Photos } from './Photos'
import { PhotoAlbumPageFrame } from './PhotoAlbumPageFrame'
import { TypePhotoAlbumPageFrameData } from '@/utils/Models/SchemaPhotoAlbumPageFrameData'
import { JohnMaytaProfilePhotoLink } from '@/data/website-information'
import { BackToGalleryNavigator } from './BackToGalleryNavigator'
import { DownloadAlbumPhotos } from './DownloadAlbumPhotos'
import { NextOrBack } from './NextOrBack'

interface Props {
	AlbumInformation: TypeGenerateImagesInAlbum
	image?: string | undefined
	originGalleryUrl: string
}

export const PhotoAlbum = async ({ AlbumInformation, image,originGalleryUrl }: Props) => {
	/* const pgdt = await GenerateImagesInAlbum(AlbumId) */

	const pgdt = AlbumInformation

	const agathaData: TypePhotoAlbumPageFrameData = {
		backgroundImage: pgdt.HighlightImage.largeScreen,
		blurBackgroundImage: pgdt.HighlightImage.blurURL,
		title: pgdt.Title,
		description: 'Vivamus sed ex hendrerit, gravida neque a, ullamcorper lectus. Aenean lobortis non nisl non facilisis. Quisque pretium posuere sem, at ultricies quam posuere sed. Maecenas accumsan mauris in massa dignissim dapibus. Nullam a nisl quis arcu laoreet atre.',
		amountOfPhotos: pgdt.images.length.toString(),
		byWho: "John Mayta",
		whoPhotoProfileUrl: JohnMaytaProfilePhotoLink,
	}

	const imagenes_array = (await divideArrayBetweenX(
		pgdt.images.map((e) => ({
			url: e.mediumScreen,
			blurUrl: e.blurURL,
			imageId: e.id,
		})),
		2,
	)) as x[][]

	const OneColumn = (await divideArrayBetweenX(
		pgdt.images.map((e) => ({
			url: e._5xLargeScreen || e._4xLargeScreen || e.extraLargeScreen || e.largeScreen,
			blurUrl: e.blurURL,
			imageId: e.id,
		})),
		1,
	)) as x[][]

	const TwoColumn = (await divideArrayBetweenX(
		pgdt.images.map((e) => ({
			url: e.mediumScreen || e.smallScreen || e.mediumScreen,
			blurUrl: e.blurURL,
			imageId: e.id,
		})),
		2,
	)) as x[][]

	const ThreeColumn = (await divideArrayBetweenX(
		pgdt.images.map((e) => ({
			url: e.mediumScreen || e.smallScreen || e.mediumScreen,
			blurUrl: e.blurURL,
			imageId: e.id,
		})),
		3,
	)) as x[][]

	const FourColumn = (await divideArrayBetweenX(
		pgdt.images.map((e) => ({
			url: e.largeScreen || e.smallScreen || e.mediumScreen,
			blurUrl: e.blurURL,
			imageId: e.id,
		})),
		4,
	)) as x[][]

	const FiveColumn = (await divideArrayBetweenX(
		pgdt.images.map((e) => ({
			url: e.largeScreen || e.smallScreen || e.mediumScreen,
			blurUrl: e.blurURL,
			imageId: e.id,
		})),
		5,
	)) as x[][]

	const IMAGES_HD = OneColumn[0].map((e) => ({
		blurUrl: e.blurUrl || '',
		imageHD: e.url,
	}))
	return (
		<>
			<PhotoAlbumPageFrame data={agathaData}>
				<div className="py-[1.25rem] md:py-[1.5rem] flex flex-col items-center lg:py-[2.25rem] lg:px-[1rem] xl:px-[0.5rem] xl:py-[2.5rem]">
					<div className="font-mono text-agatha-text-c gap-2 text-[100%] w-[90%] sm:w-[93%] md:w-[95%] xl:w-[94%] 2xl:w-[96.75%] 3xl:w-[97%] flex items-center justify-end mt-[0.25rem] mb-[2.75rem] px-[0.25rem]">
						<div className='basis-[50%] flex items-center justify-start'>
							<BackToGalleryNavigator originUrl={originGalleryUrl} />
						</div>
						<div className='basis-[50%] gap-[1.5rem] flex items-center justify-end'>
							<NextOrBack />
							<ShareIconForPageGallery arrayImages={IMAGES_HD} currentImage={image || ''} />
							<DownloadAlbumPhotos />
						</div>
						
					</div>

					<Photos
						oneColumn={OneColumn}
						twoColumn={TwoColumn}
						threeColumn={ThreeColumn}
						fourColumn={FourColumn}
						fiveColumn={FiveColumn}
					/>
				</div>
			</PhotoAlbumPageFrame>
			<FullScreenPhoto />
			<AgathaModalShare isSpanish />
		</>
	)
}
