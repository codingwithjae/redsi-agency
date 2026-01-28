import "./Spinner.css";

interface SpinnerProps {
	message?: string;
}

export default function Spinner({ message = "Cargando..." }: SpinnerProps) {
	return (
		<div className="spinner-container">
			<div className="spinner" />
			{message && <p className="spinner-message">{message}</p>}
		</div>
	);
}
