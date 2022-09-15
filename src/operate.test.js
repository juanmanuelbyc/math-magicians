import operate from './logic/operate';

describe('test operate logic for different cases', () => {
  test('sum 10 - 5 = 5', () => {
    const n1 = '10';
    const n2 = '5';
    const op = '-';
    const resultObj = operate(n1, n2, op);
    expect(resultObj).toStrictEqual('5');
  });

  test('mult 35 x 4 = 140', () => {
    const n1 = '35';
    const n2 = '4';
    const op = 'x';
    const resultObj = operate(n1, n2, op);
    expect(resultObj).toStrictEqual('140');
  });

  test('div -6 / 4 = -1.5', () => {
    const n1 = '-6';
    const n2 = '4';
    const op = '÷';
    const resultObj = operate(n1, n2, op);
    expect(resultObj).toStrictEqual('-1.5');
  });

  test('mod 29 % 6 = 5', () => {
    const n1 = '29';
    const n2 = '6';
    const op = '%';
    const resultObj = operate(n1, n2, op);
    expect(resultObj).toStrictEqual('5');
  });
});
