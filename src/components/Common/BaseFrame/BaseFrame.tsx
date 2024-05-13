interface Props {
	children: React.ReactNode
}

const BaseFrame = ({ children }: Props) => {
	return (
		<>
			<main className="agatha-home-frame-height mt-[4.5rem] w-screen bg-agatha-gray">
				{children}
			</main>
		</>
	)
}
export default BaseFrame
