import { useState } from 'react';
import styles from './Input.module.css';
import { validator } from '@najwer23snacks/validator';

export const Input: React.FC<{
  name?: string;
  label?: string;
  type?: string;
  errorOptions?: object;
}> = ({ errorOptions, name, label, type = 'text', ...props }): JSX.Element => {
  const [validatorMsg, setValidatorMsg] = useState<string | null>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    let isError = false;
    setValidatorMsg(null);

    if (errorOptions) {
      const validatorResult = validator(e.target.value, errorOptions);
      if (validatorResult.length > 0) {
        setValidatorMsg(validatorResult[0]);
        isError = true;
      }
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputLabel}>
        <label htmlFor={name}>{label}</label>
      </div>

      <div className={styles.inputInput}>
        <input id={name} name={name} type={type} onBlur={handleBlur} {...props} />
      </div>

      <div className={styles.inputError}>{validatorMsg && validatorMsg}</div>
    </div>
  );
};

Input.displayName = 'Input';
