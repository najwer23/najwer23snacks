import { forwardRef, useEffect, useRef, useState } from "react";
import { Input } from "../input";
import styles from "./Select.module.css"
import { SelectTypes } from "./Select.types";

export const Select = ({
	name,
	placeholder,
	label,
	onChange,
	defaultValue,
	innerRef,
	list,
	...props
}: SelectTypes) => {

	const selectWrapper = useRef<HTMLDivElement>(null)
	const select = useRef<HTMLInputElement>(null)
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (selectWrapper.current && !selectWrapper.current.contains(event.target as HTMLElement) && open) {
				setOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};

	}, [open, selectWrapper]);

	const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
		if (onChange !== undefined) {
			onChange(e);
		}
	}

	return (
		<div ref={selectWrapper} className={styles.selectWrapper}>
			<Input
				innerRef={select}
				label={label}
				name={name}
				onClick={() => { setOpen(!open) }}
				onChange={handleChange}
				placeholder={placeholder}
				readonly
				defaultValue={defaultValue}
				type="text"
				{...props}
			/>

			<div className={[styles.selectDropdown, open ? styles.open : ""].join(" ")}>
				{
					list.map(({ text }, id) => (
						<div className={styles.selectDropdownItem} key={id} onClick={() => {
							select.current!.value = text
							setOpen(false)
							select.current!.dispatchEvent(new Event('input', { bubbles: true }));
						}}>{text}</div>
					))}
			</div>
		</div>
	);
};
