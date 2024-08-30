import { useState } from "react";
import { validator } from "../utils/functions/validator";
import styles from "./Input.module.css"
import { InputTypes } from "./Input.types";

export const Input = ({
	name,
	placeholder,
	type,
	onBlur,
	onChange,
	label,
	readonly = false,
	errorOptions,
	defaultValue,
	innerRef,
	...props
}: InputTypes
) => {
	const [validatorMsg, setValidatorMsg] = useState<string | null>(null);

	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
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

	const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
		if (onChange !== undefined) {
			onChange(e);
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
				<input
					ref={innerRef}
					defaultValue={defaultValue}
					id={name}
					name={name}
					type={type}
					onBlur={handleBlur}
					onInput={handleChange}
					placeholder={placeholder}
					readOnly={readonly}
					{...props}
				/>
			</div>

			<div className={styles.inputError}>
				{validatorMsg && validatorMsg}
			</div>

		</div>
	);
};
