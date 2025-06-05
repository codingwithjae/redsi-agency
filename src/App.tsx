import GoToTop from "@/components/atoms/GoToTop/GoToTop";
import AdminPage from "@/components/pages/AdminPage/AdminPage";
import BlogPage from "@/components/pages/BlogPage/BlogPage";
import BlogPostPage from "@/components/pages/BlogPostPage/BlogPostPage";
import MainPage from "@/components/pages/MainPage/MainPage";
import NotFoundPage from "@/components/pages/NotFoundPage/NotFoundPage";
import { BlogProvider } from "@/context/BlogProvider";
import { DataProvider } from "@/context/DataProvider";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const location = useLocation();
	const isAdmin = location.pathname.startsWith("/admin");

	return (
		<HelmetProvider>
			<DataProvider>
				<BlogProvider>
					<div className={isAdmin ? "layout--admin" : "layout--public"}>
						<Routes>
							<Route path="/" element={<MainPage />} />
							<Route path="/blog" element={<BlogPage />} />
							<Route path="/blog/:slug" element={<BlogPostPage />} />
							<Route path="/admin/*" element={<AdminPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
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
				</BlogProvider>
			</DataProvider>
		</HelmetProvider>
	);
}

export default App;
