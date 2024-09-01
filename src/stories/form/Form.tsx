import { type FormEvent } from 'react';

export const Form: React.FC<{
  children: React.ReactNode;
  onSubmit: (formData: {
    [k: string]: {
      error: boolean;
      value: string;
    };
  }) => void;
}> = ({ children, onSubmit, ...props }): JSX.Element => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Assert that e.currentTarget is an HTMLFormElement
    const form = e.currentTarget as HTMLFormElement;

    if (form) {
      // Trigger change and blur events on all form elements
      Array.from(form.elements).forEach((element) => {
        if (
          element instanceof HTMLInputElement ||
          element instanceof HTMLTextAreaElement ||
          element instanceof HTMLSelectElement
        ) {
          element.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
    }

    const formData = Object.fromEntries(
      Array.from(form.elements)
        .filter((element): element is HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement => {
          return (
            element instanceof HTMLInputElement ||
            element instanceof HTMLTextAreaElement ||
            (element instanceof HTMLSelectElement && element.name !== '')
          );
        })
        .map((element) => [element.name, { error: element.className.includes('error'), value: element.value }]),
    );

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

Form.displayName = 'Form';
