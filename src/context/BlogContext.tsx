import type { BlogContextType } from "@/types/blog";
import { createContext } from "react";

export const BlogContext = createContext<BlogContextType | undefined>(
	undefined,
);
