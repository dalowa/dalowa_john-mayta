import { PortfolioAndPricingEndpoints } from '@/data/website-information'
import { redirect } from 'next/navigation'

export default function Page() {
	return redirect(PortfolioAndPricingEndpoints.fotografia_de_bodas.pathForLink)
}
