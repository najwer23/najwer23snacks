import { useState } from "react";
import { validator } from "../utils/functions/validator";
import styles from "./Textarea.module.css"
import { TextareaTypes } from "./Textarea.types";

export const Textarea = ({
	name,
	placeholder,
	onBlur,
	label,
	readonly = false,
	errorOptions,
	defaultValue,
	innerRef,
	...props
}: TextareaTypes
) => {
	const [validatorMsg, setValidatorMsg] = useState<string | null>(null);

	const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
		if (onBlur !== undefined) {
			let isError = false;
			setValidatorMsg(null)

			if (errorOptions) {
				const validatorResult = validator(e.target.value, errorOptions);
				if (validatorResult.length > 0) {
					setValidatorMsg(validatorResult[0])
					isError = true;
				}
			}

			onBlur(e, isError);
		}
	}

	return (
		<div className={styles.inputWrapper}>

			<div className={styles.inputLabel}>
				<label
					htmlFor={name}
				>
					{label}
				</label>
			</div>

			<div className={styles.inputInput}>
				<textarea
					ref={innerRef}
					defaultValue={defaultValue}
					id={name}
					name={name}
					onBlur={handleBlur}
					placeholder={placeholder}
					readOnly={readonly}
					{...props}
				>
				</textarea>
			</div>

			<div className={styles.inputError}>
				{validatorMsg && validatorMsg}
			</div>

		</div>
	);
};
