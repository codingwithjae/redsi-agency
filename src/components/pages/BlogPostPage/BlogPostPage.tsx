import BlogNavButton from "@/components/atoms/BlogNavButton/BlogNavButton";
import SEO from "@/components/atoms/SEO/SEO";
import BlogPost from "@/components/organisms/BlogPost/BlogPost";
import BlogTemplate from "@/components/templates/BlogTemplate";
import { BlogProvider, useBlog } from "@/context/BlogProvider";
import { urlFor } from "@/lib/sanity";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BlogPostPage.css";

function BlogPostContent() {
	const { slug } = useParams<{ slug: string }>();
	const { currentPost } = useBlog();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<SEO
				title={currentPost?.title || "Artículo"}
				description={
					currentPost?.shortDescription || "Artículo del blog de Redsi"
				}
				keywords={"blog, artículo"}
				ogType="article"
				canonical={
					typeof window !== "undefined"
						? `${window.location.origin}/blog/${slug}`
						: ""
				}
				ogImage={
					currentPost?.mainImage
						? urlFor(currentPost.mainImage).width(1200).url()
						: ""
				}
			/>
			<BlogTemplate>
				<BlogPost />
				<BlogNavButton type="back" destination="/blog" />
			</BlogTemplate>
		</>
	);
}

export default function BlogPostPage() {
	return (
		<BlogProvider>
			<BlogPostContent />
		</BlogProvider>
	);
}
