import { ReactNode } from "react";

export interface TextTypes {
	kind: "p" | "h1" | "h2" | "h3" | "pSmall" | "pSmallBold" | "pSubTitle";
	children: ReactNode;
}
