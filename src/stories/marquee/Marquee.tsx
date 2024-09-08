import styles from './Marquee.module.css';

export const Marquee: React.FC<{
  children: React.ReactNode;
  height?: string;
  speed?: string;
  gap?: string;
}> = ({ children, gap = '40px', height = '200px', speed = '10s' }): JSX.Element => {
  return (
    <div
      className={styles.marquee}
      style={
        {
          '--height': height,
          '--gap': gap,
          '--speed': speed,
        } as React.CSSProperties
      }>
      <div className={styles.track}>
        <>{children}</>
      </div>
      <div className={styles.track}>
        <>{children}</>
      </div>
    </div>
  );
};

Marquee.displayName = 'Marquee';
