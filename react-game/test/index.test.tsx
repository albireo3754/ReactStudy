import App from 'next/app';
import { render } from '@testing-library/react';
import Index from '../pages';

describe('index page', () => {
  it('say hello react game', () => {
    const { container } = render(<Index />);
    expect(container).toHaveTextContent('안녕하세요 위 게임중 하나를 클릭하여 보세요.');
  });
});
