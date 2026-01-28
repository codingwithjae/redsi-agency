import Card from "@/components/molecules/Card/Card";
import About from "@/components/organisms/About/About";
import Services from "@/components/organisms/Banner/Banner";
import Contact from "@/components/organisms/Form/Form";
import "./ContentTemplate.css";

export default function ContentTemplate() {
	return (
		<main className="content-template">
			<About />
			<Services />
			<div className="cards-wrapper">
				<Card />
			</div>
			<Contact />
		</main>
	);
}
