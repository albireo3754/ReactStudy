import App from 'next/app';
import { render } from '@testing-library/react';
import Index from '../pages';

describe('index page', () => {
  it('say hello react game', () => {
    const { container } = render(<Index />);
    expect(container).toHaveTextContent('hello react game');
  });
});
