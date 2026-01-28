import Button from "@/components/atoms/Button/Button";
import Logo from "@/components/atoms/Logo/Logo";
import ScrollNavItem from "@/components/atoms/NavLinks/NavLinks";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className={`navbar ${isOpen ? "navbar--open" : ""}`}>
			<div className="navbar__container">
				<Link to="/" className="navbar__logo" aria-label="Ir a inicio">
					<Logo variant="white" />
				</Link>

				<button
					className="navbar__toggle"
					onClick={toggleMenu}
					aria-label="Abrir o cerrar menú"
					type="button"
				>
					{isOpen ? (
						<FaTimes className="navbar__icon navbar__icon--spin" />
					) : (
						<FaBars className="navbar__icon navbar__icon--spin" />
					)}
				</button>
			</div>

			<ul className={`navbar__links ${isOpen ? "navbar__links--active" : ""}`}>
				<ScrollNavItem
					to="home"
					label="Home"
					liClassName="navbar__item"
					linkClassName="navbar__link"
				/>
				<ScrollNavItem
					to="nosotros"
					label="Nosotros"
					liClassName="navbar__item"
					linkClassName="navbar__link"
				/>
				<ScrollNavItem
					to="servicios"
					label="Servicios"
					liClassName="navbar__item"
					linkClassName="navbar__link"
				/>
				<ScrollNavItem
					to="contacto"
					label="Contacto"
					liClassName="navbar__item"
					linkClassName="navbar__link"
				/>

				<li className="navbar__item">
					<Link to="/blog" className="navbar__link">
						Blog
					</Link>
				</li>

				<li className="navbar__item navbar__item--button">
					<Button label="Escríbenos" variant="primary" />
				</li>
			</ul>
		</nav>
	);
}
