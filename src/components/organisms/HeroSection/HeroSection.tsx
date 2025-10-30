import Button from "@/components/atoms/Button/Button";
import { useData } from "@/hooks/useData";
import { Suspense, lazy } from "react";
import "./HeroSection.css";

const TypeAnimation = lazy(() =>
	import("react-type-animation").then((module) => ({
		default: module.TypeAnimation,
	})),
);

const HERO_TEXT_SEQUENCE = [
	"inspira",
	2000,
	"proyecta",
	2000,
	"conecta",
	2000,
	"impacta.",
	2000,
];

export default function HeroSection() {
	const { hero } = useData();

	return (
		<section className="hero" id="home">
			<div className="hero__text-container">
				<h1 className="hero__title">
					<span className="hero__title--yellow">Muéstrate,</span>
					<span className="hero__title--yellow">conecta e</span>
					<Suspense fallback={<span className="hero__highlight">inspira</span>}>
						<TypeAnimation
							sequence={HERO_TEXT_SEQUENCE}
							wrapper="span"
							cursor={true}
							repeat={Number.POSITIVE_INFINITY}
							className="hero__highlight"
							style={{ display: "inline-block", color: "white" }}
						/>
					</Suspense>
				</h1>

				<p className="hero__description">{hero.description}</p>
				<Button label={hero.buttonText} variant="secondary" />
			</div>

			<figure className="hero__container">
				<img
					className="hero__container-image"
					src="/assets/images/hero-images.webp"
					alt="Redsi Creative Heroes"
					width={600}
					height={600}
					loading="eager"
					fetchPriority="high"
					decoding="async"
				/>
			</figure>
		</section>
	);
}
