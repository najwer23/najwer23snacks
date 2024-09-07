import { useEffect, useRef } from 'react';
import styles from './Dialog.module.css';
import { Button } from '../button';
import { Grid } from '../grid';
import { TextBox } from '../textbox';

export const Dialog: React.FC<{
  modalOpen: boolean;
  title?: string;
  children: React.ReactNode;
  modalClose: () => void;
}> = ({ modalOpen, modalClose, children, title }): JSX.Element => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modalOpen) {
      ref.current?.showModal();
      document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      ref.current?.classList.add(styles.minimize);

      const timeoutId = setTimeout(() => {
        ref.current?.close();
        ref.current?.classList.remove(styles.minimize);
        document.body.style.paddingRight = '0';
        document.body.style.overflow = '';
      }, 400);

      return () => clearTimeout(timeoutId);
    }
  }, [modalOpen]);

  return (
    <dialog className={styles.dialog} modal-mode="mega" ref={ref} onCancel={modalClose}>
      <Grid
        gap={{
          col: '0px',
          row: '20px',
        }}
        col={{
          mobile: 1,
          smallDesktop: 1,
          desktop: 1,
          tablet: 1,
        }}
        layout={'columns'}>
        <>
          {title && (
            <header>
              <TextBox>
                <b>{title}</b>
              </TextBox>
            </header>
          )}

          <article>{children}</article>

          <footer>
            <Button onClick={modalClose} type={'button'}>
              Close
            </Button>
          </footer>
        </>
      </Grid>
    </dialog>
  );
};
