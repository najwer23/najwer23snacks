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
  const wrapper = useRef<HTMLDivElement>(null);
  const select = useRef<HTMLInputElement>(null);
  const icon = useRef<HTMLDivElement>(null);

  const [selectState, setSelectState] = useState<{
    open: boolean;
    inputState: string;
  }>({
    open: false,
    inputState: 'out',
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapper.current &&
        !wrapper.current.contains(event.target as HTMLElement) &&
        icon.current &&
        !icon.current.contains(event.target as HTMLElement) &&
        document.activeElement === select.current
      ) {
        setSelectState((prevState) => ({
          ...prevState,
          inputState: 'out',
          open: false,
        }));
        select.current!.dispatchEvent(new Event('input', { bubbles: true }))
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapper} className={[styles.wrapper].join(' ')}>
      <div
        ref={icon}
        className={[styles.icon, selectState.open ? styles.iconRotate : ''].join(" ")}
        onClick={() => {
          setSelectState((prevState) => ({
            ...prevState,
            inputState: 'icon',
            open: !prevState.open,
          }));
        }}></div>

      <Input
        innerRef={select}
        label={label}
        type="select"
        kind="input"
        name={name}
        inputState={selectState.inputState}
        onClick={() => {
          setSelectState((prevState) => ({
            ...prevState,
            inputState: 'input',
            open: !prevState.open,
          }));
        }}
        readOnly
        validatorOptions={validatorOptions}
        {...props}
      />

      <div className={[styles.dropdown, selectState.open ? styles.open : ''].join(' ')}>
        {selectOptions.map((value, i) => (
          <div
            className={styles.dropdownItem}
            key={i}
            onClick={() => {
              select.current!.value = value;
              setSelectState((prevState) => ({
                ...prevState,
                inputState: 'out',
                open: false,
              }));
            }}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

Select.displayName = 'Select';
