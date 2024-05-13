import Image from 'next/image'
import logoJohnmayta from '../../../public/logo-johnmayta.svg'
import Link from 'next/link'
import { NavigationDesktop } from './NavigationDesktop'
import { IconBurger } from './IconBurger'
import { NavigationMobile } from './NavigationMobile'
import { MainPageEndPoints, PortfolioAndPricingEndpoints } from '@/data/website-information'

export const Header = async () => {
	return (
		<>
			<header
				className={` top-0 h-[4.5rem] fixed w-screen z-[100] bg-agatha-black text-agatha-text-c flex transition-transform duration-1000 font-mono px-4 lg:px-[2.75rem] justify-between`}
			>
				{/* Logo */}
				<Link
					className="flex flex-col justify-center text-white font-semibold"
					href={'/inicio'}
				>
					<Image src={logoJohnmayta} alt={'seven'} width={100} height={0o0} />
				</Link>

				{/* Main Menu Options for Tablet or Desktop*/}

				<NavigationDesktop
					mainMenuOptions={Object.values(MainPageEndPoints)}
					secondMenuOptions={Object.values(PortfolioAndPricingEndpoints)}
				/>

				{/* Icons Container */}
				<div className="flex justify-center md:hidden items-center">
					{/* Main Menu */}
					<IconBurger />
				</div>
			</header>
			{/* Main Menu Options for Mobile*/}
			<NavigationMobile
				mainMenuOptions={Object.values(MainPageEndPoints)}
				secondMenuOptions={Object.values(PortfolioAndPricingEndpoints)}
			/>
		</>
	)
}
/*  */
