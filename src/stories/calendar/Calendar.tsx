import { useEffect, useMemo, useRef, useState } from 'react';
import { Input } from '../input';
import styles from './Calendar.module.css';
import { type ValidatorOptions } from '../validator';
import {
  addMonths,
  calculateNewDayOfMonth,
  changeYearInDate,
  generateDaysArray,
  generateYears,
  getDateForInput,
  getDaysInMonth,
} from './Calendar.utils';
import { Button } from '../button';

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

  const [calendarState, setCalendarState] = useState<{
    open: boolean;
    inputState: string;
    dropDwonState: 'years' | 'days' | 'months';
  }>({
    open: false,
    inputState: 'out',
    dropDwonState: 'days',
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
          dropDwonState: 'days',
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

  const changeYear = (n: number) => {
    setDatePicked(changeYearInDate(datePicked, n));
  };

  const weekdays = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => new Date(2021, 0, (i + 4) % 7).toLocaleString('en-US', { weekday: 'short' })),
    [],
  );

  const months = useMemo(
    () => Array.from({ length: 12 }, (_, i) => new Date(2021, i + 1, 0).toLocaleString('en-US', { month: 'short' })),
    [],
  );

  const days = generateDaysArray(datePicked);

  const years = generateYears(datePicked);

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
            dropDwonState: 'days',
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
            dropDwonState: 'days',
          }));
        }}
        value={getDateForInput(datePicked)}
        inputState={calendarState.inputState}
        validatorOptions={validatorOptions}
        className={styles.arrowUp}
        autoComplete="off"
        readOnly
        {...props}
      />

      <div className={[styles.dropdown, calendarState.open ? styles.open : ''].join(' ')}>
        {/* YEARS */}
        {calendarState.dropDwonState == 'years' && (
          <>
            <div className={[styles.controls].join(' ')} style={{ marginBottom: '10px' }}>
              <div style={{ width: '30px' }} onClick={() => changeYear(datePicked.getFullYear() - 9)}>
                <Button kind="calendar">
                  <div className={[styles.buttonArrowLeft].join(' ')}> </div>
                </Button>
              </div>

              <div style={{ width: '60%' }} className={styles.controlsDate}>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setCalendarState((prevState) => ({
                      ...prevState,
                      dropDwonState: 'days',
                    }));
                  }}>
                  {datePicked.getFullYear()}
                </div>
              </div>

              <div style={{ width: '30px' }} onClick={() => changeYear(datePicked.getFullYear() + 9)}>
                <Button kind="calendar">
                  <div className={[styles.buttonArrowRight].join(' ')}> </div>
                </Button>
              </div>
            </div>

            <div className={[styles.years].join(' ')}>
              {years.map((v) => (
                <div className={styles.yearsChild} key={v + String(datePicked)}>
                  <Button
                    style={{ width: '80px' }}
                    onClick={() => {
                      changeYear(v);
                      setCalendarState((prevState) => ({
                        ...prevState,
                        dropDwonState: 'days',
                      }));
                    }}
                    disabled={datePicked.getFullYear() == v}>
                    {v}
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* MONTHS */}
        {calendarState.dropDwonState == 'months' && (
          <>
            <div className={[styles.months].join(' ')}>
              {months.map((v, i) => (
                <div className={styles.monthsChild} key={v + String(datePicked)}>
                  <Button
                    style={{ width: '80px' }}
                    onClick={() => {
                      changeMonth(i - datePicked.getMonth());
                      setCalendarState((prevState) => ({
                        ...prevState,
                        dropDwonState: 'days',
                      }));
                    }}
                    disabled={datePicked.getMonth() == i}>
                    {v}
                  </Button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* DAYS */}
        {calendarState.dropDwonState == 'days' && (
          <>
            <div className={[styles.controls].join(' ')}>
              <div style={{ width: '30px' }} onClick={() => changeMonth(-1)}>
                <Button kind="calendar">
                  <div className={[styles.buttonArrowLeft].join(' ')}> </div>
                </Button>
              </div>

              <div style={{ width: '60%' }} className={styles.controlsDate}>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setCalendarState((prevState) => ({
                      ...prevState,
                      dropDwonState: 'years',
                    }));
                  }}>
                  {datePicked.getFullYear()}
                </div>
                <div>-</div>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setCalendarState((prevState) => ({
                      ...prevState,
                      dropDwonState: 'months',
                    }));
                  }}>
                  {String(datePicked.getMonth() + 1).padStart(2, '0')}
                </div>
                <div>-</div>
                <div>{String(datePicked.getDate()).padStart(2, '0')}</div>
              </div>

              <div style={{ width: '30px' }} onClick={() => changeMonth(1)}>
                <Button kind="calendar">
                  <div className={[styles.buttonArrowRight].join(' ')}> </div>
                </Button>
              </div>
            </div>
            <div className={[styles.weekdays].join(' ')}>
              {weekdays.map((v) => (
                <div key={v} className={styles.weekdaysChild}>
                  {v}
                </div>
              ))}
            </div>

            <div className={[styles.days].join(' ')}>
              {days.map((v) => (
                <div
                  key={v.day + String(datePicked)}
                  className={[
                    styles.weekdaysChild,
                    styles.daysChild,
                    v.cssClass == 'active' && styles.daysActive,
                    v.cssClass == 'clickable' && styles.daysClickable,
                  ].join(' ')}
                  onClick={() => v.day > 0 && changeDayOfMonth(v.day)}>
                  {v.day <= 0 || v.day > getDaysInMonth(datePicked) ? ' ' : v.day}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Calendar.displayName = 'Calendar';
