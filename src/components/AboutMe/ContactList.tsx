import { GeneralInfoEndpoint } from '@/data/website-information'
import { GenerateMainLayoutMetaData } from '@/utils/Generator'
import { FaFacebookF, FaInstagram, FaVimeoV, FaWhatsapp } from 'react-icons/fa'
import { MdOutgoingMail } from 'react-icons/md'

interface Props {}

export const ContactList = async ({}: Props) => {
	const FooterData = (await GenerateMainLayoutMetaData(GeneralInfoEndpoint)).Contact

	const contactDataForFooter = {
		facebookLink: FooterData.Facebook as string,
		instagramLink: FooterData.Instagram as string,
		whatsappLink: FooterData.Phone as string,
		emailLink: FooterData.Email as string,
		vimeoLink: FooterData.Vimeo as string,
	}

	const data = contactDataForFooter

	const customClass = 'hover:text-agatha-text-c text-'

	return (
		<>
			<ul className="flex gap-[0.55rem] text-base">
				<li>
					<a
						className={customClass}
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
						className={customClass}
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
						className={customClass}
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
						className={customClass}
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
						className={customClass}
						target="_blank"
						rel="noopener"
						href={data.emailLink}
						title={data.emailLink}
					>
						<MdOutgoingMail />
					</a>
				</li>
			</ul>
		</>
	)
}
