import { createElement } from "react";
import styles from "./Text.module.css"
import { TextTypes } from "./Text.types";

export const Text = ({
	kind,
	children
}: TextTypes) => {
	return <>
		{createElement(kind.includes("h") ? kind : "p", { className: [styles[kind + "Text"], styles.shared].join(" ") }, children)}
	</>
};