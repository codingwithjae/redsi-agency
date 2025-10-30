import GoToTop from "@/components/atoms/GoToTop/GoToTop";
import Spinner from "@/components/atoms/Spinner/Spinner";
import Toast from "@/components/atoms/Toast/Toast";
import { DataProvider } from "@/context/DataProvider";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";

const LazyAdminPage = lazy(() => import("@/components/pages/AdminPage/AdminPage"));
const LazyBlogPage = lazy(() => import("@/components/pages/BlogPage/BlogPage"));
const LazyBlogPostPage = lazy(
	() => import("@/components/pages/BlogPostPage/BlogPostPage"),
);
const LazyNotFoundPage = lazy(
	() => import("@/components/pages/NotFoundPage/NotFoundPage"),
);

import MainPage from "@/components/pages/MainPage/MainPage";

function App() {
	const location = useLocation();
	const isAdmin = location.pathname.startsWith("/admin");

	return (
		<HelmetProvider>
			<DataProvider>
				<div className={isAdmin ? "layout--admin" : "layout--public"}>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path="/" element={<MainPage />} />
							<Route path="/blog" element={<LazyBlogPage />} />
							<Route path="/blog/:slug" element={<LazyBlogPostPage />} />
							<Route path="/admin/*" element={<LazyAdminPage />} />
							<Route path="*" element={<LazyNotFoundPage />} />
						</Routes>
					</Suspense>
				</div>
				{!isAdmin && (
					<>
						<div className="layout-container">
							<GoToTop />
						</div>
						<Toast />
					</>
				)}
			</DataProvider>
		</HelmetProvider>
	);
}

export default App;
