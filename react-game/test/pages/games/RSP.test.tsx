import { render } from '@testing-library/react';
import RSP from '../../../components/RSP';
import Rsp from '../../../pages/game/rsp';

describe('Rcp page의 서버사이드렌더링도 다될까?', () => {
  it('has children words', () => {
    const { container } = render(<Rsp />);
    // console.log(container);
    expect(container).toHaveTextContent('승:');
  });
});
