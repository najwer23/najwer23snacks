import styles from './TextBox.module.css';

type TextBoxTag = 'h1' | 'h2' | 'h3' | 'p';

export const TextBox: React.FC<{
  tag?: TextBoxTag;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  isTitle?: boolean;
}> = ({ tag = 'p', children, href, target, rel, isTitle, ...props }) => {
  const Tag = tag;
  const className = `${styles[tag]} ${isTitle ? styles.isTitle : ''}`;

  return href ? (
    <Tag className={className}>
      <a href={href} target={target} rel={rel} {...props}>
        {children}
      </a>
    </Tag>
  ) : (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
};

TextBox.displayName = 'TextBox';