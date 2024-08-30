import { useState } from "react";
import styles from "./Picture.module.css"
import { PictureTypes } from "./Picture.types";

export const Picture = ({ src, alt, ar, kind, draggable }: PictureTypes) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<picture className={[styles.picture, loaded && styles.loaded, styles[kind ?? ""]].join(" ")}>
			<img width={ar} height={1} src={src} alt={alt} loading='lazy' onLoad={() => setLoaded(true)} draggable={draggable} />
		</picture>
	);
};
