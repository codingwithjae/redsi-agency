import { lazy, Suspense } from "react";
import "./ContentTemplate.css";

const Card = lazy(() => import("@/components/molecules/Card/Card"));
const About = lazy(() => import("@/components/organisms/About/About"));
const Services = lazy(() => import("@/components/organisms/Banner/Banner"));
const Contact = lazy(() => import("@/components/organisms/Form/Form"));

export default function ContentTemplate() {
	return (
		<main className="content-template">
			<Suspense fallback={null}>
				<About />
				<Services />
				<div className="cards-wrapper">
					<Card />
				</div>
				<Contact />
			</Suspense>
		</main>
	);
}
