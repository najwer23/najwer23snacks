import { useEffect, useMemo, useRef, useState } from 'react';
import { Input } from '../input';
import styles from './Calendar.module.css';
import { type ValidatorOptions } from '../validator';
import { TextBox } from '../textbox';
import { addMonths, calculateNewDayOfMonth, generateDaysArray, getDateForInput, getDaysInMonth } from './Calendar.utils';

export const Calendar: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    validatorOptions?: ValidatorOptions;
  }
> = ({ validatorOptions, name, label, ...props }): JSX.Element => {
  const wrapper = useRef<HTMLDivElement>(null);
  const icon = useRef<HTMLDivElement>(null);
  const calendar = useRef<HTMLInputElement>(null);

  const [calendarState, setCalendarState] = useState<{ open: boolean; inputState: string }>({
    open: false,
    inputState: 'out',
  });

  const [datePicked, setDatePicked] = useState(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapper.current &&
        !wrapper.current.contains(event.target as HTMLElement) &&
        icon.current &&
        !icon.current.contains(event.target as HTMLElement) &&
        document.activeElement === calendar.current
      ) {
        setCalendarState((prevState) => ({
          ...prevState,
          inputState: 'out',
          open: false,
        }));
        calendar.current!.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeDayOfMonth = (day: number) => {
    setDatePicked(calculateNewDayOfMonth(datePicked, day));
  };

  const changeMonth = (n: number) => {
    setDatePicked(addMonths(datePicked, n));
  };

  const weekdays = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => new Date(2021, 0, (i + 4) % 7).toLocaleString('en-US', { weekday: 'short' })),
    [],
  );

  const daysOfMonth = generateDaysArray(datePicked);

  return (
    <div ref={wrapper} className={[styles.wrapper].join(' ')}>
      <div
        ref={icon}
        className={styles.icon}
        onClick={() => {
          setCalendarState((prevState) => ({
            ...prevState,
            inputState: 'icon',
            open: !prevState.open,
          }));
        }}></div>

      <Input
        innerRef={calendar}
        label={label}
        type="calendar"
        kind="input"
        name={name}
        onClick={() => {
          setCalendarState((prevState) => ({
            ...prevState,
            inputState: 'input',
            open: !prevState.open,
          }));
        }}
        value={getDateForInput(datePicked)}
        inputState={calendarState.inputState}
        validatorOptions={validatorOptions}
        className={styles.arrowUp}
        autoComplete="off"
        {...props}
      />

      <div className={[styles.dropdown, calendarState.open ? styles.open : ''].join(' ')}>
        <div className={[styles.controls].join(' ')}>
          <div style={{ width: '25%' }} className={styles.controls} onClick={() => changeMonth(-1)}>
            L
          </div>
          <div style={{ width: '50%' }} className={styles.controls}>
            <TextBox>1</TextBox>
          </div>
          <div style={{ width: '25%' }} className={styles.controls} onClick={() => changeMonth(1)}>
            P
          </div>
        </div>
        <div className={[styles.weekdays].join(' ')}>
          {weekdays.map((v) => (
            <div key={v} className={styles.weekdaysChild}>
              {v}
            </div>
          ))}
        </div>

        <div className={[styles.daysOfMonth].join(' ')}>
          {daysOfMonth.map((v) => (
            <div
              key={v.day + String(datePicked)}
              className={[
                styles.weekdaysChild,
                styles.daysOfMonthChild,
                v.cssClass == 'active' && styles.daysOfMonthActive,
                v.cssClass == 'clickable' && styles.daysOfMonthClickable,
              ].join(' ')}
              onClick={() => v.day > 0 && changeDayOfMonth(v.day)}>
              {v.day <= 0 || v.day > getDaysInMonth(datePicked) ? ' ' : v.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Calendar.displayName = 'Calendar';
