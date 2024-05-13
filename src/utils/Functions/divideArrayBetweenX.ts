export interface x {
	url: string
	blurUrl: string | undefined
	imageId: string
}

export const divideArrayBetweenX = (arr: x[], xNumber: number) => {
	let result = []

	for (let i = 0; i < xNumber; i++) {
		let subArray = arr.filter((_, index) => index % xNumber === i)
		result.push(subArray)
	}
	return result
}
