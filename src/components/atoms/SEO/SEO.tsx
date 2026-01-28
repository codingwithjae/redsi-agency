import type { FC } from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	ogImage?: string | null | undefined;
	ogType?: string;
	canonical?: string;
}

const SEO: FC<SEOProps> = ({
	title,
	description,
	keywords,
	ogImage,
	ogType = "website",
	canonical,
}) => {
	const siteTitle = title
		? title
		: "Redsi | agencia de marketing y desarrollo web";
	const siteDescription =
		description ||
		"Ofrecemos servicios integrales de desarrollo digital para pequeños y medianos negocios.";
	const siteKeywords =
		keywords || "redsi, desarrollo web, servicios digitales, innovación";
	const siteImage = ogImage || "/favicon-512.png";

	return (
		<Helmet>
			<title>{siteTitle}</title>
			<meta name="description" content={siteDescription} />
			<meta name="keywords" content={siteKeywords} />

			<meta property="og:type" content={ogType} />
			<meta property="og:title" content={siteTitle} />
			<meta property="og:description" content={siteDescription} />
			{siteImage && <meta property="og:image" content={siteImage} />}

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={siteTitle} />
			<meta name="twitter:description" content={siteDescription} />

			{canonical && <link rel="canonical" href={canonical} />}
		</Helmet>
	);
};

export default SEO;
