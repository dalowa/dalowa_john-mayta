import Link from 'next/link'

interface Props {}

const ButtonPlansAndPrices = ({}: Props) => {
	return (
		<>
			<Link
				className=" py-[1rem] border border-agatha-text-c/50  px-[1rem] 2xl:py-[1rem] 2xl:text-base 3xl:text-2xl 2xl:px-[1rem] inline rounded-lg bg-agatha-gray text-agatha-text-c font-normal text-[0.75rem] text-sm"
				href={'/es/formulario'}
			>
				PLANES / PRECIOS
			</Link>
		</>
	)
}

export default ButtonPlansAndPrices
