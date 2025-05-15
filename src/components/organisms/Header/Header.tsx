import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import Navbar from "@/components/organisms/Navbar/Navbar";
import "./Header.css";

export default function Header() {
	return (
		<header className="header">
			<Navbar />
			<HeroSection />
		</header>
	);
}
