import logoPurple from "@/assets/images/logo-v2.svg";
import logoWhite from "@/assets/images/logo.svg";
import "./Logo.css";

interface LogoProps {
	variant?: "white" | "purple";
}

export default function Logo({ variant }: LogoProps) {
	return (
		<img
			src={variant === "white" ? logoWhite : logoPurple}
			className="logo"
			alt="Redsi Logo"
			loading="lazy"
			width={150}
			height={50}
		/>
	);
}
