import styles from './Button.module.css';

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    kind?: 'classic' | 'strawberry';
  }
> = ({ children, kind = 'classic', ...props }): JSX.Element => {
  return (
    <button type="button" {...props} className={styles[kind]}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';
