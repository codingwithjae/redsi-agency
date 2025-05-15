import Button from "@/components/atoms/Button/Button";
import { useContactForm } from "@/hooks/useContactForm";
import { useData } from "@/hooks/useData";
import "./Form.css";

export default function Form() {
	const { contact } = useData();
	const { formData, isSubmitting, handleChange, handleSubmit } =
		useContactForm();

	return (
		<section className="contact" id="contacto">
			<div className="contact__content-container">
				<div className="contact__form-container">
					<form className="contact__form" onSubmit={handleSubmit} noValidate>
						<div className="contact-form__group">
							<label htmlFor="user_name" className="contact-form__label">
								{contact.formLabels.name}
							</label>
							<input
								id="user_name"
								type="text"
								name="user_name"
								className="contact-form__input"
								placeholder={contact.formLabels.name}
								value={formData.user_name}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="contact-form__group">
							<label htmlFor="user_email" className="contact-form__label">
								{contact.formLabels.email}
							</label>
							<input
								id="user_email"
								type="email"
								name="user_email"
								className="contact-form__input"
								placeholder={contact.formLabels.email}
								value={formData.user_email}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="contact-form__group">
							<label htmlFor="message" className="contact-form__label">
								{contact.formLabels.message}
							</label>
							<textarea
								id="message"
								name="message"
								className="contact-form__input contact-form__input--message"
								placeholder="Escribe tu mensaje aquí..."
								value={formData.message}
								onChange={handleChange}
								required
							/>
						</div>

						<Button
							label={isSubmitting ? "Enviando..." : contact.buttonText}
							variant="quinary"
							type="submit"
							disabled={isSubmitting}
						/>
					</form>
				</div>

				<div className="contact__highlight">
					<h2 className="contact__title">{contact.title}</h2>
					<div className="contact__details-one">
						<p className="contact__question">{contact.question}</p>
						<p className="contact__subtext">{contact.subtext}</p>
					</div>
					<div className="contact__details-two">
						<p className="contact__description">{contact.description}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
