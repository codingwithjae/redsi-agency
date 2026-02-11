import Spinner from "@/components/atoms/Spinner/Spinner";
import { useBlog } from "@/context/BlogProvider";
import { urlFor } from "@/lib/sanity";
import type { PortableTextImageNode, PortableTextMark } from "@/types/blog";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type React from "react";
import { useEffect } from "react";
import { FiCalendar, FiUser } from "react-icons/fi";
import { useParams } from "react-router-dom";
import "./BlogPost.css";

const BlogPost = () => {
	const { slug } = useParams();
	const {
		currentPost,
		loading,
		error,
		fetchPostBySlug,
		formatDate,
		clearCurrentPost,
	} = useBlog();

	useEffect(() => {
		if (slug) {
			fetchPostBySlug(slug);
		}

		return () => clearCurrentPost();
	}, [slug, fetchPostBySlug, clearCurrentPost]);

	if (loading) {
		return <Spinner message="Cargando artículo..." />;
	}

	if (error || !currentPost) {
		return (
			<div className="blog-post__error">
				<p>No se encontró el artículo</p>
			</div>
		);
	}

	const portableTextComponents: PortableTextComponents = {
		marks: {
			link: ({
				children,
				value,
			}: { children?: React.ReactNode; value?: PortableTextMark }) => {
				const rel = !value?.href?.startsWith("/")
					? "noreferrer noopener"
					: undefined;
				return (
					<a
						href={value?.href}
						rel={rel}
						target="_blank"
						className="blog-post__link"
					>
						{children}
					</a>
				);
			},
		},
		block: {
			h2: ({ children }: { children?: React.ReactNode }) => (
				<h2 className="blog-post__heading-two">{children}</h2>
			),
			h3: ({ children }: { children?: React.ReactNode }) => (
				<h3 className="blog-post__heading-three">{children}</h3>
			),
		},
		types: {
			image: ({ value }: { value: PortableTextImageNode }) => {
				if (!value?.asset?._ref) return null;
				return (
					<img
						src={urlFor(value).width(800).url()}
						alt={value.alt || "Imagen del blog"}
						className="blog-post__content-image"
						loading="lazy"
					/>
				);
			},
		},
	};

	return (
		<article className="blog-post">
			<div className="blog-post__container">
				<h1 className="blog-post__title">{currentPost.title}</h1>

				<div className="blog-post__meta">
					<time className="blog-post__date">
						<FiCalendar className="blog-post__icon" />
						{formatDate(currentPost.publishedAt)}
					</time>

					{currentPost.author && (
						<div className="blog-post__author-container">
							<FiUser className="blog-post__author-icon" />
							<span className="blog-post__author-name">
								{currentPost.author}
							</span>
						</div>
					)}
				</div>

				{currentPost.mainImage?.asset && (
					<img
						src={urlFor(currentPost.mainImage).width(1200).url()}
						alt={currentPost.title}
						className="blog-post__cover"
						width={800}
						height={450}
						loading="eager"
					/>
				)}

				{currentPost.shortDescription && (
					<div className="blog-post__summary">
						<p>{currentPost.shortDescription}</p>
					</div>
				)}

				<div className="blog-post__content">
					{currentPost.body && (
						<div className="blog-post__text">
							<PortableText
								value={currentPost.body}
								components={portableTextComponents}
							/>
						</div>
					)}
				</div>
			</div>
		</article>
	);
};

export default BlogPost;
