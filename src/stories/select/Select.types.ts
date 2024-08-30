import { ErrorValidatorOptions } from "../utils/functions/validator";

export interface SelectTypes {
	name: string;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>, isError: boolean) => void;
	label: string;
	placeholder?: string;
	onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
	defaultValue?: string;
	innerRef?: React.RefObject<HTMLInputElement>;
	list: Array<{
		value: string;
		text: string
	}>
}
