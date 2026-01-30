import Logo from "@/components/atoms/Logo/Logo";
import { useData } from "@/hooks/useData";
import {
	FaCopyright,
	FaEnvelope,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";
import "./Footer.css";

export default function Footer() {
	const { footer } = useData();

	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__inner">
					<div className="footer__logo">
						<Logo variant="purple" />
					</div>

					<div className="footer__nav">
						<h3 className="footer__heading">{footer.pagesTitle}</h3>
						<ul className="footer__list">
							{footer.pages.map((link) => (
								<li key={link.label} className="footer__item">
									<Link
										to={link.href}
										href={`#${link.href}`}
										smooth={true}
										duration={500}
										offset={-70}
										className="footer__link"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="footer__social-icons">
						<h3 className="footer__heading">{footer.socialMediaTitle}</h3>
						<div className="footer__icons-container">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="footer__icon"
								aria-label="Facebook"
							>
								<FaFacebookF />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="footer__icon"
								aria-label="Instagram"
							>
								<FaInstagram />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="footer__icon"
								aria-label="LinkedIn"
							>
								<FaLinkedinIn />
							</a>
						</div>
					</div>

					<div className="footer__social-contact">
						<h3 className="footer__heading">{footer.contactTitle}</h3>
						<div className="footer__contact-items">
							<div className="footer__item">
								<FaEnvelope className="footer__contact-icon" />
								<span>{footer.email}</span>
							</div>
							<div className="footer__item">
								<FaMapMarkerAlt className="footer__contact-icon" />
								<span>{footer.location}</span>
							</div>
							<div className="footer__item">
								<FaCopyright className="footer__contact-icon" />
								<span>{footer.hours}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
