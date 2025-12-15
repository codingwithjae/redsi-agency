import type { FormData } from "@/types/data";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";

export const useContactForm = () => {
	const [formData, setFormData] = useState<FormData>({
		user_name: "",
		user_email: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target;
		setFormData((previousState) => ({
			...previousState,
			[name]: value,
		}));
	};

	const validateForm = () => {
		if (!formData.user_name || !formData.user_email || !formData.message) {
			const errorMessage = "Por favor, completa todos los campos.";
			setError(errorMessage);
			toast.error(errorMessage);
			return false;
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.user_email)) {
			const invalidEmailMessage =
				"Por favor, ingresa un correo electrónico válido.";
			setError(invalidEmailMessage);
			toast.error(invalidEmailMessage);
			return false;
		}
		return true;
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setError(null);
		setIsSuccess(false);

		if (!validateForm()) return;

		setIsSubmitting(true);
		const toastId = toast.info("Enviando mensaje...", { autoClose: false });

		try {
			const templateParams = {
				user_name: formData.user_name,
				user_email: formData.user_email,
				message: formData.message,
				to_name: "Redsi Team",
			};

			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				templateParams,
				import.meta.env.VITE_EMAILJS_PUBLIC_API_KEY,
			);

			setIsSuccess(true);
			toast.update(toastId, {
				render: "¡Mensaje enviado con éxito!",
				type: "success",
				autoClose: 5000,
			});
			setFormData({ user_name: "", user_email: "", message: "" });
		} catch (error) {
			console.error("EmailJS Error:", error);
			const submissionErrorMessage =
				"Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.";
			setError(submissionErrorMessage);
			toast.update(toastId, {
				render: submissionErrorMessage,
				type: "error",
				autoClose: 5000,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return {
		formData,
		isSubmitting,
		isSuccess,
		error,
		handleChange,
		handleSubmit,
	};
};
