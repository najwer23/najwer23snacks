export interface ButtonTypes {
	onClick?: () => void;
	text: any;
	type: "button" | "reset" | "submit";
	disabled?: boolean;
	ariaLabel: string;
}
