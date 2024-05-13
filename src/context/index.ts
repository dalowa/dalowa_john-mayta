import { create } from 'zustand'

interface websiteState {
	isOpenMainMenu: boolean
	isOpenSecondMenu: boolean
	isOpenShareModal: boolean
	currentShareModalLink: string
	SGcurrentModalLink: string
	currentScreenImage: string | undefined
	pageImages: {
		blurUrl: string
		imageHD: string
	}[]
	bears: number
	increase: (by: number) => void
	setPageImages: (
		imgs: {
			blurUrl: string
			imageHD: string
		}[],
	) => void
	changeIsOpenMainMenu: (bo: boolean) => void
	changeIsOpenSecondMenu: (bo: boolean) => void
	changeIsOpenShareModal: (to: boolean) => void
	setCurrentShareModalLink: (newlink: string) => void
	setCurrentScreenImageIndex: (url: string) => void
	setSGCurrentModalLink: (url: string) => void
}

export const useZustandStore = create<websiteState>()((set) => ({
	bears: 0,
	isOpenMainMenu: false,
	isOpenSecondMenu: false,
	pageImages: [],
	currentScreenImage: undefined,
	SGcurrentModalLink: '',
	isOpenShareModal: false,
	currentShareModalLink: 'david-urbano.com',
	setPageImages: (imgs) =>
		set((state) => ({
			pageImages: imgs,
		})),
	increase: (by) =>
		set((state) => ({
			bears: state.bears + by,
		})),
	changeIsOpenMainMenu: (bo) =>
		set((state) => ({
			isOpenMainMenu: bo,
		})),
	changeIsOpenSecondMenu: (bo) =>
		set((state) => ({
			isOpenSecondMenu: bo,
		})),
	setCurrentScreenImageIndex: (url) =>
		set((state) => ({
			currentScreenImage: url,
		})),
	changeIsOpenShareModal: (to) =>
		set((state) => ({
			isOpenShareModal: to,
		})),
	setCurrentShareModalLink: (newlink) =>
		set((state) => ({
			currentShareModalLink: newlink,
		})),
	setSGCurrentModalLink: (newlink) =>
		set((state) => ({
			currentShareModalLink: newlink,
		})),
}))
