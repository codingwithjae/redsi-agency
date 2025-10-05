import BlogNavButton from "@/components/atoms/BlogNavButton/BlogNavButton";
import SEO from "@/components/atoms/SEO/SEO";
import BlogEntries from "@/components/organisms/BlogEntries/BlogEntries";
import BlogTemplate from "@/components/templates/BlogTemplate";
import { BlogProvider } from "@/context/BlogProvider";
import "./BlogPage.css";

export default function BlogPage() {
	return (
		<>
			<SEO
				title="Blog"
				description="Nuestro blog de Redsi: Artículos sobre desarrollo web, tendencias digitales e innovación tecnológica."
				keywords="blog, artículos, desarrollo web, tendencias, tecnología, innovación digital"
				ogType="blog"
				canonical={
					typeof window !== "undefined" ? `${window.location.origin}/blog` : ""
				}
			/>
			<BlogProvider>
				<BlogTemplate>
					<BlogEntries />
					<BlogNavButton type="home" destination="/" />
				</BlogTemplate>
			</BlogProvider>
		</>
	);
}
