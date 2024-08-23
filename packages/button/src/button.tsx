import { css } from '@emotion/css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...other }: ButtonProps): JSX.Element => {

  const color = 'white'
  
  return (
    <button type="button" {...other} className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}>
      {children}
    </button>
  );
}
