import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import { redirect } from 'next/navigation'

export default function Page() {
	return redirect(PortfolioAndPricingEndpoints.boudoir_y_nude_art.pathForLink)
}
