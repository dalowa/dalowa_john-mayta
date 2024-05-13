import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Props {}

export const NextOrBack = ({}: Props) => {
	return (
		<>
			<div className="flex gap-[1.25rem] xl:gap-[1.5rem] text-xl text-[1.125rem] font-medium">
				<div className="flex gap-[0.5rem] justify-center items-center">
					<FaChevronLeft />
					<span className="text-xs font-normal hidden xl:flex tracking-[1px] leading-6">
						PREVIO
					</span>
				</div>
				<div className="flex gap-[0.5rem] justify-center items-center">
					<span className="text-xs font-normal hidden xl:flex tracking-[1px] leading-6">
						SIGUIENTE
					</span>
					<FaChevronRight />
				</div>
			</div>
		</>
	)
}
