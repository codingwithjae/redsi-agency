import Spinner from "@/components/atoms/Spinner/Spinner";
import { useBlog } from "@/context/BlogProvider";
import { urlFor } from "@/lib/sanity";
import { useEffect } from "react";
import { FiCalendar, FiClock, FiTag, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./BlogEntries.css";

const BlogEntries = () => {
	const { posts, loading, error, fetchAllPosts, formatDate } = useBlog();

	useEffect(() => {
		fetchAllPosts();
	}, [fetchAllPosts]);

	if (loading) return <Spinner message="Cargando entradas..." />;
	if (error)
		return (
			<div className="blog-entries__error-container">
				<div className="blog-entries__error">{error}</div>
			</div>
		);

	return (
		<section className="blog-entries">
			<h1 className="blog-entries__title">Entradas recientes</h1>

			<div className="blog-entries__grid">
				{posts.map((post) => (
					<article key={post._id} className="blog-entries__card">
						<Link
							to={`/blog/${post.slug.current}`}
							className="blog-entries__link"
						>
							{post.mainImage?.asset && (
								<img
									src={urlFor(post.mainImage).width(800).url()}
									alt={post.title}
									className="blog-entries__image"
									width={400}
									height={250}
									loading="lazy"
								/>
							)}
							<div className="blog-entries__content">
								<h2 className="blog-entries__post-title">{post.title}</h2>

								{post.shortDescription && (
									<p className="blog-entries__description">
										{post.shortDescription}
									</p>
								)}

								<div className="blog-entries__meta">
									<time className="blog-entries__date">
										<FiCalendar className="blog-entries__icon" />
										{formatDate(post.publishedAt)}
									</time>
									{post.categories?.[0] && (
										<span className="blog-entries__category">
											<FiTag className="blog-entries__icon" />
											{post.categories[0]}
										</span>
									)}
									{post.author && (
										<span className="blog-entries__author">
											<FiUser className="blog-entries__icon" />
											{post.author}
										</span>
									)}
								</div>
								<div className="blog-entries__read-more">
									<FiClock className="blog-entries__icon" />
									<span>Leer más</span>
								</div>
							</div>
						</Link>
					</article>
				))}
			</div>
		</section>
	);
};

export default BlogEntries;
