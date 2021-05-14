import { pickRandom } from '../../components/Gugudan';

describe('Gugudan', () => {
  it('picks random number', () => {
    expect(pickRandom()).toBeGreaterThanOrEqual(1);
    expect(pickRandom()).toBeLessThanOrEqual(9);
  });
});
