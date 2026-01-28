import empathyIcon from "@/assets/images/empathy.webp";
import innovationIcon from "@/assets/images/innovation.webp";
import trustIcon from "@/assets/images/trust.webp";
import type { AppData, DataContextType, DataProviderProps } from "@/types/data";
import { useMemo, useState } from "react";
import { DataContext } from "./DataContext";

const staticData: AppData = {
	hero: {
		title: "Muéstrate, conecta e ",
		highlight: "ins",
		description:
			"Somos la puerta de ingreso de tu marca a las redes sociales, conecta con tu audiencia y no pases desapercibido.",
		buttonText: "Escríbenos",
	},
	about: {
		rocketCardText: "Sobre nosotros",
		mission:
			"Creamos Redsi para escuchar, entender y ayudar a que esos negocios encuentren su lugar en el mundo digital.",
		description:
			"No se trata solo de hacer marketing, se trata de acompañarte a construir algo que realmente importe.",
		historyTitle: "Todo empezó con una idea: hacer las cosas diferentes.",
		historyDescription:
			"Después de años de experiencia, nos dimos cuenta de algo: había muchas marcas pequeñas con un potencial enorme que no estaban recibiendo la atención que merecían.",
		valuesTitle: "Lo que nos mueve:",
		values: [
			{
				id: "1",
				title: "Empatía",
				description: "Nos importa escucharte y entender lo que necesitas.",
				image: empathyIcon,
			},
			{
				id: "2",
				title: "Innovación",
				description: "Buscamos formas nuevas y creativas para destacar.",
				image: innovationIcon,
			},
			{
				id: "3",
				title: "Confianza",
				description: "Queremos que te sientas acompañado en cada paso.",
				image: trustIcon,
			},
		],
	},
	services: [
		{
			id: "branding",
			title: "Branding",
			paragraph1: "¿Tu logo no refleja profesionalismo?",
			paragraph2:
				"Tu marca debe reflejar quién eres. Creamos una identidad visual única que conecta con tu público.",
			paragraph3: "Nuestro proceso:",
			buttonText: "Empieza hoy mismo",
			items: [
				{
					title: "Descubrimiento",
					text: "Queremos entender tu visión, tus objetivos y cómo deseas que te perciban.",
				},
				{
					title: "Diseño",
					text: "Llevamos tus ideas a un diseño que refleje la esencia de tu negocio.",
				},
				{
					title: "Entrega",
					text: "Te damos todo lo que necesitas para que tu marca brille donde sea que esté.",
				},
			],
		},
		{
			id: "redes",
			title: "Redes",
			paragraph1: "¿Tu marca no impacta?",
			paragraph2:
				"Más que simples post, es cómo te presentas y te recuerdan. Creamos mensajes que conectan e inspiran.",
			paragraph3: "¿Qué hacemos por ti?",
			buttonText: "Hablemos de contenido",
			items: [
				{
					title: "Copywriting",
					text: "Redactamos tu contenido, hashtags y guiones para video, si tienes algo que contar.",
				},
				{
					title: "Piezas creativas",
					text: "Diseñamos contenido auténtico que refleja tu marca y conecta con tu audiencia.",
				},
				{
					title: "Planificación",
					text: "Organizamos tus publicaciones para que siempre tengas algo relevante que compartir.",
				},
			],
		},
		{
			id: "web",
			title: "Web",
			paragraph1: "¿No tienes página web?",
			paragraph2:
				"Las personas buscan todo en internet y es probable que necesites una para destacar.",
			paragraph3: "¿Cómo te podemos ayudar?",
			buttonText: "Creemos tu sitio",
			items: [
				{
					title: "Diseño personalizado",
					text: "Nada de plantillas genéricas; hacemos un diseño que refleje tu marca.",
				},
				{
					title: "Desarrollo funcional",
					text: "Desde tiendas online hasta páginas informativas, hacemos que tu sitio sea fácil de usar.",
				},
				{
					title: "Optimización SEO",
					text: "Te ayudamos a que te encuentren entre las primeras opciones de Google.",
				},
			],
		},
	],
	banner: {
		title: "¿Por qué ",
		highlight: "nosotros?",
		subtitle: "Porque nos importa tu negocio tanto como a ti",
		buttonText: "Escríbenos",
	},
	contact: {
		title: "Contacto",
		question: "¿Tienes una idea, un proyecto o simplemente una duda?",
		subtext: "Estamos aquí para ayudarte.",
		description:
			"Escribenos, cuéntanos tu historia y comencemos a trabajar juntos.",
		formLabels: {
			name: "nombre",
			email: "correo electrónico",
			message: "mensaje",
		},
		buttonText: "Enviar",
	},
	footer: {
		title: "Redsi",
		pagesTitle: "Páginas",
		pages: [
			{ label: "Home", href: "home" },
			{ label: "Nosotros", href: "nosotros" },
			{ label: "Servicios", href: "servicios" },
			{ label: "Contacto", href: "contacto" },
		],
		socialMediaTitle: "Social Media",
		contactTitle: "Contacto",
		email: "redsiagencydigital@gmail.com",
		location: "Uruguay / Argentina",
		hours: "Redsi 2025",
	},
};

export const DataProvider = ({ children }: DataProviderProps) => {
	const [isLoaded] = useState(true);

	const value: DataContextType = useMemo(
		() => ({
			...staticData,
			isLoaded,
		}),
		[isLoaded],
	);

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
