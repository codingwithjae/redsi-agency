import brandingImg from "@/assets/images/rectangle-1.webp";
import redesImg from "@/assets/images/rectangle-2.webp";
import webImg from "@/assets/images/rectangle-3.webp";
import Button from "@/components/atoms/Button/Button";
import { useData } from "@/hooks/useData";
import "./Card.css";

export default function Card() {
	const { services } = useData();

	const images = [brandingImg, redesImg, webImg];

	return (
		<section className="services" id="servicios">
			<div className="services__container">
				{services.map((service, index) => (
					<article key={service.id} className="services__card">
						<h3 className="services__card-title">{service.title}</h3>

						<img
							src={images[index]}
							alt={service.title}
							className="services__card-image"
							width={340}
							height={220}
							loading="lazy"
						/>

						<div className="services__card-content">
							<p className="services__card-paragraph">{service.paragraph1}</p>
							<p className="services__card-paragraph">{service.paragraph2}</p>
							<p className="services__card-paragraph">{service.paragraph3}</p>
						</div>

						<div className="services__card-items">
							{service.items.map((item) => (
								<div key={item.title} className="services__card-item">
									<h4 className="services__card-item-title">{item.title}</h4>
									<p className="services__card-item-text">{item.text}</p>
								</div>
							))}
						</div>

						<Button
							label={service.buttonText}
							variant="quinary"
							className="services__card-button"
						/>
					</article>
				))}
			</div>
		</section>
	);
}
