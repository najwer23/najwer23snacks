import styles from './Grid.module.css';

export const Grid: React.FC<{
  children?: React.ReactNode;
  widthMin?: number;
  widthMax?: number;
  padding?: string;
  margin?: string;
  gap?: {
    col: string;
    row: string;
  };
  col?: {
    mobile: number;
    smallDesktop: number;
    desktop: number;
    tablet: number;
  };
  layout: 'columns' | 'container';
}> = ({
  children,
  widthMin = 0,
  widthMax = 1920,
  padding = 0,
  margin = 'auto',
  layout,
  gap,
  col,
  ...props
}): JSX.Element => {
  if (layout == 'container') {
    return (
      <div
        className={styles.container}
        style={
          {
            '--widthMin': widthMin + 'px',
            '--widthMax': widthMax + 'px',
            '--padding': padding,
            '--margin': margin,
          } as React.CSSProperties
        }
        {...props}>
        {children}
      </div>
    );
  }

  if (!gap || !col) {
    throw new Error('When layout="columns", gap and col props are required');
  }

  return (
    <div
      className={styles.columns}
      style={
        {
          '--col-mobile': col.mobile,
          '--col-tablet': col.tablet,
          '--col-small-desktop': col.smallDesktop,
          '--col-desktop': col.desktop,
          '--col-gap': gap.col,
          '--row-gap': gap.row,
        } as React.CSSProperties
      }
      {...props}>
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';
