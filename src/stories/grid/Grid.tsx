import { Children } from "react";
import styles from "./Grid.module.css"
import { GridTypes } from "./Grid.types";

export const Grid = ({
	children,
	gap,
	col,
	sameLine
}: GridTypes) => {

	return (
		<>
			<div
				className={[styles.gridContainer, sameLine && styles.sameLine].join(" ")}
				style={
					{
						"--n23-c-column-mobile": col.mobile,
						"--n23-c-column-tablet": col.tablet,
						"--n23-c-column-small-desktop": col.smallDesktop,
						"--n23-c-column-desktop": col.desktop,
						"--n23-c-column-gap": gap.col,
						"--n23-c-row-gap": gap.row
					} as React.CSSProperties}
			>
				{
					Children.map(children.props.children, (child: any) => (
						child && <div className={styles.gridContainerChild}>{child}</div>
					))
				}
			</div>
		</>
	)
};