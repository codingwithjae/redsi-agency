import type { ReactNode } from "react";
import { useCallback, useContext, useState } from "react";
import { client } from "@/lib/sanity";
import type { BlogContextType, Post } from "../types/blog";
import { BlogContext } from "./BlogContext";

export const useBlog = () => {
	const context = useContext(BlogContext);
	if (!context) {
		throw new Error("useBlog must be used within a BlogProvider");
	}
	return context;
};

export function BlogProvider({ children }: { children: ReactNode }) {
	const [posts, setPosts] = useState<Post[]>([]);
	const [currentPost, setCurrentPost] = useState<Post | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchAllPosts = useCallback(async () => {
		setLoading(true);
		setError(null);
		try {
			const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        _type,
        title,
        slug,
        publishedAt,
        shortDescription,
        mainImage,
        "categories": categories[]->title,
        "author": author->name,
        body
      }`;
			const data = await client.fetch<Post[]>(query);
			setPosts(data);
		} catch (err) {
			console.error("Error fetching posts:", err);
			setError("No se pudieron cargar los artículos");
		} finally {
			setLoading(false);
		}
	}, []);

	const fetchPostBySlug = useCallback(async (slug: string) => {
		if (!slug) return;

		setLoading(true);
		setError(null);
		try {
			const query = `*[_type == "post" && slug.current == $slug][0] {
        _id,
        _type,
        title,
        slug,
        publishedAt,
        shortDescription,
        mainImage,
        "categories": categories[]->title,
        "author": author->name,
        body
      }`;
			const data = await client.fetch<Post | null>(query, { slug });
			setCurrentPost(data);
		} catch (err) {
			console.error("Error loading post:", err);
			setError("No se pudo cargar el artículo");
		} finally {
			setLoading(false);
		}
	}, []);



	const clearCurrentPost = useCallback(() => {
		setCurrentPost(null);
	}, []);

	const formatDate = useCallback((dateString: string) => {
		if (!dateString) return "";
		return new Date(dateString).toLocaleDateString("es-ES", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	}, []);

	const value: BlogContextType = {
		posts,
		currentPost,
		loading,
		error,
		fetchAllPosts,
		fetchPostBySlug,
		formatDate,
		clearCurrentPost,
	};

	return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
