const firstPost = {
	title: 'ONE DAY FASHION SHOOT',
	date: '29 JAN 2016',
	byWho: 'HENRY HARRISON',
	label: '#BLACK & WHITE',
	simpleText:
		'Curabitur eu congue erat. Donec posuere eu est eget egestas. Pellentesque porttitor blandit massa, nec luctus ligula facilisis sodales. Nam eu felis a ex efficitur faucibus in mollis arcu. Sed venenatis urna in lorem consequat rutrum. Nullam imperdiet arcu nec erat maximus faucibus...',
	redirectLink: '',
	showcaseType: 'image',
	srcUrls: 'https://demo.themetorium.net/html/agatha/dark/assets/img/album-single/big/img-1.jpg',
}

const secondPost = {
	title: 'THE HISTORY OF PHOTOGRAPHY',
	date: '12 JAN 2016',
	byWho: 'ANNA VERIK',
	label: '#OUTDOORS',
	simpleText:
		'Omnesque apeirian prodesset per ad, est ad molestie epicurei disputando. Mei assum impetus pertinacia ea, qui id congue timeam discere. Vocent iracundia consetetur duo te. Facer summo temporibus cu qui. Utinam fastidii disputando no usu, agam assum expetenda quo cut...',
	redirectLink: '',
	showcaseType: 'carousel',
	srcUrls: [
		'https://demo.themetorium.net/html/agatha/dark/assets/img/album-single/big/img-9.jpg',
		'https://demo.themetorium.net/html/agatha/dark/assets/img/album-single/big/img-6.jpg',
		'https://demo.themetorium.net/html/agatha/dark/assets/img/album-single/big/img-2.jpg',
	],
}

const thirdPost = {
	title: 'TRAVEL PHOTOGRAPHY',
	date: '08 JAN 2016',
	byWho: 'JOSEPH REEVES',
	label: '#PORTRAITS',
	simpleText:
		'Ad nec legimus mediocritatem. Nihil semper graecis ea sea, quo enim oporteat invenire ea. Vero corpora voluptua an pro, no accusam explicari vim, te ridens nemore periculis vis. Ea ipsum neglegentur cum. Ex sit consulatu imperdiet ullamcorper, nonumy admodum tacimates ius exes...',
	redirectLink: '',
	showcaseType: 'youtube',
	srcUrls: 'https://www.youtube.com/embed/SXRteMSSZ14?si=bE1JVPGrJHFua1jV',
}

const fourthPost = {
	title: 'NIGHT PHOTOGRAPHY',
	date: '03 JAN 2016',
	byWho: 'JOHN DOE',
	label: '#FASHION',
	simpleText:
		'Viris semper epicuri et mel, in unum definiebas pro, id pri nihil elaboraret. Cu saperet graecis mediocritatem qui, vix aperiam explicari ad, sea ne ornatus pertinax. Ei mea dolor legimus ocurreret, volutpat assueverit ne est, nam putent tamquam eruditi ei. Purto eros civibus id eum, ullum tamquam...',
	redirectLink: '',
	showcaseType: 'vimeo',
	srcUrls: 'https://player.vimeo.com/video/20047720',
}

const fivePost = {
	title: 'THE TRUTH ABOUT PHOTOGRAPHY',
	date: '01 JAN 2016',
	byWho: 'JOHN SMITH',
	label: '#FASHION',
	simpleText:
		'Has cu brute vocibus lucilius, ne dignissim ullamcorper nec. Nullam omnesque ne eum, integre deleniti eu eum, et his equidem assueverit scribentur. In hinc mutat perpetua sea. No mel veniam timeam, nulla accusata et his, quis senserit te mei. Magna corpora mediocrem duo ea, error sanctus...',
	redirectLink: '',
	showcaseType: 'image',
	srcUrls: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/big/img-5.jpg',
}

export const postList = [firstPost, secondPost, thirdPost, fourthPost, fivePost]

export const categorias = [
	{ name: 'fashion', amount: 26 },
	{ name: 'portraits', amount: 54 },
	{ name: 'black & white', amount: 17 },
	{ name: 'outdoor', amount: 19 },
	{ name: 'varia', amount: 67 },
]

export const recentpostsList = [
	{
		imgUrl:
			'https://photos.smugmug.com/SERVICIOS/BODAS/FLAVIA-RENATO/i-bdswGzC/6/DzWLg58SJXdMDntmmqZMkZjbd8CKQ9z6jj8BdShRT/X2/DSC_3328-X2.jpg',
		title: 'ONE DAY FASHION SHOOT',
		author: 'HENRY HARRISON',
		date: new Date('29 JAN 2016'),
		path: '',
	},
	{
		imgUrl:
			'https://photos.smugmug.com/SERVICIOS/BODAS/FLAVIA-RENATO/i-bdswGzC/6/DzWLg58SJXdMDntmmqZMkZjbd8CKQ9z6jj8BdShRT/X2/DSC_3328-X2.jpg',
		title: 'THE HISTORY OF PHOTOGRAPHY',
		author: 'ANNA VERIK',
		date: new Date('12 JAN 2016'),
		path: '',
	},
	{
		imgUrl:
			'https://photos.smugmug.com/SERVICIOS/BODAS/FLAVIA-RENATO/i-bdswGzC/6/DzWLg58SJXdMDntmmqZMkZjbd8CKQ9z6jj8BdShRT/X2/DSC_3328-X2.jpg',
		title: 'TRAVEL PHOTOGRAPHY',
		author: 'JOSEPH REEVES',
		date: new Date('08 JAN 2016'),
		path: '',
	},
	{
		imgUrl:
			'https://photos.smugmug.com/SERVICIOS/BODAS/FLAVIA-RENATO/i-bdswGzC/6/DzWLg58SJXdMDntmmqZMkZjbd8CKQ9z6jj8BdShRT/X2/DSC_3328-X2.jpg',
		title: 'NIGHT PHOTOGRAPHY',
		author: 'JOHN DOE',
		date: new Date('03 JAN 2016'),
		path: '',
	},
]
