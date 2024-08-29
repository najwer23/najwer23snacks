import styles from './Footer.module.css';
import { Grid } from '@najwer23snacks/grid';
import { TextBox } from '@najwer23snacks/textbox';

export const Footer: React.FC<{
  footerWidthMax: number;
  children: React.ReactNode;
}> = ({ footerWidthMax, children }): JSX.Element => {
  return (
    <footer>
      <div className={styles.footerPush}></div>
      <div className={styles.footerContainer}>
        <Grid layout="container" widthMax={footerWidthMax} padding="0 10px 0 10px">
          <div className={styles.footerContent}>{children}</div>
        </Grid>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
