import { FaArrowUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import "./GoToTop.css";

export default function GoToTop() {
	const scrollToTop = () => {
		scroll.scrollToTop({
			duration: 500,
			smooth: "easeInOutQuart",
		});
	};

	return (
		<button
			className="scrollToTopButton"
			onClick={scrollToTop}
			type="button"
			aria-label="Volver arriba"
		>
			<FaArrowUp />
		</button>
	);
}
