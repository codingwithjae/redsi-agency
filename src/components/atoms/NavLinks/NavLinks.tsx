import { Link } from "react-scroll";

interface ScrollNavItemProps {
	to: string;
	label: string;
	liClassName?: string;
	linkClassName?: string;
	offset?: number;
	duration?: number;
	activeClass?: string;
	spy?: boolean;
	smooth?: boolean;
	[key: string]: unknown;
}

export default function ScrollNavItem({
	to,
	label,
	liClassName = "",
	linkClassName = "",
	offset = -70,
	duration = 500,
	activeClass = "active",
	spy = true,
	smooth = true,
	...rest
}: ScrollNavItemProps) {
	return (
		<li className={liClassName}>
			<Link
				activeClass={activeClass}
				to={to}
				href={`#${to}`}
				spy={spy}
				smooth={smooth}
				offset={offset}
				duration={duration}
				className={linkClassName}
				{...rest}
			>
				{label}
			</Link>
		</li>
	);
}
