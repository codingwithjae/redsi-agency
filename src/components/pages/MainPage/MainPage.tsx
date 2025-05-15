import SEO from "@/components/atoms/SEO/SEO";
import Footer from "@/components/organisms/Footer/Footer";
import Header from "@/components/organisms/Header/Header";
import ContentTemplate from "@/components/templates/ContentTemplate";

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
			<Footer />
		</>
	);
}
