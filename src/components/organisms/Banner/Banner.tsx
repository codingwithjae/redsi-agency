import Button from "@/components/atoms/Button/Button";
import { useData } from "@/hooks/useData";
import "./Banner.css";

export default function Banner() {
	const { banner } = useData();

	return (
		<section className="banner">
			<div className="banner__content-container">
				<div className="banner__title-container">
					<h2 className="banner__title">
						<span className="banner__title-top">{banner.title}</span>
						<span className="banner__highlight-text">{banner.highlight}</span>
					</h2>
				</div>
				<div className="banner__cta-container">
					<p className="banner__subtitle">{banner.subtitle}</p>
					<Button label={banner.buttonText} variant="tertiary" />
				</div>
			</div>
		</section>
	);
}
