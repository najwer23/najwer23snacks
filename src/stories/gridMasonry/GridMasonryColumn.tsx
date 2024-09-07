import { Children, ReactNode, useEffect, useRef } from 'react';
import styles from './GridMasonry.module.css';
import { useResizeObserver } from '../hooks';

export const GridMasonryColumn: React.FC<{
  arrWithChildren?: ReactNode[];
  onHeightChange: (height: number) => void;
  id: string;
}> = ({ arrWithChildren, onHeightChange, id }): JSX.Element => {
  const col = useRef<HTMLDivElement>(null);

  const { height = 0 } = useResizeObserver({
    ref: col,
  });

  useEffect(() => {
    onHeightChange(height);
  }, [height]);

  return (
    <div ref={col} key={id} className={styles.masonryColumn}>
      {Children.map(arrWithChildren, (child: ReactNode, key) => (
        <div className={styles.masonryColumnChild} key={id + key}>
          {child}
        </div>
      ))}
    </div>
  );
};

GridMasonryColumn.displayName = 'GridMasonryColumn';
