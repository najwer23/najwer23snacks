export interface GridTypes {
	children: any;
	sameLine?: boolean
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
}
