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
            '--n23snacks-grid-widthMin': widthMin + 'px',
            '--n23snacks-grid-widthMax': widthMax + 'px',
            '--n23snacks-grid-padding': padding,
            '--n23snacks-grid-margin': margin,
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
          '--n23snacks-grid-column-mobile': col.mobile,
          '--n23snacks-grid-column-tablet': col.tablet,
          '--n23snacks-grid-column-small-desktop': col.smallDesktop,
          '--n23snacks-grid-column-desktop': col.desktop,
          '--n23snacks-grid-column-gap': gap.col,
          '--n23snacks-grid-row-gap': gap.row,
        } as React.CSSProperties
      }
      {...props}>
      {children}
    </div>
  );
};

Grid.displayName = 'Grid';
