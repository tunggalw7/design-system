// Button.test.tsx

import { render, screen,  } from '@testing-library/react';

import Button from './Button'; 
// export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'outline-danger';

describe('Button component', () => {
  test('renders with correct variant', () => {
    const variants: any[] = ['primary', 'secondary', 'danger', 'outline', 'outline-danger'];

    variants.forEach((variant) => {
      render(<Button type="button" variant={variant} label="Click me" />);
      const buttonElement = screen.getByRole('button');
      
      expect(buttonElement).toBeInTheDocument();
      expect(buttonElement).toHaveClass(`bg-${variant}`);
    });
  });

  test('throws error with incorrect variant', () => {
    const incorrectVariant = 'invalid-variant';

    // Using jest.spyOn to capture the expected error message
    const spyConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

    // Should throw an error because of the invalid variant
    expect(() => render(<Button variant={incorrectVariant} label="Click me"></Button>)).toThrow();

    // Checking if the error message matches the expected one
    expect(spyConsoleError).toHaveBeenCalledWith(expect.stringContaining('Invalid variant'));

    // Restoring the console.error function after testing is done
    spyConsoleError.mockRestore();
  });
});
