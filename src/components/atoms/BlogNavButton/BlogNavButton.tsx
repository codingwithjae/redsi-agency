import { FiArrowLeft, FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./BlogNavButton.css";

interface BlogNavButtonProps {
	type?: "home" | "back";
	destination?: string;
}

export default function BlogNavButton({
	type = "home",
	destination = "/blog",
}: BlogNavButtonProps) {
	const navigate = useNavigate();

	const handleClick = () => {
		if (type === "back") {
			if (window.history.length > 1) {
				navigate(-1);
			} else {
				navigate(destination);
			}
		} else {
			navigate(destination);
		}
	};

	return (
		<button
			type="button"
			className={`blog-nav-button ${type}`}
			onClick={handleClick}
			aria-label={type === "back" ? "Volver" : "Ir al blog"}
			title={type === "back" ? "Volver" : "Ir al blog"}
		>
			{type === "back" ? <FiArrowLeft /> : <FiHome />}
		</button>
	);
}
