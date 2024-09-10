import { useEffect, useRef } from 'react';
import styles from './Input.module.css';
import { validator, type ValidatorOptions } from '../validator';

export const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
    name?: string;
    label?: string;
    type?: string;
    kind?: 'input' | 'textarea';
    inputState?: string;
    validatorOptions?: ValidatorOptions;
    innerRef?: React.RefObject<HTMLInputElement>;
  }
> = ({ validatorOptions, name, label, type = 'text', kind = 'input', innerRef, inputState, ...props }): JSX.Element => {
  const errorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inputState && inputState != 'out') {
      if (innerRef?.current) innerRef.current.focus();
    } 
    if (inputState && inputState == 'out') {
      if (innerRef?.current) innerRef.current.blur();
    }
  }, [inputState]);

  const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    
    if (type == 'select' && inputState != 'out') {
      target.focus();
      return;
    }

    if (type == 'calendar' && inputState != 'out') {
      target.focus();
      return;
    }

    if (document.activeElement !== target) {
      if (errorRef.current) errorRef.current.textContent = '';

      if (validatorOptions) {
        const validatorResult = validator(target.value, validatorOptions);
        if (validatorResult.length > 0) {
          errorRef.current!.textContent = validatorResult[0];
          target.classList.add('error');
        } else {
          target.classList.remove('error');
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
        {kind == 'input' && (
          <input
            ref={innerRef}
            id={name}
            name={name}
            type={type}
            onInput={handleInput}
            onBlur={handleInput}
            {...props}
            className={props.className}
          />
        )}

        {kind == 'textarea' && (
          <textarea id={name} name={name} onInput={handleInput} onBlur={handleInput} {...props}></textarea>
        )}
      </div>

      <div ref={errorRef} className={styles.inputError}></div>
    </div>
  );
};

Input.displayName = 'Input';
