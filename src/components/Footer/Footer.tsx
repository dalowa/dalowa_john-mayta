import { MdOutgoingMail } from 'react-icons/md'
import React from 'react'
import { FaFacebookF, FaVimeoV, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { GenerateMainLayoutMetaData } from '@/utils/Generator'
import { GeneralInfoEndpoint } from '@/data/website-information'

interface Props {
	data: {
		facebookLink: string
		instagramLink: string
		vimeoLink: string
		whatsappLink: string
		emailLink: string
	}
}

export const Footer = async () => {
	const copyrighttext = 'SEVEN / TODOS LOS DERECHOS RESERVADOS'
	const FooterData = (await GenerateMainLayoutMetaData(GeneralInfoEndpoint)).Contact

	const contactDataForFooter = {
		facebookLink: FooterData.Facebook as string,
		instagramLink: FooterData.Instagram as string,
		whatsappLink: FooterData.Phone as string,
		emailLink: FooterData.Email as string,
		vimeoLink: FooterData.Vimeo as string,
	}

	const data = contactDataForFooter

	return (
		<footer
			className={`z-[100] bottom-0 font-mono bg-agatha-black h-24 md:h-16 gap-4 text-agatha-text-c w-full flex flex-col md:flex-row justify-center items-start md:items-center md:justify-between px-4`}
		>
			<small className="text-xs tracking-wider">{`© ${copyrighttext}`}</small>
			<ul className="flex gap-3 md:pr-8">
				<li>
					<a
						className="hover:text-agatha-text-c"
						target="_blank"
						rel="noopener"
						href={data.facebookLink}
						title={data.facebookLink}
					>
						<FaFacebookF />
					</a>
				</li>
				<li>
					<a
						className="hover:text-agatha-text-c"
						target="_blank"
						rel="noopener"
						href={data.instagramLink}
						title={data.instagramLink}
					>
						<FaInstagram />
					</a>
				</li>
				<li>
					<a
						className="hover:text-agatha-text-c"
						target="_blank"
						rel="noopener"
						href={data.vimeoLink}
						title={data.vimeoLink}
					>
						<FaVimeoV />
					</a>
				</li>
				<li>
					<a
						className="hover:text-agatha-text-c"
						target="_blank"
						rel="noopener"
						href={data.whatsappLink}
						title={data.whatsappLink}
					>
						<FaWhatsapp />
					</a>
				</li>
				<li>
					<a
						className="hover:text-agatha-text-c"
						target="_blank"
						rel="noopener"
						href={data.emailLink}
						title={data.emailLink}
					>
						<MdOutgoingMail />
					</a>
				</li>
			</ul>
		</footer>
	)
}
