import styles from './Navigation.module.css';
import { Grid } from '@najwer23snacks/grid';
import { SingleRowChecker } from './SingleRowChecker';

export const Navigation: React.FC<{
  title: React.ReactNode;
  navigationTop?: React.ReactNode;
  navigationBottom?: React.ReactNode;
}> = ({ title, navigationTop, navigationBottom }): JSX.Element => {
  return (
    <Grid layout="container" widthMax={1200} padding="0 10px 0 10px">
      <div className={styles.navigationTopItems}>
        <div className={styles.navigationTopItemLeft}>1111</div>

        <SingleRowChecker className={styles.navigationTopItemRight}>
          <div className="child-div">Item 1 9 99 9 9 9 9 9 9 9 9 9</div>
          <div className="child-div">Item 29 9 9 9 9 99 9 9 99 </div>
          <div className="child-div">Item 3 9999999999</div>
        </SingleRowChecker>
      </div>
    </Grid>
  );
};

Navigation.displayName = 'Navigation';
