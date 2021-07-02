import { render } from '@testing-library/react';
import Button from '../../components/Common/Button';

describe('button', () => {
  it('has children words', () => {
    const { container } = render(<Button onClick={() => {}}>버튼테스트~</Button>);
    // console.log(container);
    expect(container).toHaveTextContent('버튼테스트~');
  });
});
