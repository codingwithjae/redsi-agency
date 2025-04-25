import type { DataContextType } from "@/types/data";
import { createContext } from "react";

export const DataContext = createContext<DataContextType | undefined>(
	undefined,
);
