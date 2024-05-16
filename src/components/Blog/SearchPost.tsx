import { HiSearch } from 'react-icons/hi'

interface Props {}

export const SearchPost = ({}: Props) => {
	return (
		<>
			<form className="w-full uppercase h-11 font-mono flex items-center border-[1px] py-[0.375rem] px-3 leading-normal placeholder:text-[#888] border-agatha-text-d/10 bg-agatha-button-bg-f rounded-[20px]">
				<input
					className="bg-transparent outline-none basis-[89%] text-sm placeholder:text-[0.6875rem] font-normal "
					title="Search posts"
					placeholder="Search"
				/>
				<div className="h-full w-[1px] bg-agatha-text-d/10"></div>
				<HiSearch className="basis-[10%] text-agatha-text-c text-2xl  ml-[0.5rem]" />
			</form>
		</>
	)
}
