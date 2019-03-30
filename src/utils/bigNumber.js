import { BigNumber } from 'bignumber.js';

export function bigNumberFilter(val, number) {
  const num = number === 8 ? 100000000: 1000000000000000000
  return BigNumber(val).div(num).toString(10)
}
