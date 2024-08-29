import styles from './Navigation.module.css';
import { Grid } from '@najwer23snacks/grid';
import { useWindowSize } from '@najwer23snacks/hooks';
import { Button } from '@najwer23snacks/button';
import { useEffect, useState } from 'react';

export const Navigation: React.FC<{
  navigationTitle?: React.ReactNode;
  navigationTop?: React.ReactNode;
  navigationMobile: React.ReactNode;
  navigationMobileAtWidth: number;
  navigationBottom?: React.ReactNode;
  navigationWidthMax: number;
  hrColor1?: string;
  hrColor2?: string;
}> = ({
  navigationWidthMax,
  navigationTitle,
  navigationTop,
  hrColor1,
  hrColor2,
  navigationMobile,
  navigationMobileAtWidth,
  navigationBottom,
}): JSX.Element => {
  const [menuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= navigationMobileAtWidth) {
      setMenuMobileOpen(false);
      document.body.classList.remove(styles.menuOpen);
    }
  }, [width]);

  useEffect(() => {
    if (menuMobileOpen) {
      document.body.classList.add(styles.menuOpen);
    } else {
      document.body.classList.remove(styles.menuOpen);
    }
  }, [menuMobileOpen]);

  return (
    <>
      <Grid layout="container" widthMax={navigationWidthMax} padding="0 10px 0 10px">
        <div className={styles.navigationItems}>
          <div className={styles.navigationItemLeft}>{navigationTitle}</div>
          <div className={styles.navigationItemRight}>
            {width >= navigationMobileAtWidth && <>{navigationTop}</>}
            {width < navigationMobileAtWidth && (
              <Button onClick={() => setMenuMobileOpen((prev) => !prev)}>Menu</Button>
            )}
          </div>
        </div>
        {width >= navigationMobileAtWidth && (
          <>
            {hrColor1 && <div style={{ backgroundColor: hrColor1 }} className={styles.hr}></div>}
            <div className={styles.navigationItems}>
              <div className={styles.navigationItemLeft}>{navigationBottom}</div>
            </div>
            {hrColor2 && <div style={{ backgroundColor: hrColor2 }} className={styles.hr}></div>}
          </>
        )}
      </Grid>

      <div className={[styles.menuMobile, menuMobileOpen && styles.open].join(' ')}>
        <Grid layout="container" widthMax={navigationWidthMax} padding="0 10px 0 10px">
          <div className={styles.navigationItems}>
            <div className={styles.navigationItemLeft}>{navigationTitle}</div>
            <div className={styles.navigationItemRight}>
              <Button onClick={() => setMenuMobileOpen((prev) => !prev)}>Menu</Button>
            </div>
          </div>
        </Grid>
        {navigationMobile}
      </div>
    </>
  );
};

Navigation.displayName = 'Navigation';
