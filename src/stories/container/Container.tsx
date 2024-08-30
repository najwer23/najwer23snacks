import styles from "./Container.module.css"
import { ContainerTypes } from "./Container.types";

export const Container = ({ children, kind }: ContainerTypes) => {
	return (
		<div className={[styles["n23" + kind], styles.shared].join(" ")}>
			{children}
		</div>
	);
};
