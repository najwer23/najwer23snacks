export interface DialogTypes {
	modalOpen: boolean;
	title?: string,
	children: React.ReactNode;
	modalClose: () => void;
}
