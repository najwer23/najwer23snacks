import styles from './Navigation.module.css';
import { Grid } from '../grid';
import { useWindowSize } from '../hooks';
import { Button } from '../button';
import { useEffect, useRef, useState } from 'react';
import { ClassNames } from 'storybook/internal/theming';

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
  const ref = useRef<HTMLDivElement>(null);
  const [menuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= navigationMobileAtWidth) {
      setMenuMobileOpen(false);
    }
  }, [width]);

  useEffect(() => {
    if (menuMobileOpen) {
      document.body.classList.add(styles.menuOpen);
    } else {
      document.body.classList.remove(styles.menuOpen);
    }
  }, [menuMobileOpen]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && event.target instanceof HTMLElement) {
        if (event.target.tagName === 'A' && ref.current.contains(event.target)) {
          setMenuMobileOpen(false);
        }
      }
    };

    if (ref.current) {
      ref.current.addEventListener('click', handleClick);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <>
      <Grid layout="container" widthMax={navigationWidthMax} padding="0 10px 0 10px">
        <div className={styles.navigationItems}>
          <div className={styles.navigationItemLeft}>{navigationTitle}</div>
          <div className={styles.navigationItemRight}>
            {width >= navigationMobileAtWidth && <>{navigationTop}</>}
            {width < navigationMobileAtWidth && (
              <Button onClick={() => setMenuMobileOpen((prev) => !prev)} kind="strawberry" aria-label="open menu">
                <div className={styles.menuStrawberryContainer}>
                  <div className={styles.menuStrawberry}></div>
                </div>
              </Button>
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

      <div className={[styles.menuMobile, menuMobileOpen && styles.open].join(' ')} ref={ref}>
        <Grid layout="container" widthMax={navigationWidthMax} padding="0 10px 0 10px">
          <div className={styles.navigationItems}>
            <div className={styles.navigationItemLeft}>{navigationTitle}</div>
            <div className={styles.navigationItemRight}>
              <Button onClick={() => setMenuMobileOpen((prev) => !prev)} kind="strawberry" aria-label="close menu">
                <div className={styles.menuStrawberryContainer}>
                  <div className={styles.menuClose}></div>
                </div>
              </Button>
            </div>
          </div>
        </Grid>
        {navigationMobile}
      </div>
    </>
  );
};

Navigation.displayName = 'Navigation';
