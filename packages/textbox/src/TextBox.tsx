import styles from './TextBox.module.css';

type TextBoxTag = 'h1' | 'h2' | 'h3' | 'p';

export const TextBox: React.FC<{
  tag?: TextBoxTag;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}> = ({ tag = 'p', children, href, target, rel, ...props }) => {
  const Tag = tag;

  const tagClassNames: Record<TextBoxTag, string> = {
    h1: 'heading1',
    h2: 'heading2',
    h3: 'heading3',
    p: 'paragraph',
  };

  if (href) {
    return (
      <Tag className={`${styles[tagClassNames[tag]]}`}>
        <a className={styles.link} href={href} target={target} rel={rel} {...props}>
          {children}
        </a>
      </Tag>
    );
  }

  return (
    <Tag className={`${styles[tagClassNames[tag]]}`} {...props}>
      {children}
    </Tag>
  );
};

TextBox.displayName = 'TextBox';
