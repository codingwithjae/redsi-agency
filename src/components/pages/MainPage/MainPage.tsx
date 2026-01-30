import SEO from "@/components/atoms/SEO/SEO";
import Header from "@/components/organisms/Header/Header";
import ContentTemplate from "@/components/templates/ContentTemplate";
import { Suspense, lazy } from "react";

const LazyFooter = lazy(() => import("@/components/organisms/Footer/Footer"));

export default function MainPage() {
	return (
		<>
			<SEO
				title="Redsi | agencia de marketing y desarrollo web"
				description="Ofrecemos servicios integrales de desarrollo digital para pequeños y medianos negocios."
				keywords="redsi, desarrollo web, diseño web, servicios digitales, innovación, tecnología, marketing digital, agencia"
				canonical={typeof window !== "undefined" ? window.location.origin : ""}
			/>
			<Header />
			<ContentTemplate />
			<Suspense fallback={null}>
				<LazyFooter />
			</Suspense>
		</>
	);
}
