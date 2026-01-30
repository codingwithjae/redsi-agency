import { lazy, Suspense } from "react";
import "./ContentTemplate.css";

const LazyServiceCard = lazy(() => import("@/components/molecules/Card/Card"));
const LazyAboutSection = lazy(() => import("@/components/organisms/About/About"));
const LazyServicesBanner = lazy(() => import("@/components/organisms/Banner/Banner"));
const LazyContactForm = lazy(() => import("@/components/organisms/Form/Form"));

export default function ContentTemplate() {
	return (
		<main className="content-template">
			<Suspense fallback={null}>
				<LazyAboutSection />
				<LazyServicesBanner />
				<div className="cards-wrapper">
					<LazyServiceCard />
				</div>
				<LazyContactForm />
			</Suspense>
		</main>
	);
}
