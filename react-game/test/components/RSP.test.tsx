import { render } from '@testing-library/react';
import RCP, { calcRSP } from '../../components/RSP';

describe('Rcp page의 서버사이드렌더링도 다될까?', () => {
  it('has children words', () => {
    expect(calcRSP('Rock', 'Scissor')).toBe('win');
    // console.log(container);
    // expect(container).toHaveTextContent('승 / 패 / 무');
  });
});
