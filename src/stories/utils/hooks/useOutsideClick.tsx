import { useEffect } from "react";

export function useOutsideClick(ref: React.RefObject<any>) {
	useEffect(() => {
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				alert("You clicked outside of me!");
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};

	}, [ref]);
}