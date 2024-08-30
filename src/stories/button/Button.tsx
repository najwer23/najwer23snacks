import styles from "./Button.module.css"
import { ButtonTypes } from "./Button.types";

export const Button = ({ ariaLabel, type, text, disabled = false, ...props }: ButtonTypes) => {
	return (
		<button
			type={type}
			className={styles.standard}
			disabled={disabled}
			aria-label={ariaLabel}
			{...props}
		>
			{text}
		</button>
	);
};
