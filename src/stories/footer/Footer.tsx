import styles from './Footer.module.css';
import { Grid } from '../grid';
import { TextBox } from '../textbox';
import { Button } from '../button';

export const Footer: React.FC<{
  footerWidthMax: number;
  hrColor1?: string;
}> = ({ footerWidthMax, hrColor1 = '#2f3031' }): JSX.Element => {
  return (
    <footer>
      <div className={styles.footerPush}></div>
      <div className={styles.footerContainer}>
        <Grid layout="container" widthMax={footerWidthMax} padding="0 10px 0 10px" margin="auto">
          <div className={styles.footerContent}>
            {hrColor1 && <div style={{ backgroundColor: hrColor1 }} className={styles.hr}></div>}

            <Grid
              layout="columns"
              widthMax={footerWidthMax}
              gap={{
                col: '0px',
                row: '30px',
              }}
              col={{
                mobile: 2,
                smallDesktop: 4,
                desktop: 4,
                tablet: 3,
              }}>
              <div>
                <TextBox tag="h3"> Author </TextBox>
                <TextBox tag="p"> Mariusz Najwer </TextBox>
                <TextBox tag="p" href="https://najwer23.github.io" target="_blank">
                  My website
                </TextBox>
              </div>
              <div>
                <TextBox tag="h3"> Shortcut </TextBox>
                <TextBox tag="p" href="https://najwer23.github.io/resume/" target="_blank">
                  Résumé
                </TextBox>
                <TextBox tag="p" href="https://najwer23.github.io/najwer23snacks/" target="_blank">
                  Design system
                </TextBox>
              </div>
              <div>
                <TextBox tag="h3"> Social media </TextBox>
                <TextBox tag="p" href="https://github.com/najwer23" target="_blank">
                  Github
                </TextBox>
                <TextBox tag="p" href="https://x.com/najwer23" target="_blank">
                  X
                </TextBox>
                <TextBox tag="p" href="https://www.linkedin.com/in/najwer23/" target="_blank">
                  Linkedin
                </TextBox>
                <TextBox tag="p" href="https://www.npmjs.com/~najwer23" target="_blank">
                  NPM
                </TextBox>
                <TextBox tag="p" href="https://leetcode.com/u/najwer23/" target="_blank">
                  Leetcode
                </TextBox>
              </div>
              <div>
                <TextBox tag="h3"> Rise </TextBox>
                <Button
                  type="button"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                  }>
                  Go to the Top!
                </Button>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
