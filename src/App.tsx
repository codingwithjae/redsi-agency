import GoToTop from "@/components/atoms/GoToTop/GoToTop";
import Spinner from "@/components/atoms/Spinner/Spinner";
import { BlogProvider } from "@/context/BlogProvider";
import { DataProvider } from "@/context/DataProvider";
import { Suspense, lazy } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPage = lazy(() => import("@/components/pages/AdminPage/AdminPage"));
const BlogPage = lazy(() => import("@/components/pages/BlogPage/BlogPage"));
const BlogPostPage = lazy(
	() => import("@/components/pages/BlogPostPage/BlogPostPage"),
);
const NotFoundPage = lazy(
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
							<Route
								path="/blog"
								element={
									<BlogProvider>
										<BlogPage />
									</BlogProvider>
								}
							/>
							<Route
								path="/blog/:slug"
								element={
									<BlogProvider>
										<BlogPostPage />
									</BlogProvider>
								}
							/>
							<Route path="/admin/*" element={<AdminPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</Suspense>
				</div>
				{!isAdmin && (
					<>
						<div className="layout-container">
							<GoToTop />
						</div>
						<ToastContainer
							position="bottom-right"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="light"
						/>
					</>
				)}
			</DataProvider>
		</HelmetProvider>
	);
}

export default App;
