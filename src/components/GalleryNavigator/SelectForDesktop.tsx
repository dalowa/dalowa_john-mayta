import { FilterOption } from './FilterOption'

interface Props {
	options: {
		ID: string
		path: string | undefined
		title: string
	}[]
}

export const SelectForDesktop = ({ options }: Props) => {
	return (
		<>
			<div className="w-[94%] text-xs lg:text-[0.8rem] 3xl:w-[97%] mx-auto text-agatha-text-c hidden md:flex flex-col gap-[1.5rem]">
				<h4 className=" tracking-widest">FILTROS</h4>
				<ul className="flex flex-wrap  pb-[0.25rem]">
					{options.map((e) => (
						<li className="pr-[1.5rem] py-[0.5rem]" key={e.ID}>
							<FilterOption path={e?.path as string} text={e.title.toLocaleUpperCase()} />
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
