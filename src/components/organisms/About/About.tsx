import rocketImage from "@/assets/images/rocket.webp";
import { useData } from "@/hooks/useData";
import "./About.css";

export default function About() {
	const { about } = useData();

	return (
		<section className="about-us" id="nosotros">
			<div className="about-us__container">
				<div className="about-us__left">
					<div className="about-us__rocket-card">
						<div className="rocket-card__image-container">
							<img
								src={rocketImage}
								alt="Rocket"
								className="rocket-card__image"
								width={662}
								height={550}
								loading="lazy"
							/>
						</div>
						<div className="rocket-card__text">{about.rocketCardText}</div>
					</div>

					<div className="about-us__details-one">
						<p className="details__paragraph--one">{about.mission}</p>
					</div>

					<div className="about-us__details-two">
						<p className="details__paragraph--two">{about.description}</p>
					</div>
				</div>

				<div className="about-us__right">
					<h2 className="about-us__title">{about.historyTitle}</h2>
					<p className="about-us__description">{about.historyDescription}</p>

					<h3 className="about-us__subtitle">{about.valuesTitle}</h3>

					<div className="about-us__values">
						{about.values.map((value) => (
							<div key={value.id} className="about-us__value">
								<div className="about-us__value-icon-wrapper">
									<img
										src={value.image}
										alt={value.title}
										className="about-us__value-image"
										width={128}
										height={128}
										loading="lazy"
									/>
								</div>
								<div className="about-us__value-text">
									<h4 className="about-us__value-title">{value.title}</h4>
									<p className="about-us__value-description">
										{value.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
