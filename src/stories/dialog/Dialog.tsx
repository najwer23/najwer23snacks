import { useEffect, useRef } from 'react';
import styles from './Dialog.module.css';
import { Button } from '../button';
import { TextBox } from '../textbox';

export const Dialog: React.FC<{
  modalOpen: boolean;
  title?: string;
  children: React.ReactNode;
  modalClose: () => void;
}> = ({ modalOpen, modalClose, children, title, ...props }): JSX.Element => {
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
    <dialog
      className={[title ? styles.hasTitle : '', styles.dialog].join(' ')}
      modal-mode="mega"
      ref={ref}
      onCancel={modalClose}
      {...props}>
      <div className={styles.dialogCloseButton}>
        <Button onClick={modalClose} kind="close" aria-label="close dialog" />
      </div>

      {title && (
        <>
          <header>
            <TextBox tag="h2">
              <b>{title}</b>
            </TextBox>
          </header>
          <article>{children}</article>
        </>
      )}

      {!title && <article>{children}</article>}
    </dialog>
  );
};

Dialog.displayName = 'Dialog';
