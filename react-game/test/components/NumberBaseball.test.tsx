import { pickRandomNumbers } from '../../components/NumberBaseball';

describe('NumberBaseball', () => {
  describe('pickRandomNumbers', () => {
    it('picks 4 random numbers', () => {
      expect(pickRandomNumbers(4)).toHaveLength(4);
    });
    it('picks number 0 ~ 9', () => {
      const numbers = pickRandomNumbers(4);
      numbers.forEach((number) => {
        expect(number).toBeLessThanOrEqual(9);
        expect(number).toBeGreaterThanOrEqual(0);
      });
    });
  });
});
