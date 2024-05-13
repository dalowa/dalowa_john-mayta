import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import { redirect } from 'next/navigation'

export default function Page() {
	return redirect(PortfolioAndPricingEndpoints.trash_the_dress_y_post_boda.pathForLink)
}
