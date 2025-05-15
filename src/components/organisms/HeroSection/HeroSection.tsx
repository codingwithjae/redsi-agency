import heroImage from "@/assets/images/hero-images.webp";
import Button from "@/components/atoms/Button/Button";
import { useData } from "@/hooks/useData";
import { TypeAnimation } from "react-type-animation";
import "./HeroSection.css";

export default function HeroSection() {
	const { hero } = useData();

	return (
		<section className="hero" id="home">
			<div className="hero__text-container">
				<h1 className="hero__title">
					<span className="hero__title--yellow">Muéstrate,</span>
					<span className="hero__title--yellow">conecta e</span>
					<TypeAnimation
						sequence={[
							"inspira",
							2000,
							"proyecta",
							2000,
							"conecta",
							2000,
							"impacta.",
							2000,
						]}
						wrapper="span"
						cursor={true}
						repeat={Number.POSITIVE_INFINITY}
						className="hero__highlight"
						style={{ display: "inline-block", color: "white" }}
					/>
				</h1>

				<p className="hero__description">{hero.description}</p>
				<Button label={hero.buttonText} variant="secondary" />
			</div>

			<figure className="hero__container">
				<img
					className="hero__container-image"
					src={heroImage}
					alt="Redsi Creative Heroes"
					width={600}
					height={600}
					loading="eager"
					fetchPriority="high"
				/>
			</figure>
		</section>
	);
}
