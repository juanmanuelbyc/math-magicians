import calculate from './logic/calculate';

describe('test calculate logic for different cases', () => {
  test('sum 2 + 2 = 4', () => {
    const obj = { total: '2', next: '2', operation: '+' };
    const key = '=';
    const resultObj = calculate(obj, key);
    expect(resultObj).toStrictEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });

  test('when receiving AC all values null', () => {
    const obj = { total: '89', next: '-5', operation: 'x' };
    const key = 'AC';
    const resultObj = calculate(obj, key);
    expect(resultObj).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('when theres no any value or operation add to next', () => {
    const obj = { total: null, next: null, operation: null };
    const key = '5';
    const resultObj = calculate(obj, key);
    expect(resultObj).toStrictEqual({ total: null, next: '5' });
  });

  test('when theres only primary value and then press an operation  button', () => {
    const obj = { total: null, next: '100', operation: null };
    const key = '-';
    const resultObj = calculate(obj, key);
    expect(resultObj).toStrictEqual({
      total: '100',
      next: null,
      operation: '-',
    });
  });
});
