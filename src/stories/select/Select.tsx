import { useEffect, useRef, useState } from 'react';
import { Input } from '../input';
import styles from './Select.module.css';
import { type ValidatorOptions } from '../validator';

export const Select: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    selectOptions: string[];
    validatorOptions?: ValidatorOptions;
  }
> = ({ validatorOptions, name, label, selectOptions, ...props }): JSX.Element => {
  const selectWrapper = useRef<HTMLDivElement>(null);
  const select = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectWrapper.current && !selectWrapper.current.contains(event.target as HTMLElement) && open) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, selectWrapper]);

  return (
    <div ref={selectWrapper} className={[styles.selectWrapper, styles.arrowUp].join(' ')}>
      <Input
        innerRef={select}
        label={label}
        type="select"
        kind="input"
        name={name}
        onClick={() => {
          setOpen(!open);
        }}
        readOnly
        validatorOptions={validatorOptions}
        className={open ? styles.arrowDown : styles.arrowUp}
        {...props}
      />

      <div className={[styles.selectDropdown, open ? styles.open : ''].join(' ')}>
        {selectOptions.map((value, i) => (
          <div
            className={styles.selectDropdownItem}
            key={i}
            onClick={() => {
              select.current!.value = value;
              setOpen(false);
              select.current!.dispatchEvent(new Event('input', { bubbles: true }));
            }}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

Select.displayName = 'Select';
