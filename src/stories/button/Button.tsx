import styles from './Button.module.css';

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    kind?: 'classic' | 'strawberry' | 'close';
  }
> = ({ children, kind = 'classic', ...props }): JSX.Element => {
  if (kind == 'close' || kind == 'strawberry') {
    return (
      <button type="button" {...props} className={styles[kind]}>
        <div>
          <div></div>
        </div>
      </button>
    );
  }

  return (
    <button type="button" {...props} className={styles[kind]}>
      {children}
    </button>
  );
};

Button.displayName = 'Button';
