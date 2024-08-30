import { ErrorValidatorOptions } from "../utils/functions/validator";

export interface TextareaTypes {
	name: string;
	onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>, isError: boolean) => void;
	label: string;
	placeholder?: string;
	readonly?: boolean;
	onChange?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
	errorOptions?: ErrorValidatorOptions;
	defaultValue?: string;
	innerRef?: React.RefObject<HTMLTextAreaElement>;
}
