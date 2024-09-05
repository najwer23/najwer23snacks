import { useState } from "react";
import styles from "./Picture.module.css"

export const Picture: React.FC<{
	src: string;
	alt: string;
	ar?: number;
	kind?: "border";
	draggable? : boolean
}
> = ({ src, alt, ar, kind, draggable }): JSX.Element => {
	const [loaded, setLoaded] = useState(false);

	return (
		<picture className={[styles.picture, loaded && styles.loaded, styles[kind ?? ""]].join(" ")}>
			<img width={ar} height={1} src={src} alt={alt} loading='lazy' onLoad={() => setLoaded(true)} draggable={draggable} />
		</picture>
	);
};
