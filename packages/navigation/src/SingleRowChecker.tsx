import { useLayoutEffect, useRef, useState, ReactNode } from 'react';
import { useWindowSize } from '@najwer23snacks/hooks';

interface SingleRowCheckerProps {
  children: ReactNode; // Define the type for children prop
  className: string;
}

export const SingleRowChecker: React.FC<SingleRowCheckerProps> = ({ children, className }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [isSingleRow, setIsSingleRow] = useState<boolean>(true);
  const { width } = useWindowSize(100);

  useLayoutEffect(() => {
    const checkSingleRow = () => {
      if (parentRef.current) {
        const parentWidth = parentRef.current.offsetWidth;
        const totalChildrenWidth = Array.from(parentRef.current.children).reduce(
          (total, child) => total + (child as HTMLElement).offsetWidth,
          0,
        );

        // Check if total width of children exceeds parent's width
        setIsSingleRow(totalChildrenWidth <= parentWidth);
      }
    };

    // Initial check
    checkSingleRow();
  }, [1]);

  console.log(!isSingleRow && 'tes');

  return (
    <div ref={parentRef} className={`${className} parent-div ${isSingleRow ? 'single-row' : 'multi-row'}`}>
      {children}
    </div>
  );
};
