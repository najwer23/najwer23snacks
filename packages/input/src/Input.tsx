import { useRef } from 'react';
import styles from './Input.module.css';
import { validator, type ValidatorOptions } from '@najwer23snacks/validator';

export const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    name?: string;
    label?: string;
    type?: string;
    validatorOptions?: ValidatorOptions;
  }
> = ({ validatorOptions, name, label, type = 'text', ...props }): JSX.Element => {
  const errorRef = useRef<HTMLDivElement | null>(null);

  const handleInput = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target && document.activeElement !== e.currentTarget) {
      if (errorRef.current) {
        errorRef.current.textContent = '';
      }

      if (validatorOptions) {
        const validatorResult = validator(e.target.value, validatorOptions);
        if (validatorResult.length > 0) {
          errorRef.current!.textContent = validatorResult[0];
          e.target.classList.add('error');
        } else {
          e.target.classList.remove('error');
        }
      }
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.inputLabel}>
        <label htmlFor={name}>{label}</label>
      </div>

      <div className={styles.inputInput}>
        <input
          id={name}
          name={name}
          type={type}
          onInput={handleInput}
          onBlur={handleInput}
          {...props}
          className={props.className}
        />
      </div>

      <div ref={errorRef} className={styles.inputError}></div>
    </div>
  );
};

Input.displayName = 'Input';
