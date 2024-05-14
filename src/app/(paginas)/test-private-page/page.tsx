import { Test } from '@/components/Test'

import BaseFrame from '@/components/Common/BaseFrame/BaseFrame'

interface Props {}

const TestPrivatePage = async ({}: Props) => {
	return (
		<>
			<BaseFrame>
				<>
					<Test />
				</>
			</BaseFrame>
		</>
	)
}
export default TestPrivatePage
