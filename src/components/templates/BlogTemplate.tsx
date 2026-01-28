import type { ReactNode } from "react";
import "./BlogTemplate.css";

export default function BlogTemplate({ children }: { children: ReactNode }) {
	return <main className="blog-template__main">{children}</main>;
}
