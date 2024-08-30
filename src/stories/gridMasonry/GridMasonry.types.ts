import { ReactNode } from "react";

export interface GridMasonryTypes {
	children: ReactNode[];
	gap: {
		col: string;
		row: string;
	};
	col: {
		mobile: number;
		smallDesktop: number;
		desktop: number;
		tablet: number;
	};
	delay?: number;
	onGridMasonryLoadEnd?: (isGridMasonryLoadEnd: boolean) => void;
}

export interface ChildrenMasonry {
	name: string;
	arrWithElm: ReactNode[];
	height: number;
}