import { useLayoutEffect, useState } from "react";

export const useWindowSize = () => {
	const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

	useLayoutEffect(() => {
		function updateSize() {
			// android workaround
			if (size[0] != window.innerWidth) {
				setSize([window.innerWidth, window.innerHeight]);
			}
		}

		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);

	}, [size]);
	return size;
}