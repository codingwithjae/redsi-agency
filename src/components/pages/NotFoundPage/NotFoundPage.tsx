import SEO from "@/components/atoms/SEO/SEO";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
	return (
		<div className="not-found">
			<SEO
				title="404 - Página no encontrada"
				description="Lo sentimos, la página que buscas no existe."
			/>
			<div className="not-found__container">
				<h1 className="not-found__title">404</h1>
				<p className="not-found__text">
					Lo sentimos, la página que buscas no existe.
				</p>
				<Link to="/" className="button-primary">
					Volver al Inicio
				</Link>
			</div>
		</div>
	);
}
