import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import { redirect } from 'next/navigation'

export default function Page() {
	return redirect(PortfolioAndPricingEndpoints.pre_boda_y_compromiso.pathForLink)
}
