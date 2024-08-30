import { Children, ReactNode, useEffect, useRef } from "react"
import { useResizeObserver } from "../../../../najwer23storybook/src/stories/utils/hooks/useResizeObserver"
import styles from './GridMasonry.module.css'

export interface P {
	arrWithChildren?: ReactNode[]
	onHeightChange: (height: number) => void
	id: string
}

export const GridMasonryColumn = ({ arrWithChildren, onHeightChange, id }: P) => {
	const col = useRef<HTMLDivElement>(null)

	const { height = 0 } = useResizeObserver({
		ref: col,
	})

	useEffect(() => {
		onHeightChange(height)
	}, [height])

	return <div ref={col} key={id} className={styles.masonryColumn}>
		{Children.map(arrWithChildren, (child: ReactNode, key) => (
			<div className={styles.masonryColumnChild} key={id + key} >{child}</div>
		))}
	</div>

}
