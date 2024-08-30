import { ErrorValidatorOptions } from '../utils/functions/validator';

export interface InputTypes {
  name: string;
  type: 'text';
  onBlur?: (e: React.FocusEvent<HTMLInputElement>, isError: boolean) => void;
  label: string;
  placeholder?: string;
  readonly?: boolean;
  onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  errorOptions?: ErrorValidatorOptions;
  defaultValue?: string;
  innerRef?: React.RefObject<HTMLInputElement>;
  value?: string;
}
