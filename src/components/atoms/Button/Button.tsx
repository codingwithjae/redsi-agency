import "./Button.css";

interface ButtonProps {
	label: string;
	variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary";
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	className?: string;
}

export default function Button({
	label,
	variant = "primary",
	onClick,
	type = "button",
	disabled = false,
	className = "",
}: ButtonProps) {
	const defaultOnClick = () => {
		window.open("https://wa.link/vfzczy", "_blank", "noopener,noreferrer");
	};

	return (
		<button
			className={`button button--${variant} ${className}`}
			onClick={onClick || (type === "button" ? defaultOnClick : undefined)}
			type={type}
			disabled={disabled}
			aria-label={label}
		>
			{label}
		</button>
	);
}
